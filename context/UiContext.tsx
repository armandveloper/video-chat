import * as React from 'react';
import uiReducer, { UiState } from '@/reducers/uiReducer';

interface UiContextInt {
	state: UiState;
}

const initialState = {
	isChatVisible: false,
	isMembersVisible: false,
};

export const UiContext = React.createContext({} as UiContextInt);

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = React.useReducer(uiReducer, initialState);

	return (
		<UiContext.Provider
			value={{
				state,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
