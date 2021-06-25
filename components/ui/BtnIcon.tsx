import styled from 'styled-components';

interface BtnIconProps {
	circle?: boolean;
	color?: 'primary' | 'dark' | 'error';
	size?: 'sm' | 'md' | 'lg';
}

const colors = {
	primary: 'blue',
	dark: 'var(--color-bg-2)',
	error: 'var(--color-error)',
};

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
`;

export default BtnIcon;
