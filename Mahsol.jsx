import lovlyLogo from '../images/heart.svg';
import image3 from '../images/51175.jpg';
import leftArrow from '../images/arrow-left-circle.svg'
import rightArrow from '../images/arrow-right-circle.svg'
import { useRef, useState } from 'react';
export default function Mahsol() {

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
        <div className='p-2 text-center '>
            <div ref={contentRef} id='scroll' className='w-100 overflow-x-scroll'>
                <div className='d-flex'>
                    <div id='button' className=' d-flex position-absolute '>
                        <img src={leftArrow} onClick={() => { handlScroll(-item_width) }} width={30} alt="" />
                        <img src={rightArrow} onClick={() => { handlScroll(item_width) }} width={30} alt="" />
                    </div>
                    {array.map((item) => (
                        <div key={item.id} className='col-md-4 col-sm-6 col-8 mt-1  ms-2 d-inline-block p-2 border rounded text-start' >
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
        </div>
    )
}