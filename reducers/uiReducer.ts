import { ToggleSidebarAction } from '@/actions/ui';
import * as types from '@/types/index';

export interface UiState {
	isChatVisible: boolean;
	isMembersVisible: boolean;
}

type Action = ToggleSidebarAction;

const uiReducer = (state: UiState, action: Action): UiState => {
	switch (action.type) {
		case types.UI_TOGGLE_CHAT:
			return {
				...state,
				isChatVisible: !state.isChatVisible,
				isMembersVisible: false,
			};

		case types.UI_TOGGLE_MEMBERS:
			return {
				...state,
				isMembersVisible: !state.isMembersVisible,
				isChatVisible: false,
			};

		default:
			return state;
	}
};

export default uiReducer;
