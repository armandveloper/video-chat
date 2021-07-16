import * as React from 'react';
import { UseGoogleLoginProps } from 'react-google-login';
import { API_URL, CLIENT_ID, FRONTEND_URL } from 'config';

interface IAuthContext {
	user: IUser;
	// onSigninSuccess: (res: any) => void;
	// onSigninFailure: (res: any) => void;
	// verifyToken: (idToken: string) => void;
	googleLoginProps: UseGoogleLoginProps;
}

interface IUser {
	uid: string;
	email: string;
	displayName: string;
	picture: string;
}

export const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<IUser>(null!);

	const verifyToken = async (idToken: string) => {
		console.log('verificando token');
		console.log(FRONTEND_URL);
		try {
			const res = await fetch(`${FRONTEND_URL}/api/auth/signin`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ idToken }),
			});
			console.log(res);
			const data = await res.json();
			console.log(data);

			console.log('data:');
			console.log(data);
			setUser(data);
		} catch (err) {
			console.log(err);
		}
	};

	const onSigninSuccess = (res: any) => {
		console.log('Login Success: currentUser:', res.profileObj);
		verifyToken(res.tokenId);
	};
	const onSigninFailure = (res: any) => {
		console.log('Login failed: res:', res);
	};

	const googleLoginProps = {
		onSuccess: onSigninSuccess,
		onFailure: onSigninFailure,
		clientId: CLIENT_ID,
		isSignedIn: true,
		accessType: 'offline',
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				googleLoginProps,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
