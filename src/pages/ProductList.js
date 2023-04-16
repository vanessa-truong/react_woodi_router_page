import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProductList = () => {
    return ( 
        <section>
            <NavBar />
            <div className="headliner">
                <p>What we have</p>
                <p>PRODUCTS</p>
            </div>
            <article className="flex_products">
                <div className="productItemJenson">
                    <p>Jenson</p>
                    <Link to={'/jenson'}>Shop now</Link>
                </div>
                <div className="productItemDeon">
                    <p>Deon</p>
                    <Link to={'/deon'}>Shop now</Link>
                </div>
                <div className="productItemKrisha">
                    <p>Krisha</p>
                    <Link to={'/krisha'}>Shop now</Link>
                </div>
            </article>
            <Footer />
        </section>
    );
}

export default ProductList;