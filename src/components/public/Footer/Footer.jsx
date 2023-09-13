import React from 'react';
import Padding from '../../common/Padding/Padding';
import Row from '../../common/Row/Row';
import Col from '../../common/Col/Col';

import './Footer.css';
import Logotipo from '../../common/Logotipo/Logotipo';
import Button from '../../common/Button/Button';

const Footer = () => {
    const linksRapidos = [
        { href: "", title: "Perguntas Frequentes", icon: "bx bx-question-mark" },
        { href: "", title: "SAC e Telefones", icon: "bx bx-phone" },
        { href: "", title: "WhatsApp", icon: "bx bxl-whatsapp" },
        { href: "", title: "Endereços", icon: "bx bx-map" },
        { href: "", title: "Ouvidoria", icon: "bx bx-phone-call" },
        { href: "", title: "Canal de Denúncia", icon: "bx bx-shield" },
        { href: "", title: "Encontre um Corretor", icon: "bx bx-user-pin" },
        { href: "", title: "Chat Online", icon: "bx bx-message" }
    ];

    const infosSobre = [
        { href: "", title: "Quem Somos" },
        { href: "", title: "Nossa História" },
        { href: "", title: "Notícias e Imprensa" },
        { href: "", title: "Sustentabilidade" },
        { href: "", title: "Instituto Porto Seguro" },
        { href: "", title: "Teatro Porto Seguro" },
        { href: "", title: "Blog" },
        { href: "", title: "Patrocínios" },
        { href: "", title: "Dicas de Segurança" },
        {},
        { href: "", title: "Relação com investidores" },
        { href: "", title: "Trabalhe Conosco" },
        { href: "", title: "Oxigênio Aceleradora" },
        { href: "", title: "Editais" },
        { href: "", title: "Porto Plus" },
        { href: "", title: "Venda de Imóveis" },
        { href: "", title: "Porto Asset Management" }
    ];

    const redesSociais = [
        { href: "", icon: "bx bxl-facebook" },
        { href: "", icon: "bx bxl-instagram" },
        { href: "", icon: "bx bxl-linkedin" },
        { href: "", icon: "bx bxl-youtube" },
        { href: "", icon: "bx bxl-twitter" },
        { href: "", icon: "bx bxl-tiktok" },
    ]

    const footerBottom = [
        { href: "", title: "Privacidade" },
        { href: "", title: "Segurança da Informação" },
        { href: "", title: "Porto em um Clique" },
        { href: "", title: "Procon" },
        { href: "", title: "Configurações de Cookies" },
    ]

    return (
        <footer>
            <div className="footer-main">
                <Padding py={15} px={6}>
                    <Row >
                        <Col col={12} md={3}>
                            <div className="links-rapidos">
                                <h3>Links Rápidos</h3>
                                <ul>
                                    {linksRapidos.map((link, index) => (
                                        <li className='menu-item' key={index}>
                                            <a href={link.href} className="menu-link">
                                                <i className={`${link.icon}`}></i>
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        <Col col={12} md={6}>
                            <div className="infos-sobre">
                                <h3>
                                    Sobre a Porto
                                </h3>
                                <ul className="infos-sobre-lista">
                                    {infosSobre.map((info, index) => (
                                        <li className='menu-item' key={index}>
                                            <a href={info.href} className="menu-link">
                                                {info.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        <Col col={12} md={3}>
                            <div className="acompanhe-redes-sociais">
                                <Logotipo width={170} light={true}></Logotipo>
                                <h3>Acompanhe a Porto nas redes sociais</h3>
                                <Padding px={3}>
                                    <ul>
                                        {redesSociais.map((rede, index) => (
                                            <li className='menu-item' key={index}>
                                                <a href={rede.href} className="menu-link">
                                                    <i className={`${rede.icon}`}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </Padding>
                                <h3>Baixe o App da Porto</h3>
                                <ul>
                                    <li>
                                        <a href="">
                                            <img width="130"
                                                src="../../../../public/assets/images/public/footer/apple-store.svg"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img width="130"
                                                src="../../../../public/assets/images/public/footer/google-store.svg"
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <br />
                                <Button class={'btn-outline-light'}>
                                    Parceiros e Investidores
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Padding>
            </div>

            <div className="footer-bottom">
                <Padding px={6} pb={15} pt={3}>
                    <ul>
                        {footerBottom.map((item, index) => (
                            <li className='menu-item' key={index}>
                                <a href={item.href}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Padding>
            </div>
        </footer>
    );
};

export default Footer;
