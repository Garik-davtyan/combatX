import React, { useState, useRef, useEffect } from "react";
import logo from "../image/combatXblack.jpg";
import { Link } from "react-router-dom";
import "../styles/header.css";


import { FaShoppingCart } from "react-icons/fa";
import "../styles/header.css";
import { useLang } from '../i18n/LangContext';

function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const menuRef = useRef(null);
    // Язык интерфейса через контекст
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const { lang, setLang } = useLang();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
                setLangMenuOpen(false);
                // Не закрываем мобильное меню при клике вне, только desktop dropdown
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMenuOpen = (menu) => {
        setOpenMenu(menu === openMenu ? null : menu);
    };
    const handleMenuLinkClick = () => {
        setOpenMenu(null);
        setMobileOpen(false); // Теперь закрываем мобильное меню при переходе по ссылке
        setMobileDropdown(null);
    };

    const handleMobileDropdown = (menu) => {
        setMobileDropdown(mobileDropdown === menu ? null : menu);
    };

    return (
        <div className="header1" ref={menuRef}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/">
                    <img className="logo1" src={logo} alt="sporterra"  />
                </Link>
            </div>
            {/* Иконки справа (десктоп и мобилка) — теперь перед бургер-меню */}
            <div className="header-icons" style={{position:'relative'}}>
                <Link to="/cart" className="header-icon-link" aria-label="Корзина">
                    <FaShoppingCart size={22} />
                </Link>
                {/* Переключатель языка (выпадающее меню) */}
                <div style={{display:'flex',alignItems:'center',marginLeft:8}}>
                    <button aria-haspopup="true" aria-expanded={langMenuOpen} onClick={() => setLangMenuOpen(v => !v)}
                        style={{background:'transparent',border:'1px solid transparent',padding:6,borderRadius:6,cursor:'pointer'}}
                        title={lang === 'hy' ? 'Հայերեն' : 'Русский'}>
                        {lang === 'hy' ? '🇦🇲' : '🇷🇺'}
                    </button>
                    {langMenuOpen && (
                        <div role="menu" aria-label="Выбор языка" style={{position:'absolute',right:0,top:'46px',background:'#fff',border:'1px solid #eee',boxShadow:'0 6px 18px rgba(0,0,0,0.12)',borderRadius:8,padding:8,display:'flex',flexDirection:'column',gap:6}}>
                            <button onClick={() => { setLang('hy'); setLangMenuOpen(false); }} style={{background:'transparent',border:'none',padding:6,cursor:'pointer'}}>🇦🇲 Հայերեն</button>
                            <button onClick={() => { setLang('ru'); setLangMenuOpen(false); }} style={{background:'transparent',border:'none',padding:6,cursor:'pointer'}}>🇷🇺 Русский</button>
                        </div>
                    )}
                </div>
            </div>
            {/* Бургер-меню для мобильных — только в шапке! */}
            <button className="burger-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Открыть меню">
                <span className="burger-lines">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </span>
            </button>
            {/* Мобильное меню — без бургер-кнопки! */}
            {mobileOpen && (
                <nav className={"mobile-menu open"}>
                    <button className="menu-btn mobile-dropdown-btn" onClick={() => handleMobileDropdown('men')} aria-expanded={mobileDropdown==='men'}>тренировочные</button>
                    {mobileDropdown==='men' && (
                        <div className="mobile-dropdown-content">
                            <Link className="menu-btn" to="/men/tshirts" onClick={handleMenuLinkClick}>Майки</Link>
                            <Link className="menu-btn" to="/men/hoodies" onClick={handleMenuLinkClick}>Шорты</Link>
                            <Link className="menu-btn" to="/men/shorts" onClick={handleMenuLinkClick}>рашгард</Link>
                            <Link className="menu-btn" to="/men/sweatpants" onClick={handleMenuLinkClick}>леггинсы</Link>
                            <Link className="menu-btn" to="/men/tanktops" onClick={handleMenuLinkClick}>нижнее бельё</Link>
                        </div>
                    )}
                    <button className="menu-btn mobile-dropdown-btn" onClick={() => handleMobileDropdown('women')} aria-expanded={mobileDropdown==='women'}>повседневные</button>
                    {mobileDropdown==='women' && (
                        <div className="mobile-dropdown-content">
                            <Link className="menu-btn" to="/women/leggings" onClick={handleMenuLinkClick}>штаны</Link>
                            <Link className="menu-btn" to="/women/tops" onClick={handleMenuLinkClick}>верхняя одежда</Link>
                            <Link className="menu-btn" to="/women/tanktops" onClick={handleMenuLinkClick}>Майки</Link>
                            <Link className="menu-btn" to="/women/trainingshorts" onClick={handleMenuLinkClick}>Шорты </Link>
                            <Link className="menu-btn" to="/women/underwear" onClick={handleMenuLinkClick}>худи</Link>
                        </div>
                    )}
                    <button className="menu-btn mobile-dropdown-btn" onClick={() => handleMobileDropdown('combat')} aria-expanded={mobileDropdown==='combat'}>Экипировка и аксессуары</button>
                    {mobileDropdown==='combat' && (
                        <div className="mobile-dropdown-content">
                            <Link className="menu-btn" to="/combat/boxinggloves" onClick={handleMenuLinkClick}>Боксёрские перчатки</Link>
                            <Link className="menu-btn" to="/combat/mmagloves" onClick={handleMenuLinkClick}>Перчатки MMA</Link>
                            <Link className="menu-btn" to="/combat/handwraps" onClick={handleMenuLinkClick}>Бинты</Link>
                            <Link className="menu-btn" to="/combat/headguards" onClick={handleMenuLinkClick}>Шлемы</Link>
                            <Link className="menu-btn" to="/combat/punchingbags" onClick={handleMenuLinkClick}>сумки</Link>
                            
                        </div>
                    )}
                </nav>
            )}
            {/* Desktop меню */}
            <div className="menu-bar">
                <div className="menu-btn menu-dropdown" onClick={() => handleMenuOpen('men')}>
                    тренировочные
                    <div className={"dropdown-content small-dropdown" + (openMenu === 'men' ? '' : ' d-none')}>
                        <Link className="menu-btn" to="/men/tshirts" onClick={handleMenuLinkClick}>Майки</Link>
                        <Link className="menu-btn" to="/men/hoodies" onClick={handleMenuLinkClick}>Шорты</Link>
                        <Link className="menu-btn" to="/men/shorts" onClick={handleMenuLinkClick}>рашгард</Link>
                        <Link className="menu-btn" to="/men/sweatpants" onClick={handleMenuLinkClick}>леггинсы</Link>
                        <Link className="menu-btn" to="/men/tanktops" onClick={handleMenuLinkClick}>нижнее бельё</Link>
                    </div>
                </div>
                <span className="menu-separator">|</span>
                <div className="menu-btn menu-dropdown" onClick={() => handleMenuOpen('women')}>
                    повседневные
                    <div className={"dropdown-content small-dropdown" + (openMenu === 'women' ? '' : ' d-none')}>
                        <Link className="menu-btn" to="/women/leggings" onClick={handleMenuLinkClick}>штаны</Link>
                        <Link className="menu-btn" to="/women/tops" onClick={handleMenuLinkClick}>верхняя одежда</Link>
                        <Link className="menu-btn" to="/women/tanktops" onClick={handleMenuLinkClick}>Майки</Link>
                        <Link className="menu-btn" to="/women/trainingshorts" onClick={handleMenuLinkClick}>Шорты</Link>
                        <Link className="menu-btn" to="/women/underwear" onClick={handleMenuLinkClick}>худи</Link>
                    </div>
                </div>
                <span className="menu-separator">|</span>
                <div className="menu-btn menu-dropdown" onClick={() => handleMenuOpen('combat')}>
                    Экипировка и аксессуары
                    <div className={"dropdown-content small-dropdown" + (openMenu === 'combat' ? '' : ' d-none')}>
                        <Link className="menu-btn" to="/combat/boxinggloves" onClick={handleMenuLinkClick}>Боксёрские перчатки</Link>
                        <Link className="menu-btn" to="/combat/mmagloves" onClick={handleMenuLinkClick}>Перчатки MMA</Link>
                        <Link className="menu-btn" to="/combat/handwraps" onClick={handleMenuLinkClick}>Бинты</Link>
                        <Link className="menu-btn" to="/combat/headguards" onClick={handleMenuLinkClick}>Шлемы</Link>
                        <Link className="menu-btn" to="/combat/punchingbags" onClick={handleMenuLinkClick}>сумки</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header

