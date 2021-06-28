import styled from 'styled-components';
import { MdClear } from 'react-icons/md';
import Sidebar from '../layout/Sidebar';
import SidebarTop from '../layout/SidebarTop';
import BtnIcon from '../ui/BtnIcon';
import ChatConversation from './ChatConversation';
import ChatSend from './ChatSend';

function ChatSidebar() {
	return (
		<Sidebar className="show">
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
		</Sidebar>
	);
}

export default ChatSidebar;
