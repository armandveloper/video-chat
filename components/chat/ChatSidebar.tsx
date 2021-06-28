import * as React from 'react';
import { MdClear } from 'react-icons/md';
import { UiContext } from '@/context/UiContext';
import SidebarTop from '../layout/SidebarTop';
import BtnIcon from '../ui/BtnIcon';
import ChatConversation from './ChatConversation';
import ChatSend from './ChatSend';

function ChatSidebar() {
	const { closeChat } = React.useContext(UiContext);

	return (
		<>
			<SidebarTop title="Call's messages">
				<BtnIcon
					aria-label="Close"
					data-tooltip="Close"
					data-tooltip-placement="bottom"
					onClick={closeChat}
				>
					<MdClear size="24" color="#fff" />
				</BtnIcon>
			</SidebarTop>
			<ChatConversation />
			<ChatSend />
		</>
	);
}

export default ChatSidebar;
