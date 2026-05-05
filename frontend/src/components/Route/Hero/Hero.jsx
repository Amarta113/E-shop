import React from 'react'
import styles from '../../../styles/styles'
import studioImg from '../../../assets/free-stock.jpg'

export default function Hero() {
    return (
        <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-black">
                    Get Awesome Deals! Just for you
                </h1>
              
                <div className="flex items-center gap-4 mt-8 text-sm">
                    <button className="bg-white hover:bg-slate-200 text-black active:scale-95 rounded-md px-7 h-11">
                        Shop Now!!
                    </button>
                </div>
            </div>
            <img
                src={studioImg}
                alt="hero"
                className="max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300 rounded-xl object-cover"
                />
        </section>
    )
}
