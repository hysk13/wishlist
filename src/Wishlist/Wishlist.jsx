import { useParams } from 'react-router-dom'

import simp_list from '../assets/simp.json'

import Header from '../Public/Header.jsx'
import Footer from '../Public/Footer.jsx'
import './Wishlist.css'

export default function Wishlist() {

    const { id } = useParams()
    const description = [
        "Top is the \"easiest\" thing to do, as in what even friends would do. Going down, it gets \"more difficult\", such as what only couples would do."
    ]
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
            <div className='section'>
                <p>{description[id]}</p>
                <p>
                    {checkDone(browse[id])}/{browse[id].length}
                </p>
                {[...browse[id]].map((item) => (
                    <div id='catalog-item-list' key={browse[id].indexOf(item)}>
                        <p>{browse[id].indexOf(item)+1}</p>
                        <i className={'fa ' + ((item.done) ? ('fa-check') : ('fa-question'))} />
                        <p>{(item.done) ? (item.name) : ("???")}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )

}