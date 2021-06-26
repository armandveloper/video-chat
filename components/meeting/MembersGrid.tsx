import styled from 'styled-components';

const Grid = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	gap: 1.5rem 1rem;
	align-content: start;
`;

const MemberTile = styled.div`
	background-color: royalblue;
	height: 10rem;
	color: #fff;
	font-size: 2rem;
`;

function MembersGrid() {
	return (
		<Grid>
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
