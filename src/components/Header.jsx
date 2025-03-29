import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

export default function Header() {
    return (
        <header className="header">
            <div className='container'>
                <div className="header_wrapper">
                    <h1 className="header_title">N W V</h1>
                    <div className="header_wrappers">
                        <Link to="/" className="header_suptitle">Главная</Link>
                        <Link to="/courses" className="header_suptitle">Курсы</Link>
                        <Link to="/about" className="header_suptitle">О нас</Link>
                        <Link to="/contacts" className="header_suptitle">Контакты</Link>
                        <select className='header_select'>
                            <option value="">Русский</option>
                            <option value="">English</option>
                            <option value="">Ispain</option>
                            <option value="">Kyrgyz</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}
