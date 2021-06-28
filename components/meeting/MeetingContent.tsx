import * as React from 'react';
import styled from 'styled-components';
import { UiContext } from '@/context/UiContext';
import MembersGrid from './MembersGrid';
import Sidebar from '../layout/Sidebar';

const Meeting = styled.main`
	flex: 1;
	height: calc(100% - var(--bottom-bar-height));
	padding: 1.2rem;
	position: relative;
	display: flex;
`;

function MeetingContent() {
	const {
		uiState: { isChatVisible, isMembersVisible },
	} = React.useContext(UiContext);

	return (
		<Meeting>
			<MembersGrid />
			<Sidebar
				type={
					isChatVisible
						? 'chat'
						: isMembersVisible
						? 'members'
						: 'none'
				}
				show={isChatVisible || isMembersVisible}
			/>
		</Meeting>
	);
}

export default MeetingContent;
