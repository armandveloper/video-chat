import * as React from 'react';
import styled from 'styled-components';
import { MdSend } from 'react-icons/md';
import BtnIcon from '../ui/BtnIcon';

const Form = styled.form`
	flex: 0 0 4.8rem;
	margin: 1.5rem 0;
	display: grid;
	grid-template-columns: 1fr auto;
	align-content: center;
`;

const Input = styled.input`
	grid-row: 1;
	grid-column: 1 / -1;
	background-color: var(--color-bg-3);
	border: none;
	border-radius: 1rem;
	color: #fff;
	font-family: inherit;
	font-size: 1.4rem;
	height: 100%;
	padding: 0 4.5rem 0 1rem;
	transition: 0.3s ease-out;
	&:focus {
		outline: none;
		box-shadow: 0 0 0 1px var(--color-primary);
	}
	&::placeholder {
		color: inherit;
	}

	& + ${BtnIcon} {
		grid-row: 1;
		grid-column: 2;
	}
`;

function ChatSend() {
	const [message, setMessage] = React.useState('');

	const handleSend = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (message.length === 0) return;
		console.log('Enviando mensaje:', message);
		setMessage('');
	};

	return (
		<Form onSubmit={handleSend}>
			<Input
				type="text"
				aria-label="Type a message"
				placeholder="Send a message to everyone"
				value={message}
				onChange={({ currentTarget }) =>
					setMessage(currentTarget.value)
				}
			/>
			<BtnIcon
				disabled={message.length === 0}
				type="submit"
				aria-label="Send message"
				data-tooltip="Send message"
				data-tooltip-placement="right top"
			>
				<MdSend size="24" color="#fff" />
			</BtnIcon>
		</Form>
	);
}

export default ChatSend;
