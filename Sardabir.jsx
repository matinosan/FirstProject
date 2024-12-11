import image2 from '../images/51174.jpg';
import image3 from '../images/51175.jpg';
import image from '../images/wallpapersden.com_react-4k_8000x3375 - Copy.jpg';
import lovlyLogo from '../images/heart.svg';
import leftArrow from '../images/arrow-left-circle.svg'
import rightArrow from '../images/arrow-right-circle.svg'
import { useRef, useState } from 'react';

export default function Sardabir() {

    const [scrollPos, setScrollPos] = useState(0);
    const contanerRef = useRef();
    const Item_Width = 200;

    const [scrollPos2, setScrollPos2] = useState(0);
    const contanerRef2 = useRef();

    const array = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ]

    const handlScroll = (scrollAmount) => {
        const newPostion = scrollPos + scrollAmount;

        setScrollPos(newPostion);

        contanerRef.current.scrollLeft = newPostion;
    }
    const handlScroll2 = (scrollAmount) => {
        const newPostion = scrollPos2 + scrollAmount;

        setScrollPos2(newPostion);

        contanerRef2.current.scrollLeft = newPostion;
    }

    return (
        <div className='row'>
            <div id='spitial' className='float-end ms-3 p-2 col-md-4 '>
                <div dir='rtl' className=' p-2 border-bottom w-100'>
                    <h2  > انتخاب سردبیر</h2>
                </div>

                <div ref={contanerRef} id='scroll' className='overflow-x-scroll '>
                    <div className='d-flex'>
                        <div id='img-btn' className='d-flex position-absolute '>
                            <img src={leftArrow} width={30} onClick={() => { handlScroll(-Item_Width) }} alt="" />
                            <img src={rightArrow} width={30} onClick={() => { handlScroll(Item_Width) }} alt="" />
                        </div>
                        <div id='responsiv-img-btn' className='d-flex  position-absolute '>
                            <img src={leftArrow} width={30} onClick={() => { handlScroll(-Item_Width) }} alt="" />
                            <img src={rightArrow} width={30} onClick={() => { handlScroll(Item_Width) }} alt="" />
                        </div>
                        {array.map((item) => (
                            <div key={item.id} className='col-md-6 col-sm-6 col-8 ms-2 d-inline-block p-2 border rounded mt-1' >
                                <div>
                                    <img src={image3} className='w-100 rounded' alt="" />
                                </div>
                                <div className='p-2'>
                                    <h3 className='d-inline'>A52</h3>
                                    <p className='float-end'>قیمت:789</p>
                                </div>
                                <button className='btn btn-warning'>افزودن به سبد خرید</button>
                                <a className='float-end' href=""><img id='lovly' src={lovlyLogo} width={30} alt=" پسندیده ها" /></a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-md-12'>
                    <img src={image} className='w-100 m-1' height={200} alt="" />
                </div>
            </div>

            <div id='spitial' className=' ms-3 mt-2 p-2 col-md-7 '>
                <div dir='rtl' className=' p-2 border-bottom w-100'>
                    <h2 id='spitial-h' >تخفیف ویژه</h2>
                </div>
                <div ref={contanerRef2} id='scroll' className='overflow-x-scroll p-2'>
                    <div className='d-flex'>
                        <div id='butn' className=' d-flex position-absolute '>
                            <img src={leftArrow} width={30} onClick={()=>{handlScroll2(-Item_Width)}} alt="" />
                            <img src={rightArrow} width={30}  onClick={()=>{handlScroll2(Item_Width)}} alt="" />
                        </div>
                        <div id='responsiv-butn' className=' d-flex position-absolute '>
                            <img src={leftArrow} width={30} onClick={()=>{handlScroll2(-Item_Width)}} alt="" />
                            <img src={rightArrow} width={30}  onClick={()=>{handlScroll2(Item_Width)}} alt="" />
                        </div>
                        {array.map((item) => (
                            <div key={item.id} id='sardabir-post' className='col-md-6 col-sm-6 col-8 p-2 ms-2 border rounded mt-1' >
                                <div className=''>
                                    <img src={image3} className='w-100 rounded' alt="" />
                                </div>
                                <div className='p-2'>
                                    <h3 className='d-inline'>A52</h3>
                                    <p className='float-end'>قیمت:789</p>
                                </div>
                                <button className='btn btn-warning'>افزودن به سبد خرید</button>
                                <a className='float-end' href=""><img id='lovly' src={lovlyLogo} width={30} alt=" پسندیده ها" /></a>
                            </div>
                        ))}

                    </div>
                </div>
                <div id='tabligh'>
                    <img src={image} className='w-100' height={200} alt="" />
                </div>
            </div>
        </div>
    )
}