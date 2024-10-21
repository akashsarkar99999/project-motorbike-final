import navPic from "../../assets/bottom02.png.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import footPic from '../../assets/Symbol.png'
import footPic2 from '../../assets/Symbol 2.png'
import footPic3 from '../../assets/Symbol 3.png'
import footPic4 from '../../assets/Symbol4.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <img src={navPic} alt="" />
          <p className="text-[16px] font-noto text-[#767676] mt-[32px]">
            We are manufactured and packed in an ISO 9001 & ISO <br /> 14001
            certified blending factory in <br /> Singapore.
          </p>
        </nav>
        <nav>
          <h6 className="font-inter text-[16px] font-extrabold text-[#000]">
            QUICK LINKS
          </h6>

          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Home
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Products
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Contact Us
          </a>
        </nav>
        <nav>
          <h6 className="font-inter text-[16px] font-extrabold text-[#000]">
            Product Category
          </h6>

          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Motorcycle Oil
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Gasoline Engine Oil
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Gear Oil
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Coolant
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Diesel Engine Oil
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676]">
            <MdOutlineKeyboardArrowRight />
            Hydraulic Oil
          </a>
        </nav>

        <nav>
          <h6 className="font-inter text-[16px] font-extrabold text-[#000]">
            Product Category
          </h6>

          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676] gap-2">
            <img src={footPic} alt="" />
            1636 Dalag Street Valenzuela <br /> City, Philippines
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676] gap-2">
            <img src={footPic2} alt="" />
            +632 8252 9412
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676] gap-2">
            <img src={footPic3} alt="" />
            /OptimaLubricants.PH
          </a>
          <a className="link link-hover flex items-center text-[16px] font-inter text-[#767676] gap-2">
            <img src={footPic4} alt="" />
            wilma@optimalubricans.com
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
