import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../Slider/Slider.css'

import pic1 from '../../assets/01.jpg'
import pic2 from '../../assets/02.jpg'
import pic3 from '../../assets/03.jpg'
import Navi from '../Navbar/Navi';



const Slider = () => {
    return (
        <div>
          <div>
          
          <Carousel>
          
    <Carousel.Item >
    
      <div className='bg-image-1 w-full h-[800px] slide-1 flex items-center justify-center'>

      <div className='text-center'>

        <h2 className='font-noto text-[43px] font-bold text-[#FFF;]'>OPTIMA LUBRICANTS</h2>

        <p className='font-noto text-[17px] font-light text-[#FFF]'>Formulated using the latest technology from USA and using the best base oils and additives in the market <br />
        today.</p>
      </div>
      </div>
      
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>

    <div className='bg-image-2 w-full h-[800px] slide-1 flex items-center justify-center'>

    <div className='text-center'>

<h2 className='font-noto text-[43px] font-bold text-[#FFF;]'>OUTSTANDING PERFOMANCE</h2>

<p className='font-noto text-[17px] font-light text-[#FFF]'>With the proper and cautious selection of raw materials and suppliers, creating high-rated oil renowned for their quality worldwide.</p>

<button className='btn bg-white text-black rounded-3xl font-bold'>DISCOVER MORE</button>
</div>
       
      </div>

      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>

    <div className='bg-image-3 w-full h-[800px] slide-1 flex items-center justify-center'>

    <div className='text-center'>

<h2 className='font-noto text-[43px] font-bold text-[#FFF;]'>ENHANCED QUALITY</h2>

<p className='font-noto text-[17px] font-light text-[#FFF]'>Discover out dedication to our advanced process of producing high-quality lubricant for you.</p>
</div>

      </div>

      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </div>
        </div>
    );
};

export default Slider;