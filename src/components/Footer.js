import logo from "../img/Bilder/Logo.png"
import schreibtisch from "../img/Bilder/Footer.png"

const Footer = () => {
    return ( 
        <section className="footer">
            <div>
                <div className="flex_footer">
                <div className="footer_text">
                <img src={logo} alt="logo" />
                <p>(012) 8967453</p>
                <p>woodies@gmail.com</p>
                <p>Jakarte, Indonesia</p>
                <p>© 2020 WOODIES</p>
                </div>
                <img src={schreibtisch} alt="schreibtisch"  className="footer_img"/>
                </div>
            </div>
        </section>
    );
}

export default Footer;