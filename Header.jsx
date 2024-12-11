import logo from './images/list.svg';
import Loginlogo from './images/person.svg';
import shopeLogo from './images/basket2-fill.svg';
import lovlyLogo from './images/heart.svg';
import closeLogo from './images/x.svg';
import image from './images/wallpapersden.com_react-4k_8000x3375 - Copy.jpg';
import UnderHeader1 from './headercomponents/UnderHeader1';
import UnderHeader2 from './headercomponents/UnderHeader2';
import UnderHeader3 from './headercomponents/UnderHeader3';
import UnderHeader4 from './headercomponents/UnderHeader4';
import { useState } from 'react';
import MainMenu from './MainMenu';
export default function Header() {
    const [style, setStyle] = useState({ display: 'none' })

    const clickHandeler = () => {
        setStyle({ display: 'inline' })
    }
    const close = () => {
        setStyle({ display: 'none' })
    }
    const [mainMenu,setMainMenu] = useState({display:'none'}) 

   const showMainMenu = () =>{
    setMainMenu({display:'inline'})
   }
   const closeMainMenu = () =>{
    setMainMenu({display:'none'})
   }
   
    return (
        <div>
            <div id='top-header' className='row'>
                <div className=' col-md-3'>
                    <a href="">login</a>
                    <p className='d-inline'>/</p>
                    <a href="">register</a>
                    <img src={Loginlogo} alt="" />
                </div>
                <div className='col-md-6'>
                    <form action="">
                        <input type="search" className="form-control" placeholder='search' />
                    </form>
                </div>
                <div className='col-md-3'>
                    <h1 className='h2 float-end'>onlinShope</h1>
                </div>
            </div>
            <div id='responsiv-top-header'>
                <div className='col-md-3'>
                    <h1 className='h2 float-end'>onlinShope</h1>
                </div>
                <div>

                    <a href="">login</a>
                    <p className='d-inline'>/</p>
                    <a href="">register</a>
                    <img src={Loginlogo} alt="" />

                    <button onClick={clickHandeler} className='btn btn-primary mt-1 mb-1 '>search</button>
                </div>
                <div id='search' className='position-absolute z-3 border rounded' style={style}>
                    <img onClick={close}  width={20} src={closeLogo} alt="" />
                    <form action="">
                        <input className='form-control form-control-sm' placeholder='search' type="search" />
                    </form>
                </div>
            </div>
            <hr />
            <div id='under-header' className='row shadow-sm'>
                <div className='col-md-3 col-sm-3'>
                    <p id='shop-Count'>1</p>
                    <a href=""><img src={shopeLogo} className='me-2' width={30} alt="سبد خرید" /></a>
                    <a href=""><img id='lovly' src={lovlyLogo} width={30} alt=" پسندیده ها" /></a>
                </div>
                <div className='col-md-4 col-sm-4'>
                </div>
                <UnderHeader1 />
                <UnderHeader2 />
                <UnderHeader3 />
                <UnderHeader4 />
            </div>
            <div id='responsiv-mobile-header'>
                <div className='col-md-3'>
                    <img onClick={showMainMenu} className='float-end' width={40} src={logo} alt="" />
                    <h1 className='h2 float-end'>onlinShope</h1>
                </div>
                <div  className='shadow-sm'>

                    <a href="">login</a>
                    <p className='d-inline'>/</p>
                    <a href="">register</a>
                    <img src={Loginlogo} alt="" />

                    <button onClick={clickHandeler} className='btn btn-primary mt-1 mb-1 '>search</button>
                </div>
                <div id='search' className='position-absolute z-3 border rounded' style={style}>
                    <img onClick={close} width={20} src={closeLogo} alt="" />
                    <form action="">
                        <input className='form-control form-control-sm' placeholder='search' type="search" />
                    </form>
                </div>
            </div>
            <div id='main-menu'style={mainMenu} className='w-50 border position-absolute rounded '>
                <div dir='rtl' className='w-100 '>
                    <img onClick={closeMainMenu} width={30} src={closeLogo} alt="" />
                    <p id='shop-Count'>1</p>
                    <a href=""><img src={shopeLogo} className='me-2' width={30} alt="سبد خرید" /></a>
                    <a href=""><img src={lovlyLogo} width={30} alt=" پسندیده ها" /></a>
                </div>
                <MainMenu />
            </div>
        </div>
    )

}
