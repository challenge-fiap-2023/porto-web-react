
import React from 'react';
import Container from '../../../components/common/Container/Container'
import Padding from '../../../components/common/Padding/Padding'
import Header from '../../../components/public/Header/Header'
import './LoginPage.css';
import CardLogin from '../../../components/public/Card-Login/CardLogin';
import InputFloatingLabel from '../../../components/common/Input-Floating-Label/InputFloatingLabel';

const LoginPage = () => {
    return (
        <Container type={'xl'}>
            <Padding p={1}>
                <Header viewMenu={false}></Header>
                <CardLogin>
                    <div className="title">
                        Acessar Conta
                    </div>
                    <span className="sub-title">
                        Preencha seus dados de acesso para continuar.
                    </span>
                </CardLogin>
            </Padding>
        </Container>
    );
};

export default LoginPage;