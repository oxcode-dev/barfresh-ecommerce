import { useDispatch } from "react-redux";
import RootLayout from "../layout/checkout";
import { CheckoutSection } from '../sections/Checkout'
import { useFirebaseDB } from "../hooks/useFirebaseDB";
import { fetchProducts } from "../store/slices/ProductsSlice";
import { useEffect } from "react";
import { o_O } from "../helpers";

export default function Checkout() {
    const { getAllData } = useFirebaseDB()
    const dispatch = useDispatch()

    const queryProducts = async() => {
        let [error, data] = await o_O(getAllData('products'))
        if(error) return console.log(error)

        dispatch(fetchProducts(data))
    }

    useEffect(() => {
        queryProducts()
    }, [])

    return (
        <RootLayout>
            <CheckoutSection />
        </RootLayout>
    )
}