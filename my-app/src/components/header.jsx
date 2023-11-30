import React from "react";
import './head.css'
import Zadn from'./img.jpg/zadn2.jpg'
import { NavLink } from "react-router-dom";


export default function Header(){
    return(
        <div>
            <header>
                
                <h1>Supara Chunkurchak</h1>
                <nav className="nav">
                 <NavLink to='complex-page'>О комплексе</NavLink>
                 <NavLink to='sozdat-page'>О создателя комплекса</NavLink>
                 <NavLink to='hotel-page'>Об отеле </NavLink>
                 <NavLink to='servis-page'>Сервис</NavLink>
                 <NavLink to='contact-page'>Контакты</NavLink>
                </nav>
                
            </header>
            </div>
    )
}
// margin:0auto