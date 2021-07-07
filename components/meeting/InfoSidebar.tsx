import * as React from 'react';
import { MdClear } from 'react-icons/md';
import { UiContext } from '@/context/UiContext';
import SidebarTop from '../layout/SidebarTop';
import BtnIcon from '../ui/BtnIcon';

function InfoSidebar() {
	const { closeChat } = React.useContext(UiContext);

	return (
		<>
			<SidebarTop title="Information to join">
				<BtnIcon
					aria-label="Close"
					data-tooltip="Close"
					data-tooltip-placement="bottom"
					onClick={closeChat}
				>
					<MdClear size="24" color="#fff" />
				</BtnIcon>
			</SidebarTop>
		</>
	);
}

export default InfoSidebar;
