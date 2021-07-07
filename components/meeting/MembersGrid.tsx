import * as React from 'react';
import styled from 'styled-components';
import { UiContext } from '@/context/UiContext';
import MemberTile from './MemberTile';

const Grid = styled.div<{ expanded: boolean }>`
	flex-basis: ${({ expanded }) =>
		expanded ? '100%' : 'calc(100% - var(--sidebar-width))'};
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 1.5rem 1rem;
	align-content: start;
	transition: flex-basis 0.3s ease;
`;

function MembersGrid() {
	const {
		uiState: { isChatVisible, isInfoVisible, isMembersVisible },
	} = React.useContext(UiContext);

	return (
		<Grid expanded={!isChatVisible && !isInfoVisible && !isMembersVisible}>
			<MemberTile>Member 1</MemberTile>
			<MemberTile>Member 2</MemberTile>
			<MemberTile>Member 3</MemberTile>
			<MemberTile>Member 4</MemberTile>
			<MemberTile>Member 5</MemberTile>
			<MemberTile>Member 6</MemberTile>
			<MemberTile>Member 7</MemberTile>
			<MemberTile>Member 8</MemberTile>
			<MemberTile>Member 9</MemberTile>
			<MemberTile>Member 10</MemberTile>
		</Grid>
	);
}

export default MembersGrid;
