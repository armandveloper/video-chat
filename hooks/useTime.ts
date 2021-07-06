import * as React from 'react';

// Devuelve y maneja la hora actual
const useTime = (): string => {
	const formatTime = (): string => {
		const date = new Date(),
			hour = date.getHours(),
			minutes = date.getMinutes(),
			time = `${hour < 10 ? '0' + hour : hour}:${
				minutes < 10 ? '0' + minutes : minutes
			}`;
		return time;
	};

	const [time, setTime] = React.useState(formatTime());

	React.useEffect(() => {
		const interval = window.setInterval(() => setTime(formatTime), 1000);

		return () => window.clearInterval(interval);
	}, []);

	return time;
};

export default useTime;
