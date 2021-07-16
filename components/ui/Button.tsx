import styled from 'styled-components';
import { BtnSizes, Colors, colors } from '@/styles/theme';

interface ButtonProps {
	color?: Colors;
	outline?: boolean;
	size?: BtnSizes;
}

const sizes = {
	sm: '0.3rem 0.6rem',
	md: '0.5rem 1rem',
	lg: '1rem 1.5rem',
};

const fontSizeMap = {
	sm: '1.2rem',
	md: '1.6rem',
	lg: '1.8rem',
};

const Button = styled.button<ButtonProps>`
	background-color: ${({ color = 'primary' }) => colors[color]};
	border: ${({ outline = false }) =>
		outline ? '1px solid var(--color-text)' : 'none'};
	border-radius: 0.3rem;
	color: var(--color-text);
	cursor: pointer;
	font-family: inherit;
	font-size: ${({ size = 'md' }) => fontSizeMap[size]};
	padding: ${({ size = 'md' }) => sizes[size]};
	text-align: center;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	> :first-child {
		margin-right: 0.5rem;
	}
`;

export default Button;
