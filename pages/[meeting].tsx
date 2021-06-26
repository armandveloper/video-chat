import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '@/components/layout/Layout';
import MeetingContent from '@/components/meeting/MeetingContent';
import MeetingBottomBar from '@/components/meeting/MeetingBottomBar';
import MembersGrid from '@/components/meeting/MembersGrid';
import ChatSidebar from '@/components/chat/ChatSidebar';

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
					<MembersGrid />
					<ChatSidebar />
				</MeetingContent>
				<MeetingBottomBar />
			</StyledPage>
		</Layout>
	);
}

export default MeetingPage;
