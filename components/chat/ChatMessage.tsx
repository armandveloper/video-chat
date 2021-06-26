import styled from 'styled-components';

interface ChatMessageProps {
	text: string;
}

const Message = styled.div`
	font-size: 1.3rem;
	padding: 0.6rem 0;
`;

const Time = styled.span`
	display: inline-block;
	font-size: 1.2rem;
	padding-left: 0.8rem;
`;

const Text = styled.span`
	display: block;
	font-size: 1.5rem;
`;

function ChatMessage({ text }: ChatMessageProps) {
	return (
		<Message>
			<span>Tú</span>
			<Time>20:00</Time>
			<Text>{text}</Text>
		</Message>
	);
}

export default ChatMessage;
