

import Navi from "../Navbar/Navi";
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
           </div>
            
        </div>
    );
};

export default Home;