import styled from 'styled-components';

const Screen = styled.div`
	background-color: var(--color-bg);
	color: var(--color-text);
	height: 100vh;
	display: flex;
`;

const Loader = styled.h1`
	margin: auto;
`;

function LoadingScreen() {
	return (
		<Screen>
			<Loader>Loading...</Loader>
		</Screen>
	);
}

export default LoadingScreen;
