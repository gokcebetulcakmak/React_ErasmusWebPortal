import React, { useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import { BiHomeCircle, BiLogOut,BiUserCircle } from "react-icons/bi";
import {MdRemoveRedEye, MdOutlineSettings, MdAssignment} from "react-icons/md";
import "./Sidebar.css";
import logo from "../img/logo.jpg";



export default function Sidebar() {
  const navigate = useNavigate();

  const kullanici =  sessionStorage.getItem('email');
  const LogOut = () => {
    sessionStorage.clear();
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
 
  return (
    <div>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="" />
            </span>
            <div className="text logo-text">
              <span className="name">Erasmus</span>
              <span className="profession">Portal</span>
            </div>
          </div>
        </header>

        <div className="menu-bar">
          <div className="menu">

            <ul className="menu-links">
            <li className="nav-link">
                <Link to={'/portal'}>
                  <i className="icon">
                    <BiHomeCircle />
                  </i>
                  <span className="text nav-text">Anasayfa</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to={'/portal/basvuruFormu'}>
                  <i className="icon">
                    <MdAssignment/>
                  </i>
                  <span className="text nav-text">Başvuru Formu</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to={'/portal/basvuruGoruntule'}>
                  <i className="icon">
                  <MdRemoveRedEye/>
                  </i>
                  <span className="text nav-text">Başvuru Görüntüle</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="/portal/Ayarlar">
                  <i className="icon">
                    <MdOutlineSettings />
                  </i>
                  <span className="text nav-text">Ayarlar</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
          <li>
                <i className="icon">
                  <BiUserCircle />
                </i>
                <span className="text nav-text" id="kullanici" >{kullanici}</span>

            </li>
            <li className="mb-3">
              <Link to={"/"} onClick={LogOut}>
                <i className="icon">
                  <BiLogOut />
                </i>
                <span className="text nav-text">Çıkış</span>
              </Link>
            </li>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
