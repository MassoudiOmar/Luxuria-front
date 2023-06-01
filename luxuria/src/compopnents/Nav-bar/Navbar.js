import './Navbar.css';
import { TbBrandShopee } from "react-icons/tb";

function Navbar() {
  return (
      <nav className="Navbar-header">
        <span className='categorie-nav'>Men</span>
        <span className='categorie-nav'>Women</span>
        <span className='categorie-nav'>Kids</span>
        <span className='flex-span'></span>
      <input className='search-bar' placeholder='Search for product' />
      <input className='search-button' type='submit' value="SEARCH" />
        <span className='flex-span'></span>
        <span className='categorie-nav-two'>Bonjour, Omar</span>
      <span   className='categorie-nav-two'>About us</span>
        <span className='categorie-nav-two'>Pannier</span>
      </nav>
  );
}

export default Navbar;
