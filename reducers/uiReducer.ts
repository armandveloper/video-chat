import { ToggleSidebarAction } from '@/actions/ui';
import * as types from '@/types/index';

export interface UiState {
	isChatVisible: boolean;
	isInfoVisible: boolean;
	isMembersVisible: boolean;
}

type Action = ToggleSidebarAction;

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

		default:
			return state;
	}
};

export default uiReducer;
