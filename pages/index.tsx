import styled from 'styled-components';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import { MdKeyboard, MdVideoCall } from 'react-icons/md';

const Header = styled.header`
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.h1`
	font-size: 2.6rem;
	font-weight: 400;
	letter-spacing: 0.1rem;
`;

const Container = styled.main`
	border: 1px solid red;
	max-width: 50rem;
	margin: 4rem auto 0;
	display: grid;
	grid-template-columns: 2fr 3fr 1fr;
	gap: 2rem;
	align-items: start;
`;

const InputWrapper = styled.div`
	border: 1px solid transparent;
	padding: 0.6rem 1rem;
	transition: 0.15s ease;
	display: flex;
	align-items: center;
	:focus-within {
		outline: none;
		border-color: var(--color-primary);
	}
	> * {
		flex-shrink: 0;
	}
`;

const Input = styled.input`
	flex: 1;
	background: none;
	border: none;
	color: inherit;
	font-family: inherit;
	padding: 0 1rem;
	font-size: 1.4rem;
	&:focus {
		outline: none;
	}
`;

function HomePage() {
	return (
		<Layout title="My Meet">
			<Header>
				<Logo>My Meet</Logo>
				<Button>Login</Button>
			</Header>
			<Container>
				<Button>
					<MdVideoCall size="24" color="currentColor" />
					New Meeting
				</Button>
				<InputWrapper>
					<MdKeyboard size="24" color="currentColor" opacity="0.79" />
					<Input type="text" />
				</InputWrapper>
				<Button>Join</Button>
			</Container>
		</Layout>
	);
}

export default HomePage;
