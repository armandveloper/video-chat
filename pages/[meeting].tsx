import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import MeetingContent from '@/components/MeetingContent';
import MeetingBottomBar from '@/components/MeetingBottomBar';

interface MeetingPageProps {
	meeting: string;
}

const StyledPage = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
`;

function MeetingPage() {
	const router = useRouter();

	const { meeting } = router.query;

	return (
		<Layout title={`Meet - ${meeting}`}>
			<StyledPage>
				<MeetingContent>
					<h1>Meeting Page</h1>
				</MeetingContent>
				<MeetingBottomBar />
			</StyledPage>
		</Layout>
	);
}

export default MeetingPage;
