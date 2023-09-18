import Button from '../../componets/Button';
import Card from '../../componets/Cards';
import { InputGroup, Row } from './styles';

const Checkout = () => (
    <div className={'Container'}>
        <Card title={'Dados de cobrança'}>
            <>
                <Row>
                    <InputGroup>
                        <label htmlFor="fullName">Nome Completo</label>
                        <input id="fullName" type="text" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" />
                    </InputGroup>
                </Row>
                <h3 className="margin-top">
                    Dados de entrega - conteúdo digital
                </h3>
                <Row>
                    <InputGroup>
                        <label htmlFor="deliveryEmail">E-mail</label>
                        <input type="email" id="deliveryEmail"></input>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="confirmDeliveryEmail">
                            Confime o e-mail
                        </label>
                        <input type="email" id="confirmDeliveryEmail"></input>
                    </InputGroup>
                </Row>
            </>
        </Card>
        <Card title="Pagamento">
            <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
            </p>
        </Card>
        <Button type="button" title="Clique aqui para finalizar a compra">
            Finalizar compra
        </Button>
    </div>
);

export default Checkout;
