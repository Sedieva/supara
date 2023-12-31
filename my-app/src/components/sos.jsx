import React from "react";
import './sos.css'
import tab2 from './img.jpg/taabaldy.egemberdi2.jpeg'
import tab11 from './img.jpg/tab11.jpg'
import tab22 from './img.jpg/tab22.jpg'
import tab33 from './img.jpg/tab33.jpeg'
import tab44 from './img.jpg/tab44.jpg'
import xad44 from './img.jpg/zadnuy.jpg'
export default function Sozdat() {
    return (
        <div className="container22">
            <h1>О создателя комплекса</h1>

            <h2>Таабалды Эгембердиев</h2>

            <div className="container2">
                <img src={tab2} alt="" />

                <div>
                    <p>Киргизский предприниматель, основатель и президент ЗАО «Шоро»

                        Киргизский управленец и предприниматель, основатель, основной владелец и президент ЗАО «Шоро», создатель Этнографического комплекса Супара и Супара Чункурчак, архитектор, миллионер, публицист, общественный деятель, философ по призванию.
                        В 1992 году основал ЗАО «Шоро», предприятие по производству и распространению безалкогольных напитков. ЗАО «ШОРО» один из лидеров пищевой промышленности Киргизии. Основные бренды компании «Шоро» — национальные напитки «Максым Шоро», «Чалап-Шоро», «Жарма-Шоро», «Бозо-Шоро». Также компания выпускает серию минеральных и родниковых вод, таких как: негазированная родниковая вода «Tien Shan Legend»; газированная родниковая вода «Байтик»; минеральная газированная вода «Ысык-Ата».
                        В 2009 году в пригороде Бишкека построил этнографический комплекс «Супара», в 2014 году закончил 30 % задуманного проекта Супара Чункурчак.

                        С 2011 года Президент федерации ордо Киргизии.

                        Личная жизнь и семья

                        Отец-Эгембердиев Бердигул, 1900 года рождения. Мать-Эгембердиева Суйун, 1929 года рождения. Брат − Эгембердиев Жумадил Бердигулович. Сестра − Эгембердиева Анаркан Бердигуловна. Имеет 3 сына и 3 дочери. Айдар, Кайрат, Алмаз и Айдана, Салтанат, Назгул. Трое состоят в браке. 10 внуков. Супруга- Турганбаева Жанылсынзат Турдакуновна.



                    </p>
                    <p>Смерть

                        16 мая 2015 года скончался в Бишкеке, после продолжительной болезни, в ноябре 2014 года в Германии поставили диагноз после операции. Диагноз: мезотелиома плевры. Длительное время проходил лечение в Германии.

                    </p>
                </div>
            </div>
           <div className="photo">
            <img src={tab11} alt="" />
            <img src={tab22} alt="" />
            <img src={tab33} alt="" />
            <img src={tab44} alt="" />
           </div>
        </div>
    )
}