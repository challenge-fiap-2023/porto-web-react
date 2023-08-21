
import React from 'react';
import Container from '../../../components/common/Container/Container';
import Header from '../../../components/public/Header/Header';
import Col from '../../../components/common/Col/Col';
import Row from '../../../components/common/Row/Row';
import './HomePage.css';
import Padding from '../../../components/common/Padding/Padding';
import Button from '../../../components/common/Button/Button';
import Title from '../../../components/common/Title/Title';
import Section from '../../../components/common/Section/Section';
import SliderBeneficios from '../../../components/public/Slider-Beneficios/SliderBeneficios';
import SliderDescontosEspeciais from '../../../components/public/Slider-Descontos-Especiais/SliderDescontosEspeciais';
import DuvidasFrequentes from '../../../components/public/Duvidas-Frequentes/DuvidasFrequentes';
import Footer from '../../../components/public/Footer/Footer';

const HomePage = () => {
    return (
        <>
            <Container type='xl'>
                <Header></Header>
            </Container>
            <main className="main">
                <Row>
                    <Col md={6} col={12}>
                        <div className="main-col-text">
                            <Padding pl={5}>
                                <Title type={'h1'}>
                                    Seguro Pesados da Porto
                                </Title>
                                <p>
                                    A proteção que acompanha você em qualquer lugar e em
                                    qualquer situação.
                                </p>
                                <Button class={'btn-primary'}>
                                    Solicite uma proposta
                                </Button>
                            </Padding>
                        </div>
                    </Col >
                    <Col md={6} col={12}>
                        <div className="main-img"></div>
                    </Col>
                </Row >
            </main >

            <Section id={'beneficios'}>
                <Container type={'xl'}>
                    <Title type={'h4'}>
                        Por que ter seu seguro para seu veículo
                    </Title>
                    <br />
                    <SliderBeneficios></SliderBeneficios>
                </Container>
            </Section>

            <Section id={'descontos-especiais'}>
                <Container type={'xl'}>
                    <Title type={'h4'}>
                        Ainda garante descontos especiais
                    </Title>
                    <br />
                    <SliderDescontosEspeciais ></SliderDescontosEspeciais>
                </Container>
            </Section>

            <Section id={'duvidas-frequentes'}>
                <Container type={'xl'}>
                    <Title type={'h5'}>
                        Tire suas dúvidas sobre o Seguro Auto da Porto
                    </Title>
                    <br />
                    <DuvidasFrequentes></DuvidasFrequentes>
                </Container>
            </Section>

            <Footer></Footer>
        </>
    );
};

export default HomePage;