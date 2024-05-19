import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    
    return (

        <footer>
            <div>
                <a href='https://github.com/hysk13/wishlist' target='_blank' tabIndex={-1}>
                    <i className='fa fa-code'></i>
                </a>
                <Link to={'/wishlist'}>
                    <i className='fa fa-home'></i>
                </Link>
            </div>
            <p>Last updated 5/19/2024</p>
        </footer>
    )

}