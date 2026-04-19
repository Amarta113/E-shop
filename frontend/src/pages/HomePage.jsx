import { Link } from 'react-router-dom'

export default function HomePage () {
    return (
        <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
            <div>
                <Link to="/">
                    <img src="C:\Users\hp\Downloads\Vendorz_logo.png" alt='logo'/>
                </Link>
            </div>
        </div>
    )
}
