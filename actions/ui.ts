import * as types from '@/types/index';

export interface ToggleSidebarAction {
	type: string;
}

export const toggleChat = (): ToggleSidebarAction => ({
	type: types.UI_TOGGLE_CHAT,
});

export const toggleMembers = (): ToggleSidebarAction => ({
	type: types.UI_TOGGLE_MEMBERS,
});

export const toggleInfo = (): ToggleSidebarAction => ({
	type: types.UI_TOGGLE_INFO,
});

export const closeChat = (): ToggleSidebarAction => ({
	type: types.UI_CLOSE_CHAT,
});

export const closeMembers = (): ToggleSidebarAction => ({
	type: types.UI_CLOSE_MEMBERS,
});

export const closeInfo = (): ToggleSidebarAction => ({
	type: types.UI_CLOSE_INFO,
});
