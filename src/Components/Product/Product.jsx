import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Product = ({product}) => {
    const {cover_photo, product_name} =product;
    return (
        <div>
            <div className="w-[250px] h-[380px] mb-5">
            <img className="h-full w-full rounded-3xl" src={cover_photo} alt="" />

            <div className="relative top-[-100px] left-[20px]">
                <p className="font-inter text-[20px] font-[700] text-[white]">{product_name}</p>
                <button className="btn bg-opacity-0 ">View More<MdOutlineKeyboardArrowRight className="inline-block"></MdOutlineKeyboardArrowRight>
                </button>
            </div>

            </div>
        </div>
    );
};

export default Product;