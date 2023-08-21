import React, { Component } from "react";
import Slider from "react-slick";
import './SliderDescontosEspeciais.css';
import Padding from "../../common/Padding/Padding";
import Paragraph from "../../common/Paragraph/Paragraph";

const SliderDescontosEspeciais = () => {
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
          <Padding p={4}>
            <div className="card-img">
              <img src="../../../../public/assets/images/public/special-discounts/desconto-app-transito-gentil.webp" />
            </div>
            <div className="card-title">
              App Trânsito +Gentil
            </div>
            <div className="card-description">
              <Paragraph>
                Até 25% de desconto no Seguro Auto. Ao se cadastrar no
                app
                Trânsito+gentil, você ganha 3% de desconto na
                contratação ou
                renovação do seu Porto Seguro Auto e pode ganhar até 22%
                de
                desconto pelo seu desepenho no volante.
              </Paragraph>
            </div>
          </Padding>
        </div>
        <div>
          <Padding p={4}>
            <div className="card-img">
              <img src="../../../../public/assets/images/public/special-discounts/desconto-despachantes.webp" />
            </div>
            <div className="card-title">
              Desconto em despachante
            </div>
            <div className="card-description">
              <Paragraph>
                Com o Seguro Caminhão, você tem desconto em despachante
                para resolver a burocracia com facilidade. Assim, você
                economiza tempo e dinheiro, contando com desconto nos
                horários.
              </Paragraph>
            </div>
          </Padding>
        </div>
        <div>
          <Padding p={4}>
            <div className="card-img">
              <img src="../../../../public/assets/images/public/special-discounts/desconto-aluguel-veiculos.webp" />
            </div>
            <div className="card-title">
              Desconto em aluguel de veículo
            </div>
            <div className="card-description">
              <Paragraph>
                O caminhão está em revisão ou indisponível por qualquer
                motivo? Cliente do Seguro Caminhão pode alugar um carro
                com desconto. Uma vantagem para você usar quando
                precisar, sem necessidade da ocorrência de sinistro.
              </Paragraph>
            </div>
          </Padding>
        </div>
        <div>
          <Padding p={4}>
            <div className="card-img">
              <img src="../../../../public/assets/images/public/special-discounts/desconto-correntista-itau.webp" />
            </div>
            <div className="card-title">
              Desconto para correntista Itaú
            </div>
            <div className="card-description">
              <Paragraph>
                10% de desconto para correntista Itaú, além de troca de
                pontos na contratação ou renovação do Seguro Auto.
              </Paragraph>
            </div>
          </Padding>
        </div>
      </Slider>
    </div>
  );
};

export default SliderDescontosEspeciais;
