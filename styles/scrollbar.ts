import { css } from 'styled-components';

export const scrollbarStyle = css`
	scrollbar-width: thin;
	scrollbar-color: var(--color-primary) var(--color-bg-3);
	::-webkit-scrollbar {
		width: 0.4rem;
	}
	::-webkit-scrollbar-track {
		background-color: var(--color-bg-3);
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--color-primary);
		border-radius: 1rem;
	}
`;
