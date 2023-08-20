import React, { useState } from 'react';
import Logotipo from '../../common/Logotipo/Logotipo';
import Button from '../../common/Button/Button';
import './Header.css';

const Header = () => {
    const [viewMenu, setViewMenu] = useState(true);
    const menuLinks = [
        { title: "Sobre Nós", href: "" },
        { title: "Ajuda", href: "" },
        { title: "Blog", href: "" },
        { title: "Encontre um Corretor", href: "" },
    ]

    return (
        <header className="header" id="header">
            <nav className="navbar-menu">
                {viewMenu && (
                    <div className="burger" id="burger">
                        {[1, 2, 3].map((item) => (
                            <span key={item} className="burger-line"></span>
                        ))}
                    </div>
                )}
                <div className="logo-menu">
                    <a href="/" className='logotipo-link'>
                        <Logotipo width={85}>
                        </Logotipo>
                    </a>
                    {viewMenu && (
                        <div className="menu" id="menu">
                            <ul className="menu-inner">
                                {menuLinks.map((menu) => (
                                    <li key={menu.title}>
                                        <a href={menu.href} className="menu-link">
                                            {menu.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                {viewMenu && (
                    <div className="entrar">
                        <a href="/login">
                            <Button class={'btn-outline-primary'}>
                                Entrar
                            </Button>
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
