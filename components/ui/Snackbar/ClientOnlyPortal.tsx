import * as React from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children?: React.ReactNode;
	selector: string;
}

export default function ClientOnlyPortal({ children, selector }: Props) {
	const ref = React.useRef<HTMLDivElement>(null!);
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		ref.current = window.document.getElementById(
			selector
		) as HTMLDivElement;
		setMounted(true);
	}, [selector]);

	return mounted ? createPortal(children, ref.current) : null;
}
