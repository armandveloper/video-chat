import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import Button from './Button';

interface UserMenuProps {
	name: string;
	picture: string;
}

const Menu = styled.div`
	display: flex;
	align-items: center;
`;

const ProfilePhoto = styled.img`
	border-radius: 50%;
	margin-right: 1.5rem;
`;

function UserMenu({ name, picture }: UserMenuProps) {
	return (
		<Menu>
			<ProfilePhoto
				src={picture}
				alt={name}
				width="30"
				height="30"
				title={name}
			/>
			<Button size="sm" color="error">
				<FiLogOut size="18" color="#fff" />
				Logout
			</Button>
		</Menu>
	);
}

export default UserMenu;
