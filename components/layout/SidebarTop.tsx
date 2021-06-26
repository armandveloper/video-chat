import * as React from 'react';
import styled from 'styled-components';

interface SidebarTopProps {
	children?: React.ReactNode;
	title: string;
}

const StyledSidebarTop = styled.div`
	height: var(--sidebar-top-height);
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h2`
	font-size: 1.8rem;
	font-weight: 400;
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	user-select: none;
`;

function SidebarTop({ children, title }: SidebarTopProps) {
	return (
		<StyledSidebarTop>
			<Title>{title}</Title>
			{children}
		</StyledSidebarTop>
	);
}

export default SidebarTop;
