import * as React from 'react';
import styled from 'styled-components';

interface MemberTileProps {
	children?: React.ReactNode;
}

const StyledTile = styled.div`
	background-color: var(--color-bg-2);
	color: var(--color-text);
	font-size: 1.4rem;
	text-align: center;
	transition: 0.25s ease;
`;

const MemberPhoto = styled.div`
	background-color: var(--color-primary);
	border-radius: 50%;
	height: 12rem;
	margin: 0 auto;
	width: 12rem;
`;

function MemberTile({ children }: MemberTileProps) {
	return (
		<StyledTile>
			<MemberPhoto />
			{children}
		</StyledTile>
	);
}

export default MemberTile;
