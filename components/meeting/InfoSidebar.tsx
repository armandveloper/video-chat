import * as React from 'react';
import styled from 'styled-components';
import { MdContentCopy, MdClear } from 'react-icons/md';
import { UiContext } from '@/context/UiContext';
import * as clipboard from '@/utils/clipboard';
import SidebarTop from '../layout/SidebarTop';
import BtnIcon from '../ui/BtnIcon';
import Snackbar from '../ui/Snackbar';

const Headline = styled.h3`
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: 0.01785714em;
	margin: 1.2rem 0 0.4rem;
`;

const Link = styled.div`
	font-size: 1.4rem;
	letter-spacing: 0.01428571em;
	line-height: 2rem;
	opacity: 0.79;
`;

const CopyLink = styled.div`
	cursor: pointer;
	margin-top: 1rem;
	padding: 1rem 0;
	user-select: none;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 2rem;
	span {
		color: var(-color-primary-alt);
	}
`;

function InfoSidebar() {
	const { closeInfo } = React.useContext(UiContext);

	const handleCopyCode = () => {
		clipboard.copy('Código de ejemplo: 123-456-789');
	};

	return (
		<>
			<Snackbar message="hello eowlrd" />
			<SidebarTop title="Meeting's details">
				<BtnIcon
					aria-label="Close"
					data-tooltip="Close"
					data-tooltip-placement="bottom"
					onClick={closeInfo}
				>
					<MdClear size="24" color="#fff" />
				</BtnIcon>
			</SidebarTop>
			<Headline>Information to join</Headline>
			<Link>https://meet.google.com/aabg-cgg-csgg</Link>
			<CopyLink onClick={handleCopyCode}>
				<MdContentCopy size="24" color="var(--color-primary)" />
				<Link as="span">Copy information to join the call</Link>
			</CopyLink>
		</>
	);
}

export default InfoSidebar;
