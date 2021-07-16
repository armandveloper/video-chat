import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import { API_URL } from 'config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { idToken } = req.body;

		const apiRes = await fetch(`${API_URL}/auth/google`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ idToken }),
		});

		const data = await apiRes.json();

		console.log('sign in en route:', data);

		if (!data.success) {
			res.status(401).json({
				message: data.msg,
			});
			return;
		}

		// Set cookie
		res.setHeader(
			'Set-Cookie',
			cookie.serialize('token', data.token, {
				httpOnly: true,
				secure: process.env.NODE_ENV !== 'development',
				maxAge: 60 * 60 * 24 * 7, // 1 week
				sameSite: 'strict',
				path: '/',
			})
		);

		res.status(200).json(data.user);
		return;
	}

	res.setHeader('Allow', ['POST']);
	res.status(405).json({ message: `Method ${req.method} not allowed` });
};

export default handler;
