import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-left">
                    <div className="footer-section-title">Наши соц. сети</div>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/combatx.am?igsh=Z3MydDg5eno3dTky&utm_source=qr" target="_blank" rel="noreferrer" className="footer-btn footer-inst">Instagram</a>
                        <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noreferrer" className="footer-btn footer-tiktok">TikTok</a>
                    </div>
                </div>

                <div className="footer-center">
                    <div className="footer-title">Combat<span className="footer-x">X</span></div>
                    <div className="footer-desc">Магазин спортивной одежды и экипировки</div>
                    <div className="footer-contact">Телефон: <a href="tel:+37455566106">+374 55 566106</a></div>
                </div>

                {/* Мобильная версия: соцсети дублируются и расположены после центра на телефоне */}
                <div className="footer-social-mobile">
                    <div className="footer-section-title">Наши соц. сети</div>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/combatx.am?igsh=Z3MydDg5eno3dTky&utm_source=qr" target="_blank" rel="noreferrer" className="footer-btn footer-inst">Instagram</a>
                        <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noreferrer" className="footer-btn footer-tiktok">TikTok</a>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-section-title">Контакты</div>
                    <div className="footer-contacts">
                        <div className="footer-contacts-top">
                            <a href="mailto:combatX@gmail.com" className="footer-btn footer-mail">Email</a>
                            <a href="https://t.me/yourprofile" target="_blank" rel="noreferrer" className="footer-btn footer-telegram">Telegram</a>
                        </div>
                        <div className="footer-contacts-bottom">
                            <a href="viber://chat?number=%2B37455566106" className="footer-btn footer-viber">Viber</a>
                            <a href="https://wa.me/37455566106" target="_blank" rel="noreferrer" className="footer-btn footer-whatsapp">WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-brands">
            </div>
            <div className="footer-copyright">
                © 2025 combatX. Все права защищены.
            </div>
        </footer>
    );
}

export default Footer;
