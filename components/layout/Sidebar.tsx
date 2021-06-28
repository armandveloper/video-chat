import styled from 'styled-components';
import BtnIcon from '../ui/BtnIcon';

const Sidebar = styled.aside`
	flex: 0 0 0;
	background-color: var(--color-bg-2);
	border-radius: 0.8rem;
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition: flex-basis 0.3s ease-out;
	&.show {
		padding: 0.8rem 1.6rem;
		flex-basis: var(--sidebar-width);
	}
	${BtnIcon} {
		margin: 0;
	}
`;

export default Sidebar;
