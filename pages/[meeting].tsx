import { useRouter } from 'next/router';
import styled from 'styled-components';
import { UiProvider } from '@/context/UiContext';
import Layout from '@/components/layout/Layout';
import MeetingContent from '@/components/meeting/MeetingContent';
import MeetingBottomBar from '@/components/meeting/MeetingBottomBar';
import MembersGrid from '@/components/meeting/MembersGrid';
import ChatSidebar from '@/components/chat/ChatSidebar';
import MembersSidebar from '@/components/members/MembersSidebar';

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
				<UiProvider>
					<MeetingContent>
						<MembersGrid />
						{/* <ChatSidebar /> */}
						<MembersSidebar />
					</MeetingContent>
					<MeetingBottomBar />
				</UiProvider>
			</StyledPage>
		</Layout>
	);
}

export default MeetingPage;
