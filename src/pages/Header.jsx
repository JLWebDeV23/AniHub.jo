import React from 'react'
import './header.css'
import NavListItem from '../components/NavListItem';
import navListData from '../data/NavListData';
import Search from '../components/Search';
import logoImage from '../images/雷姆.png'
import Button from '../components/Button';
import { VscAccount } from "react-icons/vsc";


const Header = () => {
  return (
    <header>
        <a href="/" className="logo-container">
            <img src={logoImage} alt="Home page icon" className='logoImage'/>
            <span className="logo">喬之屋</span>
        </a>        
        <ul className='nav'>
            {navListData.map(nav => (
                <NavListItem key={nav._id} nav={nav} />
            ))}
        </ul>
        <Search />
        <Button 
          icon={<VscAccount className='loginIcon'/>}
          name="Sign in"
          bgColor='transparent'
        />
    </header>
  );
}

export default Header