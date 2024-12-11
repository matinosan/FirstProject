import { useEffect, useState } from 'react';
import image from './images/wallpapersden.com_react-4k_8000x3375 - Copy.jpg';
import image2 from './images/51174.jpg';
import image3 from './images/51175.jpg';
import TopIndex from './mainComponent/TopIndex';
import Sardabir from './mainComponent/Sardabir';
import lovlyLogo from './images/heart.svg';
import Mahsol from './mainComponent/Mahsol';
import leftArrow from './images/arrow-left-circle.svg'
import rightArrow from './images/arrow-right-circle.svg'

export default function Index() {


    const [currentindex, setCurrentIndex] = useState(0)

    const slider = [
        {
            url: image
        },
        {
            url: image2
        },
        {
            url: image3
        }
    ]

    useEffect(() => {
        const autoPlay = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(autoPlay)

    }, [currentindex])

    const perevSlide = () => {
        setCurrentIndex((perevIndex) => (perevIndex === 0 ? slider.length - 1 : perevIndex - 1))
    }
    const nextSlide = () => {
        setCurrentIndex((perevIndex) => (perevIndex === slider.length - 1 ? 0 : perevIndex + 1))
    }


    return (
        <div>
            <div className='w-100'>
                <img className='w-100' height={400} src={slider[currentindex].url} />
                <div id='btn' className='position-absolute d-flex w-100 '>
                    <img src={leftArrow} width={30} onClick={perevSlide} alt="" />
                    <img src={rightArrow} width={30} onClick={nextSlide} alt="" />
                </div>
            </div>
            <Mahsol />
            <Sardabir />
            <TopIndex />
        </div>


    )
}