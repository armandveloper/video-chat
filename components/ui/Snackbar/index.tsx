import * as React from 'react';
import styled from 'styled-components';
import ClientOnlyPortal from './ClientOnlyPortal';
import { slideInDownSnackbar, slideOutDownSnackbar } from '@/styles/animations';

interface SnackbarProps {
	autoHideDuration?: number;
	message: string;
	open: boolean;
	onDismiss: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledSnackbar = styled.div<{ open: boolean }>`
	background-color: var(--color-bg-3);
	border-radius: 0.4rem;
	color: var(--color-text);
	font-size: 1.4rem;
	letter-spacing: 0.015rem;
	padding: 1rem 3.5rem 1rem 1rem;
	position: fixed;
	bottom: calc(var(--bottom-bar-height) + 1rem);
	left: 2rem;
	animation: ${({ open }) =>
			open ? slideInDownSnackbar : slideOutDownSnackbar}
		0.15s ease-in forwards;
`;

function Snackbar({
	autoHideDuration = 4000,
	message,
	open,
	onDismiss,
}: SnackbarProps) {
	const [shouldRender, setRender] = React.useState(open);

	React.useEffect(() => {
		if (open) setRender(true);
	}, [open]);

	React.useEffect(() => {
		if (autoHideDuration) {
			const timeout = window.setTimeout(onDismiss, autoHideDuration);
			return () => window.clearTimeout(timeout);
		}
	}, [autoHideDuration]);

	const handleAnimationEnd = () => {
		if (!open) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<ClientOnlyPortal selector="snackbar-root">
			<StyledSnackbar onAnimationEnd={handleAnimationEnd} open={open}>
				{message}
			</StyledSnackbar>
		</ClientOnlyPortal>
	);
}

export default Snackbar;
