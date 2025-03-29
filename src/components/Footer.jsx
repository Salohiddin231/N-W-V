import React from 'react';
import { Link } from 'react-router-dom';
import social from '../assets/images/Social.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer_wrapper">
                    <h6 className="footer_title">N W V</h6>
                    <div className="footer_wrappers">
                        <Link to="/" className="footer_link">Главная</Link>
                        <Link to="/courses" className="footer_link">Курсы</Link>
                        <Link to="/about" className="footer_link">О нас</Link>
                        <Link to="/contacts" className="footer_link">Контакты</Link>
                    </div>
                </div>
                <div className="footer_card">
                    <div className="footer_card_item">
                        <h5 className='footer_card_title'>Если у вас есть вопросы, то можете связаться с нами!</h5>
                        <div className="footer_card_wrap">
                            <input type="text" className="footer_inp" placeholder='Тел.номер' />
                            <button className="footer_btn">Отправить</button>
                        </div>
                    </div>
                </div>
                <div className="footer_end">
                  <div className="footer_end_wrap">
                    <h6 className="footer_end_title">Курманжан Датка 547</h6>
                    <h6 className="footer_end_title">
                      © Copylight 2025 New World View
                    </h6>
                  </div>
                  <img src={social} alt="Social Media" />
                </div>
            </div>
        </footer>
    );
}
