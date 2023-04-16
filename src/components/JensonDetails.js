import Tisch from "../img/Bilder/Tisch.png"
import Footer from "./Footer";
import NavBar from "./NavBar";

const JensonDetails = () => {
    return ( 
        <div>
            <NavBar />
            <div className="headliner">
                <p>Jenson</p>
                <p>PRODUCTS</p>
            </div>
            <div className="details_flex">
                <img src={Tisch} alt="tisch" />
                <p>Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.</p>
            </div>
            <Footer />
        </div>
     );
}
 
export default JensonDetails;