import styled from 'styled-components';
import { BtnSizes, Colors, colors } from '@/styles/theme';

interface BtnIconProps {
	circle?: boolean;
	color?: Colors;
	size?: BtnSizes;
}

const sizes = {
	sm: '3.2rem',
	md: '4rem',
	lg: '4.8rem',
};

const BtnIcon = styled.button<BtnIconProps>`
	border: none;
	background-color: ${({ color }) => (color ? colors[color] : 'transparent')};
	border-radius: 10rem;
	cursor: pointer;
	font-family: inherit;
	font-size: 1.6rem;
	height: ${({ size = 'md' }) => sizes[size]};
	margin: 0 0.6rem;
	padding: 0.8rem;
	width: ${({ circle = true, size = 'md' }) =>
		circle ? sizes[size] : '5.6rem'};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: 0.25s ease-in-out;
	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;

export default BtnIcon;
