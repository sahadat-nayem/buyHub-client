import { Helmet } from "react-helmet";
import Banner from "./Carousel/Banner";
import ProductsCategory from "./ProductsCategory";
import LimitedProducts from "../LimitedProducts";
import OfferCard from "../OfferCard";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BuyHub | Home</title>
            </Helmet>
            <Banner></Banner>
            <ProductsCategory></ProductsCategory>
            <LimitedProducts></LimitedProducts>
            <OfferCard></OfferCard>
            
        </div>
    );
};

export default Home;