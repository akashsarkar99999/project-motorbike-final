import lubpic from '../../assets/01201.jpg.png'

const WhoWeAre = () => {
    return (
        <div>
            <div className='flex items-center gap-5 mt-[88px]'>
                <div className='w-full'>
                    <img src={lubpic} alt="" />
                </div>
                <div className='w-full'>
                    <h2 className='font-inter text-[40px] font-[700] text-[#000]'>Who We Are</h2>

                    <p className='text-[16px] font-noto text-[#232323] '>At Optima Lubricants, everything that we do ensures that the anything
we produce are of the highest quality, ensuring that our customers derive
the highest level of performance for their vehicles and machinery.</p>

<button className='btn font-noto text-[13px] font-[500] text-white bg-black rounded-[10px]'>Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;