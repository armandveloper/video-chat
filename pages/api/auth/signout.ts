import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import { API_URL } from 'config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		// Destruye cookie
		res.setHeader(
			'Set-Cookie',
			cookie.serialize('token', '', {
				httpOnly: true,
				secure: process.env.NODE_ENV !== 'development',
				expires: new Date(0),
				sameSite: 'strict',
				path: '/',
			})
		);

		res.status(200).json({ success: true, msg: 'The session was closed' });
		return;
	}

	res.setHeader('Allow', ['POST']);
	res.status(405).json({ msg: `Method ${req.method} not allowed` });
};

export default handler;
