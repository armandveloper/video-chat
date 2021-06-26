import { css } from 'styled-components';

export const tooltipStyle = css`
	[data-tooltip] {
		position: relative;
	}
	[data-tooltip]::before {
		background-color: #000;
		border-radius: 2px;
		color: var(--color-text);
		font-size: 1.2rem;
		display: inline-block;
		padding: 0.5rem;
		white-space: nowrap;
		position: absolute;
		z-index: 10000;
	}
	[data-tooltip]:hover::before {
		content: attr(data-tooltip);
	}
	[data-tooltip][data-tooltip-placement*='center']:hover::before {
		left: 50%;
		transform: translate3d(-50%, 0, 0);
	}
	[data-tooltip][data-tooltip-placement*='top']:hover::before {
		bottom: 100%;
	}
	[data-tooltip][data-tooltip-placement*='bottom']:hover::before {
		top: 100%;
	}
	[data-tooltip][data-tooltip-placement*='right']:hover::before {
		right: 0;
	}
`;
