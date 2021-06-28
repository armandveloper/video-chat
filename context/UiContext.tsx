import * as React from 'react';
import uiReducer, { UiState } from '@/reducers/uiReducer';
import * as ui from '@/actions/ui';

interface UiContextInt {
	uiState: UiState;
	toggleChat(): void;
	toggleMembers(): void;
	closeChat(): void;
	closeMembers(): void;
}

const initialState = {
	isChatVisible: false,
	isMembersVisible: false,
};

export const UiContext = React.createContext({} as UiContextInt);

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
	const [uiState, dispatch] = React.useReducer(uiReducer, initialState);

	const toggleChat = () => dispatch(ui.toggleChat());

	const toggleMembers = () => dispatch(ui.toggleMembers());

	const closeChat = () => dispatch(ui.closeChat());

	const closeMembers = () => dispatch(ui.closeMembers());

	return (
		<UiContext.Provider
			value={{
				uiState,
				toggleChat,
				toggleMembers,
				closeChat,
				closeMembers,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
