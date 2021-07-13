export const copy = (text: string): Promise<void> => {
	if (window.navigator.clipboard !== undefined) {
		return window.navigator.clipboard.writeText(text);
	}
	return new Promise((res) => {
		const el = window.document.createElement('textarea');
		el.value = text;
		window.document.body.appendChild(el);
		el.select();
		window.document.execCommand('copy');
		window.document.body.removeChild(el);
		res();
	});
};
