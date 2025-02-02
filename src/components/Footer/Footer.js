import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Top section with gradient */}
            <div className="footer-top">
                <h2>Stay up to date with the latest stock update</h2>
                <p>
                    This app is for showcase purposes only and not for profit. Data updates only once a day due to free API limitations.
                </p>
                <button className="footer-button">Subscribe</button>
            </div>

            {/* Middle section with Bootstrap icon and contact */}
            <div className="footer-middle">
                <div className="icon-section">
                    <i className="bi bi-bar-chart-line-fill"></i> {/* Bootstrap icon */}
                </div>
                <div className="contact-section">
                    <p>
                        Let’s talk! <span role="img" aria-label="thumbs up">👍</span>
                    </p>

                    <p>+97788585458</p>
                    <p>Test@Mail.Com</p>
                </div>
            </div>

            {/* Bottom section with copyright and social icons */}
            <div className="footer-bottom">
                <p>Copyright © 2022 Free For All Of The World People</p>
                <div className="social-icons">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-linkedin"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;