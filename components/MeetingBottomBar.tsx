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
import BtnIcon from '@/components/ui/BtnIcon';

const StyledBar = styled.footer`
	background-color: var(--color-bg);
	padding: 0 1.8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
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
		height: 8rem;
		margin: 0 0.6rem 0 1.2rem;
		white-space: nowrap;
		display: flex;
		align-items: center;
	}
`;

function MeetingBottomBar() {
	const router = useRouter();

	const { meeting } = router.query;

	return (
		<StyledBar>
			<RightBottomBar>
				<span>21:02</span>
				<div role="separator" className="separator" />
				<span className="meeting-code">{meeting}</span>
			</RightBottomBar>
			<div>
				<BtnIcon color="dark">
					<MdMic size="30" color="#e8eaed" />
				</BtnIcon>
				<BtnIcon color="dark">
					<MdVideocam size="30" color="#e8eaed" />
				</BtnIcon>
				<BtnIcon color="error" circle={false}>
					<MdCallEnd size="30" color="#e8eaed" />
				</BtnIcon>
			</div>
			<div>
				<BtnIcon size="lg">
					<MdInfoOutline size="24" color="#fff" />
				</BtnIcon>
				<BtnIcon size="lg">
					<MdPeopleOutline size="24" color="#fff" />
				</BtnIcon>
				<BtnIcon size="lg">
					<MdChat size="24" color="#fff" />
				</BtnIcon>
			</div>
		</StyledBar>
	);
}

export default MeetingBottomBar;
