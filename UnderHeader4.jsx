import { useState } from 'react';

export default function UnderHeader4() {
    const [samsungstyle, setSamsungstyle] = useState({
        display: 'none',

    })

    const samsungHover = () => {
        setSamsungstyle({ display: 'inline' })

    }
    const samsungleave = () => {
        setSamsungstyle({ display: 'none' })
    }
    return (
        <div onMouseEnter={samsungHover} onMouseLeave={samsungleave} className='col-md-1 col-sm-1'>
            <p className='menu'>samsung</p>
            <div style={samsungstyle} id='under-samsung-menu' className='position-absolute border'>
                <ul id='under-menu-ul' dir='rtl' className='float-end p-2 '>
                    <li id='under-menu-li' className='nav-link'>item</li>
                    <li id='under-menu-li' className='nav-link'>item</li>
                    <li id='under-menu-li' className='nav-link'>item</li>
                </ul>
            </div>
        </div>
    )
}
