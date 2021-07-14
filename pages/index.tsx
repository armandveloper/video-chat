import styled from 'styled-components';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

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

function HomePage() {
	return (
		<Layout title="My Meet">
			<Header>
				<Logo>My Meet</Logo>
				<Button>Login</Button>
			</Header>
			<h1>Hello</h1>
		</Layout>
	);
}

export default HomePage;
