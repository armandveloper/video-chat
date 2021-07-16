import * as React from 'react';
import uiReducer, { UiState } from '@/reducers/uiReducer';
import * as ui from '@/actions/ui';

interface IUiContext {
	uiState: UiState;
	toggleChat(): void;
	toggleInfo(): void;
	toggleMembers(): void;
	closeChat(): void;
	closeInfo(): void;
	closeMembers(): void;
	openSnackbar(message: string): void;
	closeSnackbar(): void;
}

const initialState = {
	isChatVisible: false,
	isInfoVisible: false,
	isMembersVisible: false,
	snackbar: {
		message: '',
		open: false,
	},
};

export const UiContext = React.createContext({} as IUiContext);

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
	const [uiState, dispatch] = React.useReducer(uiReducer, initialState);

	const toggleChat = () => dispatch(ui.toggleChat());

	const toggleInfo = () => dispatch(ui.toggleInfo());

	const toggleMembers = () => dispatch(ui.toggleMembers());

	const closeChat = () => dispatch(ui.closeChat());

	const closeInfo = () => dispatch(ui.closeInfo());

	const closeMembers = () => dispatch(ui.closeMembers());

	const openSnackbar = (message: string) =>
		dispatch(ui.openSnackbar(message));

	const closeSnackbar = () => dispatch(ui.closeSnackbar());

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
				openSnackbar,
				closeSnackbar,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
