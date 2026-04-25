import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/vendors-logo.png'
import styles from '../../styles/styles'

export default function Header() {
    return (
        <>
        <div className={`${styles.section}`}>
            <div className="h-[50px] my-[20px] flex items-center justify-between">
                <div>
                    <Link to='/'>
                        <img src={logoImg} alt='logo' className='w-[40px]' />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}