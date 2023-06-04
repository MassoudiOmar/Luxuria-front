import "./Layout.css";
import { TbBrandShopee } from "react-icons/tb";

function Layout() {

  const fn =()=>{
    alert('rfrfr')
  }

  return (
    <div className="Layout">
      <header className="Layout-header">
      <span className="Layout-logo" onMouseOver={fn}>LUXURIA</span>
        <span className="Link-main">Categories</span>
        <span className="Link-main">Brands</span>
        <span className="Link-main">Contact</span>
        <span className="center-header"></span>
        <span className="Link-main-two">Categories</span>
        <span className="Link-main-two">Brands</span>
        <span className="Link-main-two">Contact</span>
        <span className="end-main"></span>
      </header>

    </div>
  );
}

export default Layout;
