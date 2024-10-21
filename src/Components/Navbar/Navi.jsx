import '../Navbar/Nav.css'
import Slider from '../Slider/Slider';
import navpic from '../../assets/header.png.png'
import { NavLink } from 'react-router-dom';

const Navi = () => {
  return (
    <div>
      <div className="navbar  max-w-5xl lg:ml-[450px]">
        
  <div className="flex-1">
    <img src={navpic} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-inter text-[13px] text-white">
      <li><NavLink to="/">HOME</NavLink></li>
      <li>
        <details>
          <summary>OUR PRODUCTS</summary>
          <ul className="bg-base-100 rounded-t-none p-2 text-black">
            <li><a>MOTORCYCLE OIL</a></li>
            <li><a>GASOLINE ENGINE OIL</a></li>
            <li><a>GEAR OIL</a></li>
            <li><a>COOLANT</a></li>
            <li><a>DIESEL ENGINE OIL</a></li>
            <li><a>HYDRAULIC OIL</a></li>
          </ul>
        </details>
      </li>
      <li><a>CONTSCT US</a></li>
      <li></li>
    </ul>
  </div>
  
</div>
    </div>
  );
};

export default Navi;