import 
  { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, getCountFromServer, query, orderBy, startAfter, limit, where, Timestamp } 
from 'firebase/firestore'
import { db } from '../firebase.config';
import { useState } from 'react';

export const useFirebaseDB = () => {
    const [queryCount, setQueryCount] = useState(0)
    // const [query, setQuery]  = useState([])

    const getDataWithId = async (table, id) => {
        const dataDoc = doc(db, table, id);
        const result = await getDoc(dataDoc);
        return {...result.data(), id: id}
    }

    const getTotalData = async(table) => {
        const collectionRef = collection(db, table);
        const snapshot = await getCountFromServer(collectionRef);
        setQueryCount(snapshot.data().count);
    }

    const getAllData = async (table) =>  {
        const collectionRef = collection(db, table)

        try{
            const result = await getDocs(collectionRef)
            return result.docs.map(doc => ({...doc.data(), id: doc.id}))
            // setQuery(result.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        catch(error) {
            console.log(error)
            return error
        }
    }

    const getDataWhereKeyValue = async(table, key, value, operator='==') => {
        const collectionRef = query(collection(db, table), where(key, operator, value));
        // const collectionRef = query(collection(db, table), where("capital", "==", true));
        try {
            const result = await getDocs(collectionRef)
            return result.docs.map(doc => ({...doc.data(), id: doc.id}))
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    const addData = async (table, data) => {
        try{
            const collectionRef = collection(db, table)
            let result = await addDoc(collectionRef, data)
            return result.id
        }
        catch(error) {
            console.log(error)
            return error
        }
    }

    const updateDate = async (table, data, id) => {
        try{
            const dataDoc = doc(db, table, id)
            await updateDoc(dataDoc, data)
        }
        catch(error) {
            console.log(error)
            return error
        }
    }

    const deleteData = async (table, id) => {
        try{
            const dataDoc = doc(db, table, id)
            await deleteDoc(dataDoc)
        }
        catch(error) {
            console.log(error)
            return error
        }
    }

    function convertTimestamp(timestamp) {
        let date = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
        return date.toLocaleString()
    }

    return { 
        query, queryCount, getTotalData, getAllData, addData, convertTimestamp,
        updateDate, deleteData, getDataWithId, getDataWhereKeyValue
    }
}