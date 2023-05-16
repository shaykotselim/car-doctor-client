import React from 'react';
import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
import banner5 from "../../../assets/images/banner/5.jpg"
import banner6 from "../../../assets/images/banner/6.jpg"
const Banner = () => {
    
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item  relative  w-full h-[600px]">
          <img src={banner1} className="w-full" />
          
          <div>
          <div className=' absolute h-full bg-gradient-to-r from-black  left-0 bottom-0'>
            <div className='text-white px-16 py-32 w-[600px]'>
            <p className="text-7xl font-bold">Affordable Price For Car Servicing</p>
            <p className='my-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn btn-primary text-white mr-4">DISCOVER MORE</button>
            <button className="btn btn-outline btn-secondary">Latest More</button>
            </div>
          </div> 

          <div className='absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-[600px]">
          <img src={banner2} className="w-full" />
          <div>

          <div className='absolute h-full bg-gradient-to-r from-black  left-0 bottom-0'>
            <div className='text-white px-16 py-32 w-[600px]'>
            <p className="text-7xl font-bold">Affordable <br /> Price For Car <br /> Servicing</p>
            <p className='my-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn btn-primary text-white mr-4">DISCOVER MORE</button>
            <button className="btn btn-outline btn-secondary">Latest More</button>
            </div>
          </div> 
          
          <div className='absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-[600px]">
          <img src={banner3} className="w-full" />
          <div className="">

          <div className='absolute h-full bg-gradient-to-r from-black  left-0 bottom-0'>
            <div className='text-white px-16 py-32 w-[600px]'>
            <p className="text-7xl font-bold">Affordable <br /> Price For Car <br /> Servicing</p>
            <p className='my-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn btn-primary text-white mr-4">DISCOVER MORE</button>
            <button className="btn btn-outline btn-secondary">Latest More</button>
            </div>
          </div> 
          
          <div className='absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full h-[600px]">
          <img src={banner4} className="w-full" />
          <div className="">

          <div className='absolute h-full bg-gradient-to-r from-black  left-0 bottom-0'>
            <div className='text-white px-16 py-32 w-[600px]'>
            <p className="text-7xl font-bold">Affordable <br /> Price For Car <br /> Servicing</p>
            <p className='my-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn btn-primary text-white mr-4">DISCOVER MORE</button>
            <button className="btn btn-outline btn-secondary">Latest More</button>
            </div>
          </div> 
          
          <div className='absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full h-[600px]">
          <img src={banner5} className="w-full" />
          <div className="">

          <div className='absolute h-full bg-gradient-to-r from-black  left-0 bottom-0'>
            <div className='text-white px-16 py-32 w-[600px]'>
            <p className="text-7xl font-bold">Affordable <br /> Price For Car <br /> Servicing</p>
            <p className='my-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn btn-primary text-white mr-4">DISCOVER MORE</button>
            <button className="btn btn-outline btn-secondary">Latest More</button>
            </div>
          </div> 
          
          <div className='absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full h-[600px]">
          <img src={banner6} className="w-full" />
          <div className="">

          <div className='absolute h-full bg-gradient-to-r from-black  left-0 bottom-0'>
          <div className='text-white px-16 py-32 w-[600px]'>
            <p className="text-7xl font-bold">Affordable <br /> Price For Car <br /> Servicing</p>
            <p className='my-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn btn-primary text-white mr-4">DISCOVER MORE</button>
            <button className="btn btn-outline btn-secondary">Latest More</button>
          </div> 
          </div>
          
          <div className='absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;