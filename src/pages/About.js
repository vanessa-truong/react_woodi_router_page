import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Salatbild from "../img/Bilder/About.png";
import Footer from "../components/Footer";

const About = () => {
    return ( 
        <div>
            <NavBar />
            <div className="headliner">
                <p>Who we are</p>
                <p>ABOUT</p>
            </div>
        <section className="about_flex">
            <img src={Salatbild} alt="Salatbild" />
            <div>
                <h1><span>WOODIES</span> is the <span>home of modern wooden furniture</span></h1>
                <p>the answer to your need for furniture with shapes, sizes and colors</p>
            </div>
        </section>
            <Footer />
        </div>
    );
}

export default About;