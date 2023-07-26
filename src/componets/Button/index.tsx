import { ButtonContainer, ButtonLink } from './styles';

type Props = {
    type: 'link' | 'button';
    title: string;
    to?: string;
    onClick?: () => void;
    children: string;
};

const Button = ({ type, title, to, onClick, children }: Props) => {
    if (type === 'button') {
        return (
            <>
                <ButtonContainer
                    type={'button'}
                    title={title}
                    onClick={onClick}
                >
                    {children}
                </ButtonContainer>
            </>
        );
    }

    return (
        <ButtonLink to={to as string} type={'link'} title={title}>
            {children}
        </ButtonLink>
    );
};

export default Button;