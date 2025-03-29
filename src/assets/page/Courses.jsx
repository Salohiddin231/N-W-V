import React from 'react'
import '../../assets/css/courses.css'
import ilimination from '../../assets/images/Illustration.png'
import regbi from '../../assets/images/reg.png'

export default function Courses() {
    return (
        <main>
            <section className="heroc">
                <div className="container">
                    <div className="heroc_left_rigth">
                        <img src={ilimination} alt="" />
                        <div className="heroc_left">
                            <h2 className="heroc_left_title">
                                Наши курсы
                                New World Viev
                            </h2>
                            <p className="heroc_text">
                                By <span>N W V</span>  |  Dec 20, 2024
                            </p>
                            <p className="heroc_left_suptitle">
                                Наша компания была создана с целью помочь людям освоить современные IT-навыки и английский язык для успешного карьерного роста и комфортной жизни. Мы объединили команду профессионалов, которые искренне верят, что качественное образование открывает новые возможности.

                            </p>
                            <p className="heroc_left_suptitle">
                                С момента основания мы стремимся делать обучение доступным, практическим и максимально эффективным.
                            </p>
                            <button className="heroc_btn">Подробнее</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='cards'>
                <div className="container">
                    <ul className="cards_list">
                        <li className="cards_box">
                            <img src={regbi} alt="" />
                            <h3 className="cards_title">English</h3>
                            <p className="cards_sup">3500 сом</p>
                            <button className="cards_btn">Подробнее</button>
                        </li>
                        <li className="cards_box">
                            <img src={regbi} alt="" />
                            <h3 className="cards_title">English</h3>
                            <p className="cards_sup">3500 сом</p>
                            <button className="cards_btn">Подробнее</button>
                        </li>
                        <li className="cards_box">
                            <img src={regbi} alt="" />
                            <h3 className="cards_title">English</h3>
                            <p className="cards_sup">3500 сом</p>
                            <button className="cards_btn">Подробнее</button>
                        </li>
                        <li className="cards_box">
                            <img src={regbi} alt="" />
                            <h3 className="cards_title">English</h3>
                            <p className="cards_sup">3500 сом</p>
                            <button className="cards_btn">Подробнее</button>
                        </li>
                        <li className="cards_box">
                            <img src={regbi} alt="" />
                            <h3 className="cards_title">English</h3>
                            <p className="cards_sup">3500 сом</p>
                            <button className="cards_btn">Подробнее</button>
                        </li>
                        <li className="cards_box">
                            <img src={regbi} alt="" />
                            <h3 className="cards_title">English</h3>
                            <p className="cards_sup">3500 сом</p>
                            <button className="cards_btn">Подробнее</button>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
