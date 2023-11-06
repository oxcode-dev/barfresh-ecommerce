'use client'
import { getProducts } from "../store/slices/ProductsSlice"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useOrderDetail = () => {
    const products = useSelector(getProducts) || []

    // const [totalAmount, setTotalAmount] = useState(0)

    const getProductDetails = product_id => {
        return product_id ? products.find(n => n.id === product_id) : {}
    }

    const totalCartsPrice = (items) => {
        let amount = items.reduce((acc = {}, item = {}) => {
            const itemTotal = parseFloat((item.quantity * getProductDetails(item.product_id)?.price || 0).toFixed(2));
            acc.total = parseFloat((acc.total + itemTotal))
            return acc;
        },  { total: 0 })

        return amount.total
    }

    return {
        getProductDetails, totalCartsPrice
    }
}