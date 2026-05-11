import React, { useEffect, useState } from 'react'
import { productData } from '../../static/data'
import styles from '../../styles/styles'
import ProductCard from '../ProductCard/ProductCard'

export default function BestDeals(){
    const [data, setData] = useState([])
    useEffect(() => {
        if (!productData?.length) return
        const d = [...productData].sort((a, b) => b.total_sell - a.total_sell)
        setData(d.slice(0, 4))
    }, [])

    return(
        <div>
            <div className={`${styles.section}`}>
                <div className={`${styles.heading}`}>
                    <h1>Best Deals</h1>
                </div>
                <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0'>
                    {
                        data && data.map((i, index) => (
                            <ProductCard data={i} key={index}/>
                        ))
                    }                    
                </div>
            </div>
        </div>
    )
}