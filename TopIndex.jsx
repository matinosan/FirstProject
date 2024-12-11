import { useRef, useState } from 'react';
import image2 from '../images/51174.jpg';
import lovlyLogo from '../images/heart.svg';
import leftArrow from '../images/arrow-left-circle.svg'
import rightArrow from '../images/arrow-right-circle.svg'
export default function TopIndex() {

    const [scrollPos, setScrollPos] = useState(0);
    const contentRef = useRef();
    const item_width = 200;

    const array = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
    ]

    const handlScroll = (scrollAmunt) => {
        const newScrollposition = scrollPos + scrollAmunt;

        setScrollPos(newScrollposition);

        contentRef.current.scrollLeft = newScrollposition;
    }
    return (
        <div className='contaner p-3'>
            <div dir='rtl'>
                <h3>پرفروش ترین ها</h3>
            </div>
            <div ref={contentRef} id='scroll' className='overflow-x-scroll m-2 p-2'>
                <div className='d-flex'>
                    <div id='bt' className='d-flex position-absolute'>
                        <img src={leftArrow} width={30} onClick={()=> {handlScroll(-item_width)}}  alt="" />
                        <img src={rightArrow} width={30} onClick={()=>{handlScroll(item_width)}}  alt="" />
                    </div>
                    <div id='responsiv-bt' className='d-flex  position-absolute'>
                        <img src={leftArrow} width={30} onClick={()=> {handlScroll(-item_width)}}  alt="" />
                        <img src={rightArrow} width={30} onClick={()=>{handlScroll(item_width)}}  alt="" />
                    </div>
                    {array.map((item) => (
                        <div key={item.id} className='col-md-3 ms-2 col-8 m-1 col-sm-6 p-2 border rounded' >
                            <div className=''>
                                <img src={image2} className='w-100 rounded' alt="" />
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
        </div>

    )
}