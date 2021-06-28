import * as React from 'react';
import styled from 'styled-components';
import {
	hideSidebarAnimation,
	showSidebarAnimation,
} from '@/styles/animations';
import ChatSidebar from '../chat/ChatSidebar';
import MembersSidebar from '../members/MembersSidebar';
import BtnIcon from '../ui/BtnIcon';

interface SidebarProps {
	show: boolean;
	type: 'chat' | 'members' | 'none';
}

const StyledSidebar = styled.aside<SidebarProps>`
	position: absolute;
	right: 0;
	top: 1.2rem;
	width: var(--sidebar-width);
	background-color: var(--color-bg-2);
	border-radius: 0.8rem;
	height: 100%;
	padding: 0.8rem 1.6rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	animation: ${({ show }) =>
			show ? showSidebarAnimation : hideSidebarAnimation}
		0.3s ease-out forwards;
	${BtnIcon} {
		margin: 0;
	}
`;

function Sidebar({ show, type }: SidebarProps) {
	const [shouldRender, setRender] = React.useState(show);

	React.useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<StyledSidebar
			onAnimationEnd={handleAnimationEnd}
			show={show}
			type={type}
		>
			{type === 'chat' ? (
				<ChatSidebar />
			) : type === 'members' ? (
				<MembersSidebar />
			) : null}
		</StyledSidebar>
	);
}

export default Sidebar;
