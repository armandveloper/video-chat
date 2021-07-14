import * as types from '@/types/index';

interface SnackbarState {
	message: string;
	open: boolean;
}

export interface UiState {
	isChatVisible: boolean;
	isInfoVisible: boolean;
	isMembersVisible: boolean;
	snackbar: SnackbarState;
}

export type Action =
	| { type: typeof types.UI_TOGGLE_CHAT }
	| { type: typeof types.UI_TOGGLE_INFO }
	| { type: typeof types.UI_TOGGLE_MEMBERS }
	| { type: typeof types.UI_CLOSE_CHAT }
	| { type: typeof types.UI_CLOSE_INFO }
	| { type: typeof types.UI_CLOSE_MEMBERS }
	| { type: typeof types.UI_OPEN_SNACKBAR; payload: string }
	| { type: typeof types.UI_CLOSE_SNACKBAR };

const uiReducer = (state: UiState, action: Action): UiState => {
	switch (action.type) {
		case types.UI_TOGGLE_CHAT:
			return {
				...state,
				isChatVisible: !state.isChatVisible,
				isInfoVisible: false,
				isMembersVisible: false,
			};

		case types.UI_TOGGLE_INFO:
			return {
				...state,
				isInfoVisible: !state.isInfoVisible,
				isChatVisible: false,
				isMembersVisible: false,
			};

		case types.UI_TOGGLE_MEMBERS:
			return {
				...state,
				isMembersVisible: !state.isMembersVisible,
				isInfoVisible: false,
				isChatVisible: false,
			};

		case types.UI_CLOSE_CHAT:
			return {
				...state,
				isChatVisible: false,
			};

		case types.UI_CLOSE_MEMBERS:
			return {
				...state,
				isMembersVisible: false,
			};

		case types.UI_CLOSE_INFO:
			return {
				...state,
				isInfoVisible: false,
			};

		case types.UI_OPEN_SNACKBAR:
			return {
				...state,
				snackbar: {
					message: action.payload,
					open: true,
				},
			};

		case types.UI_CLOSE_SNACKBAR:
			return {
				...state,
				snackbar: {
					...state.snackbar,
					open: false,
				},
			};
		default:
			return state;
	}
};

export default uiReducer;
