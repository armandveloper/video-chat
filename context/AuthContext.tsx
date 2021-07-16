import * as React from 'react';
import { UseGoogleLoginProps } from 'react-google-login';

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

	const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
	const baseURL = process.env.NEXT_PUBLIC_API_URL;

	const verifyToken = async (idToken: string) => {
		try {
			const res = await fetch(`${baseURL}auth/google`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ idToken }),
			});
			const data = await res.json();
			console.log('data:');
			console.log(data);
			setUser(data.user);
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
		clientId,
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
