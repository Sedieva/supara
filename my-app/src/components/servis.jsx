import React from "react";
import './servis.css'
import Ser1 from'./img.jpg/servis1.jpg'
import Ser2 from'./img.jpg/servis2.jpg'
import Ser3 from'./img.jpg/servis3.jpeg'
import Ser4 from'./img.jpg/servis4.jpg'
import Ser5 from'./img.jpg/servis5.jpg'
import Ser6 from'./img.jpg/servis-6.jpg'
import Ser7 from'./img.jpg/servis7.jpeg'
import Ser8 from'./img.jpg/servis8.jpeg'
import zad5 from'./img.jpg/zadnuy.jpg'
export default function Servis() {
    return (
        <div className="container">
            <h1>Сервис</h1>
            <p>Изначально ориентированный на иностранных гостей, этнокомплекс оказался популярен и среди кыргызстанцев. При его создании учитывались пять чувств человека: когда гость приезжает, он сначала видит юрты, дома и традиционный интерьер. Тут же срабатывает чувство осязания, потому что человек может потрогать различные элементы декора. Потом подаются блюда, приготовленные по старинным рецептам. Это все сопровождается национальной музыкой и запахами арчи или горящих дров.</p>
            <p>Когда этнокомплекс еще не был достроен, гости из Чехии захотели сыграть в нем свадьбу. Жанылсынзат Турганбаева вспоминает, что даже кухня была не готова и пришлось заказывать кейтеринг. На свадьбе было 200 человек: потом эти 200 человек рассказали о «Супаре» своим знакомым, и так о ней узнали за границей. Тогда предпринимательница поняла, что каждого гостя нужно принимать с большим уважением и любовью, и тогда они вернутся. Также приезжают кыргызстанцы, которые живут и работают за границей: они привозят с собой своих иностранных друзей или коллег, чтобы показать родную культуру.

            </p>
            <p>Жанылсынзат Турганбаева говорит, что главные особенности Кыргызстана – воздух, вода, первозданная природа и люди. «Супара» рассчитана на туриста, который тянется к природе. В комплексах нет, например, ухоженного английского газона: создатели хотели сохранить природный вид. На территории можно встретить редкие растения, которые Табылды Бердигулович специально привозил из горных местностей. Для развития туризма, считает Жанылсынзат Турганбаева, необходимо создавать условия и сервис, а природу не трогать. Например, если проложить хорошие дороги к природным достопримечательностям, до которых трудно добираться, и создать условия для комфортного жилья, то остальное сделают природа и местные жители. </p>
            <p>Также этнокомплекс покупает все молочные продукты только у местных жителей: это дорого, но так оказывается поддержка гражданам Кыргызстана.  </p>
        <div className="servis-img">
            <img src={Ser1} alt="" />
            <img src={Ser2} alt="" />
            <img src={Ser3} alt="" />
            <img src={Ser4} alt="" />
            <img src={Ser5} alt="" />
            <img src={Ser6} alt="" />
            <img src={Ser7} alt="" />
            <img src={Ser8} alt="" />
        </div>
        </div>
    )
}