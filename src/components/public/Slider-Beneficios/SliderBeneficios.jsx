import React, { Component } from "react";
import Slider from "react-slick";
import './SliderBeneficios.css';
import Padding from "../../common/Padding/Padding";
import Title from "../../common/Title/Title";
import Paragraph from "../../common/Paragraph/Paragraph";

const SliderBeneficios = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Padding px={5} py={3}>
            <div class="card-slide">
              <div class="card-slide-icon">
                <div class="icon">
                  <i class="bx bx-wrench"></i>
                </div>
              </div>
              <Title type={'h6'}>
                Serviços emergenciais e de manutenção para sua casa
              </Title>
              <div class="card-slide-description">
                <Paragraph>
                  Mão de obra gratuita com segurança e qualidade
                  para:
                  conserto de eletrodomésticos, reparo nas rede
                  elétrica e hidráulica, help desk,
                  desentupimento,
                  limpeza de calhas, chaveiro comum.
                </Paragraph>
              </div>
            </div>
          </Padding>
        </div>
        <div>
          <Padding px={5} py={3}>
            <div class="card-slide">
              <div class="card-slide-icon">
                <div class="icon">
                  <i class="bx bx-home"></i>
                </div>
              </div>
              <Title type={'h6'}>
                Serviços emergenciais e de manutenção para sua casa
              </Title>
              <div class="card-slide-description">
                <Paragraph>
                  Mão de obra gratuita com segurança e qualidade
                  para:
                  conserto de eletrodomésticos, reparo nas rede
                  elétrica e hidráulica, help desk,
                  desentupimento,
                  limpeza de calhas, chaveiro comum.
                </Paragraph>
              </div>
            </div>
          </Padding>
        </div>
        <div>
          <Padding px={5} py={3}>
            <div class="card-slide">
              <div class="card-slide-icon">
                <div class="icon">
                  <i class="bx bx-trip"></i>
                </div>
              </div>
              <Title type={'h6'}>
                Cobertura para danos causados em operações de basculamento
              </Title>
              <div class="card-slide-description">
                <Paragraph>
                  Cobertura para danos causados pelo veículo
                  segurado durante operações de basculamento. A
                  cobertura é válida para o veículo segurado ou
                  terceiros atingidos durante a operação. A
                  garantia segue os limites de indenização
                  contratados.
                </Paragraph>
              </div>
            </div>
          </Padding>
        </div>
        <div>
          <Padding px={5} py={3}>
            <div class="card-slide">
              <div class="card-slide-icon">
                <div class="icon">
                  <i class="bx bx-money-withdraw"></i>
                </div>
              </div>
              <Title type={'h6'}>
                Reposição do valor de 0km por até 6 meses
              </Title>
              <div class="card-slide-description">
                <Paragraph>
                  Nos casos de indenização integral, você tem
                  garantia de até 6 meses para a reposição do
                  caminhão pelo valor de 0km. Cobertura válida
                  para seguros contratados na modalidade de valor
                  de mercado, de acordo com o tipo de caminhão,
                  modelo, região e condições de contratação.
                </Paragraph>
              </div>
            </div>
          </Padding>
        </div>
        <div>
          <Padding px={5} py={3}>
            <div class="card-slide">
              <div class="card-slide-icon">
                <div class="icon">
                  <i class="bx bx-like"></i>
                </div>
              </div>
              <Title type={'h6'}>
                Benefícios e vantagens exclusivas
              </Title>
              <div class="card-slide-description">
                <Paragraph>
                  Mais serviços, vantagens e descontos: benefícios
                  com o Cartão de Crédito Porto Seguro Bank,
                  descontos em despachantes, descontos em aluguel
                  de veículos, PortoPlus: descontos e ofertas em
                  diversos parceiros.
                </Paragraph>
              </div>
            </div>
          </Padding>
        </div>
      </Slider>
    </div>
  );
};

export default SliderBeneficios;
