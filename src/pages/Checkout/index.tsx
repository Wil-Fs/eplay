import { useEffect, useState } from 'react';
import Button from '../../componets/Button';
import Card from '../../componets/Cards';
import { InputGroup, Row, TabButton } from './styles';

import boleto from '../../assets/images/boleto.png';
import cartao from '../../assets/images/cartao.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePurchaseMutation } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { Navigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { getTotalPrice, parseToBrl } from '../../utils';
import { clearCart } from '../../store/reducers/cart';

type Installment = {
    quantity: number;
    amount: number;
    formattedAmount: string;
};

const Checkout = () => {
    const [payWithCard, setPayWithCard] = useState(false);
    const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();
    const { itens } = useSelector((state: RootReducer) => state.cart);
    const [installments, setInstallments] = useState<Installment[]>([]);
    const dispatch = useDispatch();

    const totalPrice = getTotalPrice(itens);

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

            installments: Yup.number().when((values, schema) =>
                payWithCard ? schema.required('O campo é obrigatório') : schema
            )
        }),
        onSubmit: (values) =>
            purchase({
                billing: {
                    document: values.cpf,
                    email: values.email,
                    name: values.fullName
                },
                delivery: {
                    email: values.deliveryEmail
                },
                payment: {
                    installments: values.installments,
                    card: {
                        active: payWithCard,
                        code: Number(values.cardCode),
                        name: values.cardDisplayName,
                        number: values.cardNumber,
                        owner: {
                            document: values.cpfCardOwner,
                            name: values.cardOwner
                        },
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
                        }
                    }
                },
                products: itens.map((item) => ({
                    id: item.id,
                    price: item.prices.current as number
                }))
            })
    });

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched;
        const isInvalid = fieldName in form.errors;
        const hasError = isTouched && isInvalid;

        return hasError;
    };

    useEffect(() => {
        const calculateInstallments = () => {
            const installmentsArray: Installment[] = [];

            for (let i = 1; i <= 6; i++) {
                installmentsArray.push({
                    quantity: i,
                    amount: totalPrice / i,
                    formattedAmount: parseToBrl(totalPrice / i)
                });
            }

            return installmentsArray;
        };

        if (totalPrice > 0) setInstallments(calculateInstallments());
    }, [totalPrice]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearCart());
        }
    }, [isSuccess, dispatch]);

    if (itens.length === 0 && !isSuccess) {
        return <Navigate to="/" />;
    }

    return (
        <div className={'Container'}>
            {isSuccess && data ? (
                <Card title="Muito obrigado">
                    <>
                        <p className="margin-top">
                            É com satisfação que informamos que recebemos seu
                            pedido com sucesso! <br />
                            Abaixo estão os detalhes da sua compra: <br />{' '}
                            Número do pedido: {data.orderId} <br /> Forma de
                            pagamento:{' '}
                            {!payWithCard
                                ? 'Boleto Bancário'
                                : 'Cartão de crédito'}{' '}
                            <br />
                        </p>
                        <p className="margin-top">
                            Caso tenha optado pelo pagamento via boleto
                            bancário, lembre-se de que a confirmação pode levar
                            até 3 dias úteis. Após a aprovação do pagamento,
                            enviaremos um e-mail contendo o código de ativação
                            do jogo.
                        </p>
                        <p className="margin-top">
                            Se você optou pelo pagamento com cartão de crédito,
                            a liberação do código de ativação ocorrerá após a
                            aprovação da transação pela operadora do cartão.
                            Você receberá o código no e-mail cadastrado em nossa
                            loja.
                        </p>
                        <p className="margin-top">
                            Pedimos que verifique sua caixa de entrada e a pasta
                            de spam para garantir que receba nossa comunicação.
                            Caso tenha alguma dúvida ou necessite de mais
                            informações, por favor, entre em contato conosco
                            através dos nossos canais de atendimento ao cliente.
                        </p>
                        <p className="margin-top">
                            Agradecemos por escolher a EPLAY e esperamos que
                            desfrute do seu jogo!
                        </p>
                    </>
                </Card>
            ) : (
                <form onSubmit={form.handleSubmit}>
                    <Card title={'Dados de cobrança'}>
                        <>
                            <Row>
                                <InputGroup>
                                    <label htmlFor="fullName">
                                        Nome Completo
                                    </label>
                                    <input
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        value={form.values.fullName}
                                        className={
                                            checkInputHasError('fullName')
                                                ? 'error'
                                                : ''
                                        }
                                    />
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
                                        className={
                                            checkInputHasError('email')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="cpf">CPF</label>
                                    <InputMask
                                        mask="999.999.999-99"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        type="text"
                                        id="cpf"
                                        name="cpf"
                                        value={form.values.cpf}
                                        className={
                                            checkInputHasError('cpf')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </InputGroup>
                            </Row>
                            <h3 className="margin-top">
                                Dados de entrega - conteúdo digital
                            </h3>
                            <Row>
                                <InputGroup>
                                    <label htmlFor="deliveryEmail">
                                        E-mail
                                    </label>
                                    <input
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        type="email"
                                        id="deliveryEmail"
                                        name="deliveryEmail"
                                        value={form.values.deliveryEmail}
                                        className={
                                            checkInputHasError('deliveryEmail')
                                                ? 'error'
                                                : ''
                                        }
                                    />
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
                                        className={
                                            checkInputHasError(
                                                'confirmDeliveryEmail'
                                            )
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </InputGroup>
                            </Row>
                        </>
                    </Card>
                    <Card title="Pagamento">
                        <>
                            <TabButton
                                onClick={() => setPayWithCard(false)}
                                isActive={!payWithCard}
                                type="button"
                            >
                                <img src={boleto} alt="Boleto"></img>
                                Boleto
                            </TabButton>
                            <TabButton
                                onClick={() => setPayWithCard(true)}
                                isActive={payWithCard}
                                type="button"
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
                                                    value={
                                                        form.values.cardOwner
                                                    }
                                                    className={
                                                        checkInputHasError(
                                                            'cardOwner'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </InputGroup>
                                            <InputGroup>
                                                <label htmlFor="cpfCardOwner">
                                                    CPF do titular do cartão
                                                </label>
                                                <InputMask
                                                    mask="999.999.999-99"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    type="text"
                                                    id="cpfCardOwner"
                                                    name="cpfCardOwner"
                                                    value={
                                                        form.values.cpfCardOwner
                                                    }
                                                    className={
                                                        checkInputHasError(
                                                            'cpfCardOwner'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
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
                                                    value={
                                                        form.values
                                                            .cardDisplayName
                                                    }
                                                    className={
                                                        checkInputHasError(
                                                            'cardDisplayName'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </InputGroup>
                                            <InputGroup>
                                                <label htmlFor="cardNumber">
                                                    Número do cartão
                                                </label>
                                                <InputMask
                                                    mask="9999 9999 9999 9999"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    type="text"
                                                    id="cardNumber"
                                                    name="cardNumber"
                                                    value={
                                                        form.values.cardNumber
                                                    }
                                                    className={
                                                        checkInputHasError(
                                                            'cardNumber'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </InputGroup>
                                            <InputGroup maxWidth="123px">
                                                <label htmlFor="expiresMonth">
                                                    Mês do vencimento
                                                </label>
                                                <InputMask
                                                    mask="99"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    type="text"
                                                    id="expiresMonth"
                                                    name="expiresMonth"
                                                    value={
                                                        form.values.expiresMonth
                                                    }
                                                    className={
                                                        checkInputHasError(
                                                            'expiresMonth'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </InputGroup>
                                            <InputGroup maxWidth="123px">
                                                <label htmlFor="expiresYear">
                                                    Ano do vencimento
                                                </label>
                                                <InputMask
                                                    mask="99"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    type="text"
                                                    id="expiresYear"
                                                    name="expiresYear"
                                                    value={
                                                        form.values.expiresYear
                                                    }
                                                    className={
                                                        checkInputHasError(
                                                            'expiresYear'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </InputGroup>
                                            <InputGroup maxWidth="48px">
                                                <label htmlFor="cardCode">
                                                    CVV
                                                </label>
                                                <InputMask
                                                    mask="999"
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    type="text"
                                                    id="cardCode"
                                                    name="cardCode"
                                                    value={form.values.cardCode}
                                                    className={
                                                        checkInputHasError(
                                                            'cardCode'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                />
                                            </InputGroup>
                                        </Row>
                                        <Row marginTop="24px">
                                            <InputGroup maxWidth="150px">
                                                <label htmlFor="installments"></label>
                                                <select
                                                    name="installments"
                                                    id="installments"
                                                    value={
                                                        form.values.installments
                                                    }
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    className={
                                                        checkInputHasError(
                                                            'installments'
                                                        )
                                                            ? 'error'
                                                            : ''
                                                    }
                                                >
                                                    {installments.map(
                                                        (installment) => (
                                                            <option
                                                                key={
                                                                    installment.quantity
                                                                }
                                                                value={
                                                                    installment.quantity
                                                                }
                                                            >
                                                                {
                                                                    installment.quantity
                                                                }
                                                                x de{' '}
                                                                {
                                                                    installment.formattedAmount
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </InputGroup>
                                        </Row>
                                    </>
                                ) : (
                                    <p>
                                        Ao optar por essa forma de pagamento, é
                                        importante lembrar que a confirmação
                                        pode levar até 3 dias úteis, devido aos
                                        prazos estabelecidos pelas instituições
                                        financeiras. Portanto, a liberação do
                                        código de ativação do jogo adquirido
                                        ocorrerá somente após a aprovação do
                                        pagamento do boleto.
                                    </p>
                                )}
                            </div>
                        </>
                    </Card>
                    <Button
                        onClick={form.handleSubmit}
                        type="button"
                        title="Clique aqui para finalizar a compra"
                        disabled={isLoading}
                    >
                        {isLoading
                            ? 'Finalizando Compra...'
                            : 'Finalizar Compra'}
                    </Button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
