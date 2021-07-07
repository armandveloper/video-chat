import * as React from 'react';
import uiReducer, { UiState } from '@/reducers/uiReducer';
import * as ui from '@/actions/ui';

interface UiContextInt {
	uiState: UiState;
	toggleChat(): void;
	toggleInfo(): void;
	toggleMembers(): void;
	closeChat(): void;
	closeInfo(): void;
	closeMembers(): void;
}

const initialState = {
	isChatVisible: false,
	isInfoVisible: false,
	isMembersVisible: false,
};

export const UiContext = React.createContext({} as UiContextInt);

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
	const [uiState, dispatch] = React.useReducer(uiReducer, initialState);

	const toggleChat = () => dispatch(ui.toggleChat());

	const toggleInfo = () => dispatch(ui.toggleInfo());

	const toggleMembers = () => dispatch(ui.toggleMembers());

	const closeChat = () => dispatch(ui.closeChat());

	const closeMembers = () => dispatch(ui.closeMembers());

	const closeInfo = () => dispatch(ui.closeInfo());

	return (
		<UiContext.Provider
			value={{
				uiState,
				toggleChat,
				toggleInfo,
				toggleMembers,
				closeChat,
				closeInfo,
				closeMembers,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
