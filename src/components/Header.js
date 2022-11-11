// IMPORT CSS
import './css/Header.css';

// IMPORT FROM REACT
import { useContext } from 'react';

// IMPORT FROM MATERIAL ICONS
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import Avatar from '@mui/material/Avatar';

// IMPORT CONTEXT
import { SidebarContext } from '../GlobalContext';

export default function Header() {
  const sidebarCx = useContext(SidebarContext);
  const toggleSidebar = () => {
    sidebarCx.setSidebar(!sidebarCx.sidebar);
  };
  return (
    <header id="header">
      <section id="header-section">
        {/* HEADER LEFT */}
        <div id="header-left">
          <div id="header-menu" className="sidebar-toggler" onClick={toggleSidebar}>
            <MenuIcon/>
          </div>
          <div id="header-logo">
            <img className="header-logo" src="logo/logo.png" alt="logo"/>
            <span id="header-logo_text">Schedulemywork</span>
          </div>
        </div>
        {/* HEADER RIGHT */}
        {/* <div id="header-right">
          <div id="header-searchbar">
            <button id="header-searchbar-btn">
              <SearchIcon/>
            </button>
            <input type="text" placeholder='Search'/>
          </div>
        </div> */}
        {/* HEADER RIGHT 
        <div id="header-right">
          <div id="header-account" className="header-right-icon">
            <Avatar/>
          </div>
        </div>*/}
      </section>
    </header>
  );
}