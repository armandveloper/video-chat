import styled from 'styled-components';

const Button = styled.button`
	background-color: var(--color-primary);
	border: none;
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
