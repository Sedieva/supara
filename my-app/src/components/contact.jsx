import React from "react";
import './contact.css'
import Logos from './img.jpg/logo-chunkurchakbw.png'
import Zad1 from './img.jpg/zadnuy.jpg'
export default function Contact() {
    return (
        <div className="const">
            <h1>Контакт</h1>
            <img src={Logos} alt="" />
            <p>Кыргызская Республика,<br />
                Чуйская область,<br />
                Аламудинский район,<br />
                Урочище Чункурчак <br />


                Тел.:+996 (554) 961414 <br />
                Моб.:+996 (553) 787272 <br />
               <a href="https://instagram.com/supara.chunkurchak?igshid=MTk0NTkyODZkYg==">chunkurchak@supara.kg</a></p>
        </div>
    )
}
