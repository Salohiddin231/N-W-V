import React from 'react'
import '../../assets/css/about.css'
import icon from '../../assets/images/Icon.svg'
import tech from '../../assets/images/teacher.png'

export default function About() {
    return (
        <main>
            <section className="heroa">
                <div className="container">
                    <div className="heroa_left_rigth">
                        <h2 className="heroa_title">Курс <span>Front - End Development</span> В New World View</h2>
                        <p className="heroa_sup">Front end разработка - это создание пользовательского интерфейса веб-сайта или приложения, то есть всего того, что видит пользователь и с чем он взаимодействует. Front end разработчик отвечает за внешний вид, структуру и поведение веб-страницы.</p>
                        <button className="heroa_btn">Записаться</button>
                    </div>
                </div>
            </section>
            <section className="infos">
                <div className="container">
                    <h3 className="infos_title">Информация о курсе</h3>
                    <ul className="infos_list">
                        <li className="infos_box">
                            <div className="infos_bg">
                                <img src={icon} alt="" />
                            </div>
                            <h3 className="infos_titles">Оплата <span>7700 сом</span> в месяц</h3>
                            <p className="infos_sup">Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику.</p>
                        </li>
                        <li className="infos_box">
                            <div className="infos_bg">
                                <img src={icon} alt="" />
                            </div>
                            <h3 className="infos_titles">Оплата <span>7700 сом</span> в месяц</h3>
                            <p className="infos_sup">Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику.</p>
                        </li>
                        <li className="infos_box">
                            <div className="infos_bg">
                                <img src={icon} alt="" />
                            </div>
                            <h3 className="infos_titles">Оплата <span>7700 сом</span> в месяц</h3>
                            <p className="infos_sup">Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику.</p>
                        </li>
                        <li className="infos_box">
                            <div className="infos_bg">
                                <img src={icon} alt="" />
                            </div>
                            <h3 className="infos_titles">Оплата <span>7700 сом</span> в месяц</h3>
                            <p className="infos_sup">Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="teacher">
                <div className="container">
                    <h4 className="teacher_title">Пеподователи</h4>
                    <ul className="teacher_list">
                        <li className="teacher_box">
                            <img src={tech} alt="" />
                            <h4 className="teacher_titles">Рома Салимов</h4>
                            <p className="teacher_sup">C E O</p>
                            <p className="teacher_text">Приходите к нам! Удобное расположение, комфортная атмосфера и дружелюбный коллектив.</p>
                        </li>
                        <li className="teacher_box">
                            <img src={tech} alt="" />
                            <h4 className="teacher_titles">Рома Салимов</h4>
                            <p className="teacher_sup">C E O</p>
                            <p className="teacher_text">Приходите к нам! Удобное расположение, комфортная атмосфера и дружелюбный коллектив.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
