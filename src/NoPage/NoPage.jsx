import { Link } from "react-router-dom"

import './NoPage.css'

export default function NoPage() {

    return (
        <div className="no-page">
            <p>Oops! There is no page there!</p>
            <Link to={"/"}>
                <i id="link" className="fa fa-home"></i>
            </Link>
        </div>
    )

}