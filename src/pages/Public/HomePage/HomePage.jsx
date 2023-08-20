
import React from 'react';
import Container from '../../../components/common/Container/Container';
import Header from '../../../components/public/Header/Header';
import Col from '../../../components/common/Col/Col';
import Row from '../../../components/common/Row/Row';
import './HomePage.css';
import Padding from '../../../components/common/Padding/Padding';
import Button from '../../../components/common/Button/Button';
import Title from '../../../components/common/Title/Title';

const HomePage = () => {
    return (
        <>
            <Container type='xl'>
                <Header></Header>
            </Container>
            <main class="main">
                <Row>
                    <Col md={6} col={12}>
                        <div class="main-col-text">
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
        </>
    );
};

export default HomePage;