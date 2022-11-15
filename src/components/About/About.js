import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import excel_img from './../../assets/excel_img.svg'
import pic1 from './../../assets/jpeg/pic1.jpeg'
import pic2 from './../../assets/jpeg/pic2.jpeg'
import pic5 from './../../assets/jpeg/pic5.jpeg'
import pic6 from './../../assets/jpeg/pic6.jpeg'
import pic8 from './../../assets/jpeg/pic8.jpeg'
import pic9 from './../../assets/jpeg/pic9.jpeg'
import pic12 from './../../assets/jpeg/pic12.jpeg'
import lines from './../../assets/heading_lines.svg'
import line_rt from './../../assets/heading_lines_rt.svg'

import './About.css'

function About() {

    const [slide, setSlide] = useState(1)
    const sliderRef = useRef();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
        pauseOnHover: true
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
        setSlide(slide + 1);
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
        setSlide(slide - 1);
    }

  return (
    <div className='about' id='about'>
        <div className='about_head'>
            <div className='abt_title'>
                <img src={lines} alt='' className='head_lines'/>             
                <h1>WHAT IS <span className="blue">  EXCEL</span> ?</h1>
                <img src={line_rt} alt='' className='head_lines'/>            
            </div>
            <p>In 2001, the students of Govt. Model Engineering College founded Excel, the second-largest techno-managerial festival in the country and the first of its kind in South India. Excel has steadily hosted students from more than 2000 universities and 1000 institutions across the nation as it has grown exponentially over the years.<br/>The 22 successful editions of Excel that have preceded it have a rich legacy, and Excel 2022 promises to be even better.</p>
        </div>
        <div className='gallery_container'>
            <IoIosArrowBack onClick={gotoPrev} className='achSlider__prev'/>
            <div className='about_slider'>
                <Slider {...settings} ref={sliderRef}>
                    <div>
                        <img src={pic8} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={excel_img} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={pic1} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={pic2} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={pic5} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={pic6} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={pic9} alt='' className='slider_img'/>
                    </div>
                    <div>
                        <img src={pic12} alt='' className='slider_img'/>
                    </div>
                </Slider>
            </div>
            <IoIosArrowForward onClick={gotoNext} className='achSlider__next'/>
        </div>
    </div>
  )
}

export default About
