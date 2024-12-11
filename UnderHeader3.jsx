import { useState } from 'react';

export default function UnderHeader3() {
    const [consolestyle, setConsolestyle] = useState({
        display: 'none',

    })
    const consoleHover = () => {
        setConsolestyle({ display: 'inline' })
       
    }
    const consoleleave = () => {
        setConsolestyle({ display: 'none' })
    }
    return (
        <div onMouseEnter={consoleHover} onMouseLeave={consoleleave} className='col-md-1 col-sm-1'>
            <p className='menu'>console</p>
            <div style={consolestyle} id='under-console-menu' className='position-absolute border'>
                <ul id='under-menu-ul' dir='rtl' className='float-end p-2 '>
                    <li id='under-menu-li' className='nav-link'>item</li>
                    <li id='under-menu-li' className='nav-link'>item</li>
                    <li id='under-menu-li' className='nav-link'>item</li>
                </ul>
            </div>
        </div>
    )
}
