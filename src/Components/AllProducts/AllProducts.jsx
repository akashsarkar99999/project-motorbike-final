import { useEffect, useState } from "react";
import istokPic from "../../assets/istockphoto-1325588832-2048x2048.jpg";
import Navi from "../Navbar/Navi";
import Product from "../Product/Product";
import footpic1 from '../../assets/Section 2.png';
import footpic2 from '../../assets/Section.png'
import Footer from "../Footer/Footer";

const AllProducts = () => {


    const [products, setProducts] = useState([]);

    

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])


  return (
    <div>
      <div>
        <img className="h-[400px] w-full" src={istokPic} alt="" />
        <div className=" relative top-[-400px]">
          <Navi></Navi>
        </div>

        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="font-inter text-[40px] font-[700] text-black w-full">
            Created Using <br />
            The Best We Approved
          </div>
          <div className="font-noto text-[16px] text-[#232323] w-full">
            Using the latest technology, the best base oils stocks from the best
            refiners in the world like Exxon Mobil, SK, Petronas, Hyundai and
            blended using top tier additives from USA,
          </div>
        </div>
        <div className="text-center pl-[390px] pr-[390px]   border mt-[78px] pt-[81px] mb-[53px]">
          <h2 className="font-inter text-[40px] font-[700] text-black">
            Our Quality Engineered Products
          </h2>
          <p className="font-noto text-[16px] text-[#232323]">
            Quality of our products are ensured by the experience of our
            personnel and further qualified by the use of latest ASTM approved
            lab equipment and supported by accredited third party independent
            labaoratories.
          </p>


<div className="grid grid-cols-3">
{
                products.map(product =><Product key={product.id} product={product}></Product>)
               } 
</div>




        </div>
        <div>
    <div>
<img src={footpic1} alt="" />
    </div>
    <div>
<img src={footpic2} alt="" />
    </div>
</div>

<Footer></Footer>
      </div>
    </div>
  );
};

export default AllProducts;
