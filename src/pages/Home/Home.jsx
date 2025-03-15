import { Helmet } from "react-helmet";
import Banner from "./Carousel/Banner";
import ProductsCategory from "./ProductsCategory";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <ProductsCategory></ProductsCategory>
            
        </div>
    );
};

export default Home;