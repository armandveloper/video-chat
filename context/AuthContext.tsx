import * as React from 'react';
import {
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
	useGoogleLogin,
	useGoogleLogout,
} from 'react-google-login';
import { CLIENT_ID, FRONTEND_URL } from 'config';

interface IAuthContext {
	checking: boolean;
	error: string;
	user: IUser;
	signIn: () => void;
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

	const onSigninSuccess = (
		res: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		verifyToken((res as GoogleLoginResponse).tokenId);
	};
	const onSigninFailure = (err: any) => {
		setError(err.error);
		console.log('Login failed: res:', err);
	};

	const { signIn } = useGoogleLogin({
		onSuccess: onSigninSuccess,
		onFailure: onSigninFailure,
		clientId: CLIENT_ID,
		isSignedIn: false,
		accessType: 'online',
	});

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
		console.log(
			'Could not log out due to an unexpected error. Please try again later'
		);
		setError(
			'Could not log out due to an unexpected error. Please try again later'
		);
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
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
