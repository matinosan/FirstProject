import { useState } from 'react';
export default function UnderHeader2() {
    const [laptopstyle, setLaptopstyle] = useState({
        display: 'none',

    })
    const laptopHover = () => {
        setLaptopstyle({ display: 'inline' })

    }
    const laotopLeave = () => {
        setLaptopstyle({ display: 'none' })
    }
    return (
        <div onMouseEnter={laptopHover} onMouseLeave={laotopLeave} className='col-md-1 col-sm-1'>
            <p className='menu'>laptop</p>
            <div style={laptopstyle} id='under-laptop-menu' className='position-absolute border'>
                <ul id='under-menu-ul' dir='rtl' className='float-end p-2 '>
                    <li id='under-menu-li' className='nav-link'>item</li>
                    <li id='under-menu-li' className='nav-link'>item</li>
                    <li id='under-menu-li' className='nav-link'>item</li>
                </ul>
            </div>
        </div>
    )
}