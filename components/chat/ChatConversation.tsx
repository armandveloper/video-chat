import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import { scrollbarStyle } from '@/styles/scrollbar';

const StyledConversation = styled.div`
	flex: 1;
	padding-bottom: 1rem;
	overflow-y: auto;
	${scrollbarStyle};
`;

function ChatConversation() {
	const messages: string[] = [
		'Hola a todos',
		'¿Cómo están',
		'Bien gracias',
		'Excelente, Vamos a comenzar con lo planeados',
		'Hola a todos',
		'¿Cómo están',
		'Bien gracias',
		'Excelente, Vamos a comenzar con lo planeados',
		'Hola a todos',
		'¿Cómo están',
		'Bien gracias',
		'Excelente, Vamos a comenzar con lo planeados',
		'Hola a todos',
		'¿Cómo están',
		'Bien gracias',
		'Excelente, Vamos a comenzar con lo planeados',
	];

	return (
		<StyledConversation>
			{messages.map((msg, i) => (
				<ChatMessage key={i} text={msg} />
			))}
		</StyledConversation>
	);
}

export default ChatConversation;
