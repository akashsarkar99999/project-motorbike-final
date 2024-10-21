

import Footer from "../Footer/Footer";
import Navi from "../Navbar/Navi";
import ProductsCatagory from "../ProductsCatagory/ProductsCatagory";
import Slider from "../Slider/Slider";
import WelToLubricant from "../WelToLubricant/WelToLubricant";
import WhoWeAre from "../WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div className="mb-5">
            <Navi></Navi>
           <div className="relative top-[-109px]">
           <Slider></Slider>
           </div>
           <div className="max-w-6xl mx-auto">
            <WelToLubricant></WelToLubricant>
            <WhoWeAre></WhoWeAre>

            <ProductsCatagory></ProductsCatagory>
           </div>

           <Footer></Footer>
            
        </div>
    );
};

export default Home;