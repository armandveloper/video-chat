import * as types from '@/types/index';
import { Action } from '@/reducers/uiReducer';

export const toggleChat = (): Action => ({
	type: types.UI_TOGGLE_CHAT,
});

export const toggleMembers = (): Action => ({
	type: types.UI_TOGGLE_MEMBERS,
});

export const toggleInfo = (): Action => ({
	type: types.UI_TOGGLE_INFO,
});

export const closeChat = (): Action => ({
	type: types.UI_CLOSE_CHAT,
});

export const closeMembers = (): Action => ({
	type: types.UI_CLOSE_MEMBERS,
});

export const closeInfo = (): Action => ({
	type: types.UI_CLOSE_INFO,
});

export const openSnackbar = (message: string): Action => ({
	type: types.UI_OPEN_SNACKBAR,
	payload: message,
});

export const closeSnackbar = (): Action => ({
	type: types.UI_CLOSE_SNACKBAR,
});
