import './topbarmenu.css';
import Logo from '../Images/ironhack-logo-xs.png';
import MenuTop from '../Images/menu-top-xs.png';

function topBarMenu() {

    return (
    <header className='Header'>
      <div className= "App-Hero" >
        <nav>
         <img scr={Logo} alt= 'Logo'/>
         <img scr={MenuTop} alt= 'menu Top' />
        </nav>
      </div>
    </header>
    );
  }
   
  export default topBarMenu;