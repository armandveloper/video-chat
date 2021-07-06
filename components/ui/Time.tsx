import useTime from '@/hooks/useTime';

function Time() {
	const time = useTime();
	return <span>{time}</span>;
}

export default Time;
