import styled from 'styled-components';
import MemberItem from './MemberItem';
import { scrollbarStyle } from '@/styles/scrollbar';

const List = styled.ul`
	flex: 1;
	padding-bottom: 1rem;
	overflow-y: auto;
	${scrollbarStyle};
`;

const Headline = styled.h3`
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: 0.01785714em;
	margin: 1.2rem 0 0.4rem;
`;

function MemberList() {
	const members = [
		'User 1',
		'User 2',
		'User 3',
		'User 4',
		'User 5',
		'User 6',
		'User 7',
		'User 8',
		'User 10',
		'User 1',
		'User 2',
		'User 3',
		'User 4',
		'User 5',
		'User 6',
		'User 7',
		'User 8',
		'User 10',
	];

	return (
		<List>
			<Headline>In the call</Headline>
			{members.map((member, i) => (
				<MemberItem key={i} name={member} />
			))}
		</List>
	);
}

export default MemberList;
