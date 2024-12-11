import { useState } from 'react';
export default function UnderHeader1() {
    const [style, setStyle] = useState({
        display: 'none',

    })
    const mobilehover = () => {
        setStyle({ display: 'inline' })
       
    }
    const mobileLeave = () => {
        setStyle({ display: 'none' })
    }
    return (
        <div onMouseEnter={mobilehover} onMouseLeave={mobileLeave} className='col-md-1 col-sm-1 float-end'>
            <p className='menu'>mobile</p>
            <div style={style} id='under-mobile-menu' className='position-absolute border'>
                <ul id='under-menu-ul' dir='rtl' className='float-end p-2 '>
                    <li id='under-menu-li' className='nav-link'>item</li>
                    <li id='under-menu-li' className='nav-link'>item</li>
                    <li id='under-menu-li' className='nav-link'>item</li>
                </ul>
            </div>
        </div>
    )
}