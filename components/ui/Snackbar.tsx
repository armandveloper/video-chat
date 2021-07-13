import styled from 'styled-components';

interface SnackbarProps {
	message: string;
}

const StyledSnackbar = styled.div`
	background-color: var(--color-bg-3);
	color: var(--color-text);
	font-size: 1.4rem;
	letter-spacing: 0.015rem;
	padding: 0.6rem 1.2rem;
	position: fixed;
	bottom: 3rem;
	left: 3rem;
`;

function Snackbar({ message }: SnackbarProps) {
	return <StyledSnackbar>{message}</StyledSnackbar>;
}

export default Snackbar;
