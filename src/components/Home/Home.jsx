
import Accordion from "../Accordion/Accordion";
import Banner from "../Banner/Banner";
import ContactPage from "../Contact/Contact";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import UserReview from "../Review/UserReview";


const Home = () => {
    return (
        <div>
           <Banner/>
           <div className="container mx-auto">
           <FeaturedProduct/>
           <UserReview/>
           <ContactPage/>
           <Accordion/>
           </div>
        </div>
    );
};

export default Home;