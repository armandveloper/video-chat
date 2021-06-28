import * as React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
	MdCallEnd,
	MdChat,
	MdInfoOutline,
	MdMic,
	MdPeopleOutline,
	MdVideocam,
} from 'react-icons/md';
import { UiContext } from '@/context/UiContext';
import BtnIcon from '@/components/ui/BtnIcon';

const StyledBar = styled.nav`
	background-color: var(--color-bg);
	padding: 0 1.8rem;
	height: var(--bottom-bar-height);
	overflow-x: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	> * {
		flex-shrink: 0;
	}
`;

const RightBottomBar = styled.div`
	display: flex;
	align-items: center;
	span {
		font-family: 'Google Sans', Roboto, Arial, sans-serif;
		font-size: 1.6rem;
		font-weight: 500;
		letter-spacing: 0.00625em;
		line-height: 2.4rem;
		margin-right: 1.2rem;
		white-space: nowrap;
	}
	.separator {
		background-color: #dadce0;
		border-top: 1px solid rgba(0, 0, 0, 0.12);
		height: 1.6rem;
		margin: 0.7rem 0;
		width: 1px;
	}
	.meeting-code {
		height: var(--bottom-bar-height);
		margin: 0 0.6rem 0 1.2rem;
		white-space: nowrap;
		display: flex;
		align-items: center;
	}
`;

function MeetingBottomBar() {
	const router = useRouter();

	const { meeting } = router.query;

	const {
		uiState: { isChatVisible, isMembersVisible },
		toggleChat,
		toggleMembers,
	} = React.useContext(UiContext);

	return (
		<StyledBar>
			<RightBottomBar>
				<span>21:02</span>
				<div role="separator" className="separator" />
				<span className="meeting-code">{meeting}</span>
			</RightBottomBar>
			<div>
				<BtnIcon
					data-tooltip="Disable microphone"
					data-tooltip-placement="center top"
					color="dark"
				>
					<MdMic size="30" color="#e8eaed" />
				</BtnIcon>
				<BtnIcon
					data-tooltip="Disable camera"
					data-tooltip-placement="center top"
					color="dark"
				>
					<MdVideocam size="30" color="#e8eaed" />
				</BtnIcon>
				<BtnIcon
					data-tooltip="Leave videocall"
					data-tooltip-placement="center top"
					color="error"
					circle={false}
				>
					<MdCallEnd size="30" color="#e8eaed" />
				</BtnIcon>
			</div>
			<div>
				<BtnIcon
					data-tooltip="Meeting's details"
					data-tooltip-placement="center top"
					size="lg"
				>
					<MdInfoOutline size="24" color="#fff" />
				</BtnIcon>
				<BtnIcon
					data-tooltip="Show all members"
					data-tooltip-placement="center top"
					size="lg"
					onClick={toggleMembers}
				>
					<MdPeopleOutline
						size="24"
						color={
							isMembersVisible ? 'var(--color-primary)' : '#fff'
						}
					/>
				</BtnIcon>
				<BtnIcon
					data-tooltip="Chat"
					data-tooltip-placement="center top"
					size="lg"
					onClick={toggleChat}
				>
					<MdChat
						size="24"
						color={isChatVisible ? 'var(--color-primary)' : '#fff'}
					/>
				</BtnIcon>
			</div>
		</StyledBar>
	);
}

export default MeetingBottomBar;
