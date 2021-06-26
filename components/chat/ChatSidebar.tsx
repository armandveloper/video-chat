import styled from 'styled-components';
import { MdClear } from 'react-icons/md';
import SidebarTop from '../layout/SidebarTop';
import BtnIcon from '../ui/BtnIcon';
import ChatConversation from './ChatConversation';
import ChatSend from './ChatSend';

const StyledChatSidebar = styled.aside`
	flex: 0 0 0;
	background-color: var(--color-bg-2);
	border-radius: 0.8rem;
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition: flex-basis 0.3s ease-out;
	&.show {
		padding: 0.8rem 1.6rem;
		flex-basis: var(--sidebar-width);
	}
	${BtnIcon} {
		margin: 0;
	}
`;

function ChatSidebar() {
	return (
		<StyledChatSidebar className="show">
			<SidebarTop title="Call's messages">
				<BtnIcon
					aria-label="Close"
					data-tooltip="Close"
					data-tooltip-placement="bottom"
				>
					<MdClear size="24" color="#fff" />
				</BtnIcon>
			</SidebarTop>
			<ChatConversation />
			<ChatSend />
		</StyledChatSidebar>
	);
}

export default ChatSidebar;
