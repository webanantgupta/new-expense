import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';

const TrialApi = () => {
    const [items, setitems] = useState([]);
    console.log(items)

    const getData = async () => {
        let res = await fetch('https://dummyjson.com/products');
        let data = await res.json()
        console.log(data.products)
        setitems(data.products)

    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Navbar/>
            <h1>trial api component</h1>
        </div>
    )
}

export default TrialApi