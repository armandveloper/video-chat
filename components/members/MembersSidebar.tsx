import { MdClear } from 'react-icons/md';
import Sidebar from '../layout/Sidebar';
import SidebarTop from '../layout/SidebarTop';
import BtnIcon from '../ui/BtnIcon';
import MemberList from './MemberList';

function MembersSidebar() {
	return (
		<Sidebar className="show">
			<SidebarTop title="People">
				<BtnIcon
					aria-label="Close"
					data-tooltip="Close"
					data-tooltip-placement="bottom"
				>
					<MdClear size="24" color="#fff" />
				</BtnIcon>
			</SidebarTop>
			<MemberList />
		</Sidebar>
	);
}

export default MembersSidebar;
