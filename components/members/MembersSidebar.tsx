import * as React from 'react';
import { MdClear } from 'react-icons/md';
import { UiContext } from '@/context/UiContext';
import Sidebar from '../layout/Sidebar';
import SidebarTop from '../layout/SidebarTop';
import BtnIcon from '../ui/BtnIcon';
import MemberList from './MemberList';

function MembersSidebar() {
	const { closeMembers } = React.useContext(UiContext);

	return (
		<>
			<SidebarTop title="People">
				<BtnIcon
					aria-label="Close"
					data-tooltip="Close"
					data-tooltip-placement="bottom"
					onClick={closeMembers}
				>
					<MdClear size="24" color="#fff" />
				</BtnIcon>
			</SidebarTop>
			<MemberList />
		</>
	);
}

export default MembersSidebar;
