import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import { API_URL } from 'config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		if (!req.headers.cookie) {
			res.status(403).json({ msg: 'Not Authorized' });
			return;
		}
		const { token } = cookie.parse(req.headers.cookie);

		const apiRes = await fetch(`${API_URL}/auth/google`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await apiRes.json();

		if (!data.success) {
			res.status(403).json({ success: false, msg: 'User forbidden' });
			return;
		}

		res.status(200).json({
			success: true,
			user: data.user,
			msg: 'User logged in',
		});

		return;
	}

	res.setHeader('Allow', ['GET']);
	res.status(405).json({ msg: `Method ${req.method} not allowed` });
};

export default handler;
