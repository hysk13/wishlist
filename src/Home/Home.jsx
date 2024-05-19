import './Home.css'

import catalog from '../assets/catalog.json'
import simp_list from '../assets/simp.json'

import { Link } from 'react-router-dom'

import Header from '../Public/Header.jsx'
import Footer from '../Public/Footer.jsx'

export default function Home() {

    const browse = [
        simp_list.items
    ]

    function checkDone(array) {
        let arr = [...array]
        let doneCount = 0
        for (let x of arr) {
            if (x.done) {
                doneCount++
            }
        }
        return doneCount
    }

    return (
        <>
            <Header />
            <section>
                {[...catalog.catalog].map((item) => (
                    <div id='catalog-item' key={catalog.catalog.indexOf(item)}>
                        <p>{item} ({checkDone(browse[catalog.catalog.indexOf(item)])}/{browse[catalog.catalog.indexOf(item)].length})</p>
                        <Link tabIndex={-1} to={"/wishlist/" + catalog.catalog.indexOf(item)}>
                            <i className='fa fa-play'></i>
                        </Link>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    )

}