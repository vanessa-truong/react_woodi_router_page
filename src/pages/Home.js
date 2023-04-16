import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import HomeTisch from "../img/Bilder/Home.png";


const Home = () => {
    return ( 
        <div className="background_pink">
            <NavBar />
            <section className="home_flex">
                <div>
            <h2>Are you looking for woodden furniture for your place?</h2>
            <h1>This is the Right Place</h1>
            <Link to={"/products"}>Explore Categories</Link>
            </div>
            <img src={HomeTisch} alt="Tisch" />
            </section>
        </div>
    );
}

export default Home;