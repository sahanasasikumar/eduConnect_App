import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = ({children}) => {
    return (
        <>
        <div class="backgnd">
            <h5>eduConnect</h5>
            <div class="menu">
                    <Link to='/chat'>Chat</Link>
                    <a href>    </a>
                    <Link to='/questions'>Q&A</Link>
                    <a href>    </a>
                    <Link to='/rso'>RSOs</Link>
                    <a href>    </a>
                    <Link to='/freshman'>Incoming Freshman</Link>
                    <a href>    </a>
                    <Link to='/roommate'>Roommates</Link>
                    <a href>    </a>
                    <Link to='/profile'>Profile</Link>
            </div>
        </div>
        </>
    )
}

export default Menu