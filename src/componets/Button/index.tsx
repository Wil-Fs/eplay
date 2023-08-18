import { ButtonContainer, ButtonLink } from './styles';

export type Props = {
    type: 'link' | 'button';
    title: string;
    to?: string;
    onClick?: () => void;
    children: string;
    variant?: 'primary' | 'secondary';
};

const Button = ({
    type,
    title,
    to,
    onClick,
    children,
    variant = 'primary'
}: Props) => {
    if (type === 'button') {
        return (
            <>
                <ButtonContainer
                    type={'button'}
                    title={title}
                    onClick={onClick}
                    variant={variant}
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
