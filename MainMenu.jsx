import { useState } from 'react';
import closeLogo from './images/x.svg';

export default function MainMenu(){
    const [list, setList] = useState({ display: 'none' })
    const showmobile = () => {
        setList({ display: 'inline' })
    }
    const [listlaptop, setListlaptop] = useState({ display: 'none' })
    const showlaptop = () => {
        setListlaptop({ display: 'inline' })
    }
    const [listconsole, setListconsole] = useState({ display: 'none' })
    const showconsole = () => {
        setListconsole({ display: 'inline' })
    }
    const [listsamsung, setListsamsung] = useState({ display: 'none' })
    const showsamsung = () => {
        setListsamsung({ display: 'inline' })
    }
    const closemobile = () => {
        setList({ display: 'none' })
    }
    const closelaptop = () => {
        setListlaptop({ display: 'none' })
    }
    const closeconsole = () => {
        setListconsole({ display: 'none' })
    }
    const closesamsung = () => {
        setListsamsung({ display: 'none' })
    }
    return(
        <div dir='rtl'>
        <ul className='p-0'>
            <li onClick={showmobile} className='nav-link'>mobile</li>
            <ul className='p-0' style={list}>
               <div id='closeimage'> <img onClick={closemobile} className='float-end ' src={closeLogo} alt="" /></div>
                <li className='nav-link'>item</li>
                <li className='nav-link'>item</li>
                <li className='nav-link'>item</li>
            </ul>
            <li onClick={showlaptop} className='nav-link'>laptop</li>
            <ul className='p-0' style={listlaptop}>
               <div  id='closeimage'> <img onClick={closelaptop} className='float-end' src={closeLogo} alt="" /></div>
                <li className='nav-link'>item</li>
                <li className='nav-link'>item</li>
                <li className='nav-link'>item</li>
            </ul>
            <li onClick={showconsole} className='nav-link'>console</li>
            <ul className='p-0' style={listconsole}>
               <div id='closeimage'> <img onClick={closeconsole} className='float-end' src={closeLogo} alt="" /></div>
                <li className='nav-link'>item</li>
                <li className='nav-link'>item</li>
                <li className='nav-link'>item</li>
            </ul>
            <li onClick={showsamsung} className='nav-link'>samsung</li>
            <ul className='p-0' style={listsamsung}>
               <div id='closeimage'> <img onClick={closesamsung} className='float-end' src={closeLogo} alt="" /></div>
                <li className='nav-link'>item</li>
                <li className='nav-link'>item</li>
                <li className='nav-link'>item</li>
            </ul>
        </ul>
    </div>
    )
}