import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";


const ProductsCatagory = () => {

    const [products, setProducts] = useState([]);

    const [dataLength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="mt-[80px]">
            <div className="flex justify-between mb-[50px]">

            <h2 className="font-inter text-[40px] font-[700] text-black">Product Category</h2>

            <Link to="/allproducts">
            <button className='btn font-noto text-[13px] font-[500] text-white bg-black rounded-[10px]'>Discover More</button>
            </Link>
            </div>

            <div className="lg:grid grid-cols-4 gap-[30px] ">
               {
                products.slice(0, dataLength).map(product =><Product key={product.id} product={product}></Product>)
               } 
            </div>
            
        </div>
    );
};

export default ProductsCatagory;