'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoKapak from '../../public/imgLogo135px-02.png'

const Header = () => {
  function clickBtnBurguer() {
    document.getElementById("btn-burguer").classList.toggle("toClose");
    document.getElementById("menucontent").classList.toggle("ShowedMenu");
  }

  return (
    <header>
      <div className="container-fluid">
        <a
          id="btn-burguer"
          style={{ cursor: "pointer" }}
          className="header_btn-OpenNav toshow homeme"
          onClick={clickBtnBurguer}
        >
          <svg
            className="svg-inline--fa fa-bars fa-w-14 opeeen"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
          <svg
            className="svg-inline--fa fa-times fa-w-11 closes"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </a>
      </div>
      <nav id="menucontent" className="header_menuPrincipal">
        <div className="container mp_contenido">
          <div className="ms-contentbox" id="header_home">
            <div className="menu-top-menu-container">
              <ul id="menu-top-menu" className="ms-iboxitems">
                <li
                  id="menu-item-71"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-71 ms-navitemsDad"
                >
                  <Link
                    className="toggle"
                    href="/quienesSomos"
                    onClick={clickBtnBurguer}
                  >
                    Quienes somos
                  </Link>
                </li>
                <li
                  id="menu-item-489"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-489 ms-navitemsDad"
                >
                  <Link
                    className="toggle"
                    href="/nuestraEmpresa"
                    onClick={clickBtnBurguer}
                  >
                    Nuestra empresa
                  </Link>
                </li>
                <li
                  id="menu-item-87"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-87 ms-navitemsDad"
                >
                  <Link
                    className="toggle"
                    href="/contacto"
                    onClick={clickBtnBurguer}
                  >
                    Contacto
                  </Link>
                </li>
                <div className="logoCentralMenuDesplegado">
                  <Link
                    href="/"
                    onClick={clickBtnBurguer}
                  >
                    <Image src={logoKapak} alt="logoKapak" width={71} />
                  </Link>
                  <h1
                    className="testFont"
                    style={{
                      zIndex: "999",
                      marginTop: "20px",
                      fontFamily: "Futura Round Bold",
                      fontSize: "21px",
                      fontWeight: "bold",
                      color: "white",
                      width: "max-content",
                    }}
                  >
                    AGROINDUSTRIAS KAPAK HUAYTA
                  </h1>
                  <span
                    style={{
                      color: "white",
                      fontFamily: "arial",
                      fontSize: "16px",
                    }}
                  >
                    Bienestar ancestral para todos
                  </span>
                </div>
                <li
                  id="menu-item-145"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-145 ms-navitemsDad"
                >
                  <Link
                    className="toggle"
                    href="/certificaciones"
                    onClick={clickBtnBurguer}
                  >
                    Certificaciones
                  </Link>
                </li>
                <li
                  id="menu-item-136"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-136 ms-navitemsDad"
                >
                  <Link
                    className="toggle"
                    href="/nuestrosProductos"
                    onClick={clickBtnBurguer}
                  >
                    Nuestros Productos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
