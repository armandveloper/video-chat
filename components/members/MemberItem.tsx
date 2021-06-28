import styled from 'styled-components';

interface MemberItemProps {
	name: string;
}

const Item = styled.li`
	padding: 0.8rem 0;
	display: flex;
	align-items: center;
`;

const UserPhoto = styled.div`
	background-color: royalblue;
	border-radius: 50%;
	display: block;
	height: 3.2rem;
	margin-right: 1.6rem;
	width: 3.2rem;
	object-fit: cover;
`;

const UserName = styled.span`
	flex: 1;
	font-size: 1.4rem;
	overflow: hidden;
	text-overflow: ellipsis;
	user-select: none;
	white-space: nowrap;
`;

function MemberItem({ name }: MemberItemProps) {
	return (
		<Item>
			<UserPhoto />
			<UserName>{name}</UserName>
		</Item>
	);
}

export default MemberItem;
