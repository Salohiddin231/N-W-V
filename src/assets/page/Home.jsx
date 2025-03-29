import React from 'react'
import '../css/style.css'
import '../css/hero.css'
import '../css/card.css'
import '../css/map.css'
import '../css/cart.css'
import '../css/info.css'
import bokmark from '../images/Bookmark.svg'
import teacher from '../images/teacher.png'

export default function Home() {
    return (
        <main>
            <section className='hero'>
                <div className="container">
                    <div className="hero_wrapper">
                        <p className="hero_text">Education center</p>
                        <h2 className="hero_title">Измени свое будущее с
                            New World Viev</h2>
                        <p className="hero_infos">By <span>N W V</span>  |  Feb 5, 2025 </p>
                        <p className="hero_suptitle">Курсы по IT и английскому языку для успешной карьеры, профессионального развития и комфортной жизни в динамично развивающемся мире технологий и международного общения.</p>
                        <button className="hero_btn">Подробнее</button>
                    </div>
                </div>
            </section>
            <section className='card'>
                <div className="container">
                    <h2 className="card_title">Наши примущества</h2>
                    <ul className="card_list">
                        <li className="card_li">
                            <div className="card_box">
                                <button className="card_img_bg">
                                    <img src={bokmark} alt="Bookmark icon" />
                                </button>
                                <h3 className="card_suptitle">Наши преимущества</h3>
                                <p className="card_text">Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику.</p>
                            </div>
                            <div className="card_box">
                                <button className="card_img_bg">
                                    <img src={bokmark} alt="" />
                                </button>
                                <h3 className="card_suptitle">Наши преимущества</h3>
                                <p className="card_text">Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику.</p>
                            </div>
                        </li>
                        <li className="card_li">
                            <div className="card_box">
                                <button className="card_img_bg">
                                    <img src={bokmark} alt="" />
                                </button>
                                <h3 className="card_suptitle">Наши преимущества</h3>
                                <p className="card_text">Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику.</p>
                            </div>
                            <div className="card_box">
                                <button className="card_img_bg">
                                    <img src={bokmark} alt="" />
                                </button>
                                <h3 className="card_suptitle">Наши преимущества</h3>
                                <p className="card_text">Мы предлагаем современные образовательные программы, разработанные экспертами в своей сфере. Наши методики обучения сочетают теорию и практику.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="map">
                <div className="container">
                    <h3 className="map_title">Наши контакты</h3>
                    <div className="map_wrapper">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4e8e5110e3edea875a5ed539afa14c2ad6fd05b884e822c072d5787c70dd2719&amp;source=constructor" width="882" height="643" frameBorder="0" title="Map"></iframe>
                        <div className="map_box">
                            <h3 className="map_suptitle">Свяжитесь с нами для бесплатной консультации</h3>
                            <p className="map_text">Приходите к нам! Удобное расположение, комфортная атмосфера и дружелюбный коллектив – ждем вас по адресу!</p>
                            <p className="map_text2">Курманжан Датка 547
                                Ориентир: напротив Business House Osh</p>
                            <button className="map_btn">+996 505 00 44 11</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cart">
            <div className="container">
                <div className="cart_title">Учителя</div>
                <ul className="cart_list">
                    <li className="cart_li">
                        <img className='cart_img' src={teacher} alt="Teacher" />
                        <h4 className='cart_name'>Айжана Ибрагимова</h4>
                        <p className="cart_subject">English</p>
                        <p className="cart_info">Приходите к нам! Удобное расположение, комфортная атмосфера и дружелюбный коллектив.</p>
                    </li>
                    <li className="cart_li">
                        <img className='cart_img' src={teacher} alt="" />
                        <h4 className='cart_name'>Айжана Ибрагимова</h4>
                        <p className="cart_subject">English</p>
                        <p className="cart_info">Приходите к нам! Удобное расположение, комфортная атмосфера и дружелюбный коллектив.</p>
                    </li>
                    <li className="cart_li">
                        <img className='cart_img' src={teacher} alt="" />
                        <h4 className='cart_name'>Айжана Ибрагимова</h4>
                        <p className="cart_subject">English</p>
                        <p className="cart_info">Приходите к нам! Удобное расположение, комфортная атмосфера и дружелюбный коллектив.</p>
                    </li>
                </ul>
            </div>
        </section>
            <section className="info">
                <div className="container">
                    <h4 className="info_title">Немного о нас</h4>
                    <div className="info_box">
                        <div className="info_left">
                            <p className="info_text">О нас</p>
                            <h4 className='info_suptitle'>Мы - сообщество IT-специалистов, объединенных общей целью - делиться знаниями и опытом.</h4>
                            <p className="info_podtext">Наш учебный центр предлагает широкий выбор курсов и программ обучения, которые помогут вам освоить самые востребованные навыки в сфере информационных технологий.</p>
                        </div>
                        <div className="info_right">
                            <p className="info_text">Наша миссия</p>
                            <h4 className='info_suptitle'>Мы видим свою миссию в том, чтобы сделать IT-образование доступным и эффективным.</h4>
                            <p className="info_podtext">Мы постоянно обновляем наши программы обучения, чтобы они соответствовали последним тенденциям и требованиям рынка. Наша задача - выпустить квалифицированных IT-специалистов, которые будут востребованы на рынке труда.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
