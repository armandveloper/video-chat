import styled from 'styled-components';

interface ButtonProps {
	color?: 'primary' | 'transparent';
	outline?: boolean;
}

const colors = {
	primary: 'var(--color-primary)',
	transparent: 'transparent',
};

const Button = styled.button<ButtonProps>`
	background-color: ${({ color = 'primary' }) => colors[color]};
	border: ${({ outline = false }) =>
		outline ? '1px solid var(--color-primary)' : 'none'};
	border-radius: 0.3rem;
	color: var(--color-text);
	cursor: pointer;
	font-family: inherit;
	font-size: 1.6rem;
	padding: 0.5rem 1rem;
	text-align: center;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	> :first-child {
		margin-right: 0.5rem;
	}
`;

export default Button;
