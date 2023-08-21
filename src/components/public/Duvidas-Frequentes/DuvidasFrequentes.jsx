import React from 'react';
import './DuvidasFrequentes.css';
import Accordion from '../../common/Accordion/Accordion';

const DuvidasFrequentes = () => {
    return (
        <>
            <Accordion id={'locais-abrangencia-seguro'}>
                <div className="title">
                    Quais os locais de abrangência do Seguro Auto?
                </div>
                <div className="content">
                    O Seguro Auto tem abrangência em todo o território nacional.
                    Você pode acionar os serviços de sinistro e os benefícios em
                    qualquer cidade e estado brasileiro que possua o atendimento.
                    Caso você viaje com seu carro para países do Mercosul, a Porto
                    Seguros oferece o seguro Carta Verde, que é obrigatório nesses
                    locais.
                </div>
            </Accordion>
            <Accordion id={'fatores-interferem-valor-seguro'}>
                <div className="title">
                    Quais fatores interferem no valor do meu Seguro Auto?
                </div>
                <div className="content">
                    Para fazer o cálculo do seguro para o seu carro, os principais
                    fatores que determinam o preço são: marca, modelo e ano do
                    veículo; em quais áreas e cidades o carro circula e fica
                    estacionado a maior parte do tempo; quem é e qual a idade do
                    condutor principal. As diferentes cláusulas e coberturas a serem
                    contratadas, bem como o valor da franquia, também podem alterar
                    o valor final do seguro.
                </div>
            </Accordion>
            <Accordion id={'o-que-e-franquia-seguro'}>
                <div className="title">
                    O que é franquia de seguro?
                </div>
                <div className="content">
                    O termo franquia, refere-se ao valor previsto em contrato que
                    deve ser pago quando a seguradora for acionada pelo cliente.
                    <br />
                    Esse valor deve cobrir algum sinistro de perda parcial, exceto
                    nos casos de incêndio, explosão acidental ou em consequências de
                    raios.
                </div>
            </Accordion>
            <Accordion id={'casos-de-alagamento-seguro'}>
                <div className="title">
                    Em caso de alagamento, os veículos na garagem estão cobertos
                    pelo Seguro Auto?
                </div>
                <div className="content">
                    Sim, a cobertura compreensiva indeniza o segurado dos prejuízos
                    que venha a sofrer em consequência de danos materiais, causados
                    ao veículo segurado, provenientes dos riscos cobertos a seguir
                    relacionados: a submersão parcial ou total do veículo em água
                    doce, proveniente de enchentes ou inundações, inclusive nos
                    casos de veículos guardados no subsolo.
                </div>
            </Accordion>
        </>

    );
};

export default DuvidasFrequentes;
