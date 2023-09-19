import { useState } from 'react';
import Button from '../../componets/Button';
import Card from '../../componets/Cards';
import { InputGroup, Row, TabButton } from './styles';

import boleto from '../../assets/images/boleto.png';
import cartao from '../../assets/images/cartao.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {
    const [payWithCard, setPayWithCard] = useState(false);

    const form = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            cpf: '',
            deliveryEmail: '',
            confirmDeliveryEmail: '',
            cardOwner: '',
            cpfCardOwner: '',
            cardDisplayName: '',
            cardNumber: '',
            expiresMonth: '',
            expiresYear: '',
            cardCode: '',
            installments: 1
        },
        validationSchema: Yup.object({
            //Dados da entrega
            fullName: Yup.string()
                .min(5, 'O nome precisa de pelo cinco caracteres')
                .required('O campo é obrigatório'),
            email: Yup.string()
                .email('E-mail invalido')
                .required('O campo é obrigatório'),
            cpf: Yup.string()
                .min(11, 'Digite todos os números de seu CPF')
                .max(14, 'Número de CPF excede o padrão')
                .required('O campo é obrigatório'),
            deliveryEmail: Yup.string()
                .email('E-mail invalido')
                .required('O campo é obrigatório'),
            confirmDeliveryEmail: Yup.string()
                .oneOf([Yup.ref('deliveryEmail')], 'Os emails não combinam')
                .required('O campo é obrigatório'),

            //Dados do pagamento
            cardOwner: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),

            cpfCardOwner: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),

            cardDisplayName: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),

            cardNumber: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),

            expiresMonth: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),

            expiresYear: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),

            cardCode: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            ),

            installments: Yup.string().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            )
        }),
        onSubmit: (values) => console.log(values)
    });

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched;
        const isInvalid = fieldName in form.errors;

        if (isTouched && isInvalid) return message;

        return '';
    };

    return (
        <form onSubmit={form.handleSubmit} className={'Container'}>
            <Card title={'Dados de cobrança'}>
                <>
                    <Row>
                        <InputGroup>
                            <label htmlFor="fullName">Nome Completo</label>
                            <input
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                id="fullName"
                                type="text"
                                name="fullName"
                                value={form.values.fullName}
                            />
                            <small>
                                {getErrorMessage(
                                    'fullName',
                                    form.errors.fullName
                                )}
                            </small>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="email">E-mail</label>
                            <input
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                type="email"
                                id="email"
                                name="email"
                                value={form.values.email}
                            />
                            <small>
                                {getErrorMessage('email', form.errors.email)}
                            </small>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="cpf">CPF</label>
                            <input
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={form.values.cpf}
                            />
                            <small>
                                {getErrorMessage('cpf', form.errors.cpf)}
                            </small>
                        </InputGroup>
                    </Row>
                    <h3 className="margin-top">
                        Dados de entrega - conteúdo digital
                    </h3>
                    <Row>
                        <InputGroup>
                            <label htmlFor="deliveryEmail">E-mail</label>
                            <input
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                type="email"
                                id="deliveryEmail"
                                name="deliveryEmail"
                                value={form.values.deliveryEmail}
                            />
                            <small>
                                {getErrorMessage(
                                    'deliveryEmail',
                                    form.errors.deliveryEmail
                                )}
                            </small>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="confirmDeliveryEmail">
                                Confime o e-mail
                            </label>
                            <input
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                type="email"
                                id="confirmDeliveryEmail"
                                name="confirmDeliveryEmail"
                                value={form.values.confirmDeliveryEmail}
                            />
                            <small>
                                {getErrorMessage(
                                    'confirmDeliveryEmail',
                                    form.errors.confirmDeliveryEmail
                                )}
                            </small>
                        </InputGroup>
                    </Row>
                </>
            </Card>
            <Card title="Pagamento">
                <>
                    <TabButton
                        onClick={() => setPayWithCard(false)}
                        isActive={!payWithCard}
                    >
                        <img src={boleto} alt="Boleto"></img>
                        Boleto
                    </TabButton>
                    <TabButton
                        onClick={() => setPayWithCard(true)}
                        isActive={payWithCard}
                    >
                        <img src={cartao} alt="Cartão de crédito"></img>
                        Cartão de crédito
                    </TabButton>
                    <div className="margin-top">
                        {payWithCard ? (
                            <>
                                <Row marginTop="24px">
                                    <InputGroup>
                                        <label htmlFor="cardOwner">
                                            Nome do titular do cartão
                                        </label>
                                        <input
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            type="text"
                                            id="cardOwner"
                                            name="cardOwner"
                                            value={form.values.cardOwner}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cardOwner',
                                                form.errors.cardOwner
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="cpfCardOwner">
                                            CPF do titular do cartão
                                        </label>
                                        <input
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            type="text"
                                            id="cpfCardOwner"
                                            name="cpfCardOwner"
                                            value={form.values.cpfCardOwner}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cpfCardOwner',
                                                form.errors.cpfCardOwner
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="carDisplayName">
                                            Nome no cartão
                                        </label>
                                        <input
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            type="text"
                                            id="carDisplayName"
                                            name="cardDisplayName"
                                            value={form.values.cardDisplayName}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cardDisplayName',
                                                form.errors.cardDisplayName
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="cardNumber">
                                            Número do cartão
                                        </label>
                                        <input
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            type="text"
                                            id="cardNumber"
                                            name="cardNumber"
                                            value={form.values.cardNumber}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cardNumber',
                                                form.errors.cardNumber
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup maxWidth="123px">
                                        <label htmlFor="expiresMonth">
                                            Mês do vencimento
                                        </label>
                                        <input
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            type="text"
                                            id="expiresMonth"
                                            name="expiresMonth"
                                            value={form.values.expiresMonth}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'expiresMonth',
                                                form.errors.expiresMonth
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup maxWidth="123px">
                                        <label htmlFor="expiresYear">
                                            Ano do vencimento
                                        </label>
                                        <input
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            type="text"
                                            id="expiresYear"
                                            name="expiresYear"
                                            value={form.values.expiresYear}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'expiresYear',
                                                form.errors.expiresYear
                                            )}
                                        </small>
                                    </InputGroup>
                                    <InputGroup maxWidth="48px">
                                        <label htmlFor="cardCode">CVV</label>
                                        <input
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            type="text"
                                            id="cardCode"
                                            name="cardCode"
                                            value={form.values.cardCode}
                                        />
                                        <small>
                                            {getErrorMessage(
                                                'cardCode',
                                                form.errors.cardCode
                                            )}
                                        </small>
                                    </InputGroup>
                                </Row>
                                <Row marginTop="24px">
                                    <InputGroup maxWidth="150px">
                                        <label htmlFor="installments"></label>
                                        <select
                                            id="installments"
                                            name="installments"
                                            value={form.values.installments}
                                        >
                                            <option>1x de R$ 200,00</option>
                                            <option>2x de R$ 200,00</option>
                                            <option>3x de R$ 200,00</option>
                                        </select>
                                        <small>
                                            {getErrorMessage(
                                                'installments',
                                                form.errors.installments
                                            )}
                                        </small>
                                    </InputGroup>
                                </Row>
                            </>
                        ) : (
                            <p>
                                Ao optar por essa forma de pagamento, é
                                importante lembrar que a confirmação pode levar
                                até 3 dias úteis, devido aos prazos
                                estabelecidos pelas instituições financeiras.
                                Portanto, a liberação do código de ativação do
                                jogo adquirido ocorrerá somente após a aprovação
                                do pagamento do boleto.
                            </p>
                        )}
                    </div>
                </>
            </Card>
            <Button type="button" title="Clique aqui para finalizar a compra">
                Finalizar compra
            </Button>
        </form>
    );
};

export default Checkout;
