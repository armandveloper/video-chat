import styled from 'styled-components';
import MemberItem from './MemberItem';
import { scrollbarStyle } from '@/styles/scrollbar';
import { sidebarHeadlineStyle } from '@/styles/typography';

const List = styled.ul`
	flex: 1;
	padding-bottom: 1rem;
	overflow-y: auto;
	${scrollbarStyle};
`;

const Headline = styled.h3`
	${sidebarHeadlineStyle};
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
