import * as React from 'react';
import { UseGoogleLoginProps, useGoogleLogout } from 'react-google-login';
import { CLIENT_ID, FRONTEND_URL } from 'config';

interface IAuthContext {
	checking: boolean;
	error: string;
	user: IUser;
	// onSigninSuccess: (res: any) => void;
	// onSigninFailure: (res: any) => void;
	// verifyToken: (idToken: string) => void;
	googleLoginProps: UseGoogleLoginProps;
	signOut: () => void;
}

interface IUser {
	uid: string;
	email: string;
	displayName: string;
	picture: string;
}

export const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [checking, setChecking] = React.useState(true);
	const [user, setUser] = React.useState<IUser>(null!);
	const [error, setError] = React.useState<string>(null!);

	React.useEffect(() => {
		checkUserLoggedIn();
	}, []);

	const checkUserLoggedIn = async () => {
		const res = await fetch(`${FRONTEND_URL}/api/auth/user`);
		const data = await res.json();

		if (!res.ok) {
			setUser(null!);
			setChecking(false);
			return;
		}
		setUser(data.user);
		setChecking(false);
	};

	const verifyToken = async (idToken: string) => {
		try {
			const res = await fetch(`${FRONTEND_URL}/api/auth/signin`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ idToken }),
			});
			const data = await res.json();

			if (!data.success) {
				setError(data.msg);
			}

			setUser(data.user);
		} catch (err) {
			console.log(err);
		}
	};

	const onSigninSuccess = (res: any) => {
		verifyToken(res.tokenId);
	};
	const onSigninFailure = (res: any) => {
		setError(res.error);
		console.log('Login failed: res:', res);
	};

	const googleLoginProps = {
		onSuccess: onSigninSuccess,
		onFailure: onSigninFailure,
		clientId: CLIENT_ID,
		isSignedIn: false,
		accessType: 'offline',
	};

	const onLogoutSuccess = async () => {
		try {
			const res = await fetch(`${FRONTEND_URL}/api/auth/signout`, {
				method: 'POST',
			});

			if (!res.ok) {
				setError(
					'Could not log out due to an unexpected error. Please try again later'
				);
				return;
			}

			const data = await res.json();

			if (!data.success) {
				setError(data.msg);
			}

			setUser(null!);
			setError(null!);
		} catch (err) {
			console.log(err);
		}
	};

	const onLogoutFailure = () => {
		console.log('Log out failure');
	};

	const { signOut } = useGoogleLogout({
		clientId: CLIENT_ID,
		onLogoutSuccess,
		onFailure: onLogoutFailure,
	});

	return (
		<AuthContext.Provider
			value={{
				checking,
				error,
				user,
				googleLoginProps,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
