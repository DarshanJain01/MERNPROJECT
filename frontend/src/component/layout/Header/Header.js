import React, { useState, useRef, useEffect,useLayoutEffect } from "react";
import { Link } from 'react-router-dom';

import { ReactNavbar } from "overlay-navbar";
import logo from "./logo.svg";
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};


// const Header = () => {
//   return <ReactNavbar {...options} />;
// };

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
      linksContainerRef.current.style.backgroundColor = `white`;

    } else {
      linksContainerRef.current.style.height = '0px';
      linksContainerRef.current.style.backgroundColor = `#6882BB`;

    }
  }, [showLinks]);

  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        if(window.innerWidth>=800){
          linksContainerRef.current.style.height = '0px';
          linksContainerRef.current.style.backgroundColor = `#6882BB`;        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  }

  useWindowSize()
  
  return (
    <nav className="navbar">
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
            {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id} className='toggleDisplay'>
                <Link to={url} className='icons'>{icon}</Link>
              </li>
            );
          })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <Link to={url} className='icons'>{icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
  
export default Header;

