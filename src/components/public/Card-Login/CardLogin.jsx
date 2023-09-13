import React, { useState } from 'react';
import Padding from '../../common/Padding/Padding';
import Button from '../../common/Button/Button';
import Title from '../../common/Title/Title';
import Paragraph from '../../common/Paragraph/Paragraph';
import './CardLogin.css';
import BackPageButton from '../../common/BackPageButton/BackPageButton';
import InputFloatingLabel from '../../common/Input-Floating-Label/InputFloatingLabel';
import { formatCNPJ, formatCPF, searchChildrenToArrayByClassName } from '../../../utils/masks';

const CardLogin = ({ children }) => {
    const bodyTitle = searchChildrenToArrayByClassName(children, 'title');

    const bodySubTitle = searchChildrenToArrayByClassName(children, 'sub-title');

    const [cpf, setCpf] = useState('');
    const [invalidCpf, setInvalidCpf] = useState(false);

    const handleCpfChange = (newCpf) => {
        setCpf(newCpf);
        setInvalidCpf(false);
    };

    const maskCpfOrCnpj = (cpfOrCnpj) => {
        return cpfOrCnpj.length <= 11 ? formatCPF(cpfOrCnpj) : formatCNPJ(cpfOrCnpj);
    };

    return (
        <div className="content-register-login">
            <div className="card">
                <Padding px={6} py={8}>
                    <div className="card-header">
                        <BackPageButton>
                            <i className="bx bx-arrow-back icon-back"></i>
                        </BackPageButton>
                    </div>

                    <div className="card-body">
                        <Title type={'h2'}>
                            {bodyTitle}
                        </Title>

                        <Paragraph>
                            {bodySubTitle}
                        </Paragraph>
                        <br />

                        <InputFloatingLabel
                            labelFor="cpf"
                            required
                            value={cpf}
                            inputInvalid={false}
                            onValueChange={handleCpfChange}
                            mask={maskCpfOrCnpj}
                        >
                            <span className="label">CPF ou CNPJ</span>
                            <span className="message">CPF inválido</span>
                        </InputFloatingLabel>

                        <Button
                            type='submit'
                            class='btn-primary btn-icon px-3 py-3'
                        >
                            <div className="btn-title">
                                <span>
                                    Entrar
                                </span>
                            </div>
                            <div className="btn-icon">
                                <i className="bx bx-arrow-back rotate-180"></i>
                            </div>
                        </Button>

                        <div class="input-checkbox checkbox-svg">
                            <input class="sr-only" id="cs" type="checkbox" />
                            <label class="checkbox-label checkbox-label-svg" for="cs">
                                <svg viewBox="0 0 100 100" class="icon-svg checkmark-icon"
                                    role="presentation">
                                    <path class="checkbox-icon-svg-path" fill="none" stroke="#000"
                                        stroke-width="14" stroke-linecap="square"
                                        stroke-linejoin="square" stroke-miterlimit="10"
                                        d="M12.1 52.1l24.4 24.4 53-53" />
                                </svg>
                                <div className="label">
                                    Lembrar meu CPF para próximos acessos.
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="card-footer">
                        <Paragraph>
                            Ainda não tem sua conta Porto Seguro?
                        </Paragraph>
                        <a href="">
                            Crie uma agora mesmo :)
                        </a>
                    </div>
                </Padding>
            </div >
        </div >
    );
};

export default CardLogin;
