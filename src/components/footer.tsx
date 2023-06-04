const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__content">
                <div className="footer__content-left">
                    <div className="footer__social-networks">
                        <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="footer__social-network">
                            <path
                                d="M9.73709 25.5V14.0972H14.1578L14.8211 9.65195H9.73709V6.81434C9.73709 5.52775 10.1482 4.65095 12.2824 4.65095L15 4.64999V0.674037C14.53 0.621182 12.9168 0.5 11.0392 0.5C7.11839 0.5 4.43414 2.57121 4.43414 6.37409V9.65195H0V14.0972H4.43414V25.5H9.73709Z"
                                fill="#2A2A2F" />
                        </svg>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="footer__social-network">
                            <path
                                d="M18 0.5H6C2.70029 0.5 0 3.20023 0 6.49985V18.5001C0 21.7989 2.70029 24.5 6 24.5H18C21.2997 24.5 24 21.7989 24 18.5001V6.49985C24 3.20023 21.2997 0.5 18 0.5Z"
                                fill="#2A2A2F" />
                            <path
                                d="M18.501 7.49968C19.3295 7.49968 20.001 6.82813 20.001 5.99972C20.001 5.17131 19.3295 4.49976 18.501 4.49976C17.6726 4.49976 17.001 5.17131 17.001 5.99972C17.001 6.82813 17.6726 7.49968 18.501 7.49968Z"
                                fill="white" />
                            <path
                                d="M11.9998 6.49991C8.68536 6.49991 5.99978 9.18572 5.99978 12.4998C5.99978 15.8126 8.68536 18.5002 11.9998 18.5002C15.3133 18.5002 17.9998 15.8126 17.9998 12.4998C17.9998 9.18572 15.3133 6.49991 11.9998 6.49991ZM11.9998 16.5002C9.79085 16.5002 7.99988 14.7092 7.99988 12.4998C7.99988 10.2903 9.79085 8.49996 11.9998 8.49996C14.2087 8.49996 15.9997 10.2903 15.9997 12.4998C15.9997 14.7092 14.2087 16.5002 11.9998 16.5002Z"
                                fill="white" />
                        </svg>
                    </div>
                    <a className="footer__number" href="tel:48 696 84 31 31">48 696 84 31 31</a>
                </div>
                <div className="footer__content-right">
                    <p className="footer__content-right--text">Chlebowa 16 31-423, Krakow
                        sushidream@gmail.com</p>
                </div>
            </div>
            <div className="footer__content-bottom">
                <div className="disain-author">
                    <span>Дизайн:</span>
                    <span>Андрей Сухов</span>
                </div>
                <div className="development-author">
                    <span>Разработка:</span>
                    <span>Роман Курпель</span>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
