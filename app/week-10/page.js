'use client';

import { redirect, useRouter } from 'next/navigation';

// Import the useUserAuth hook
import { useUserAuth } from './_utils/auth-context';
import { useEffect } from 'react';

export default function Page() {
	// Use the useUserAuth hook to get the user object and the login and logout functions
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	const router = useRouter();

	useEffect(() => {
		if (user) {
			// console.log(user);
			router.push('/week-10/shopping-list');
		}
	});

	async function handleSigninClick(e) {
		// Sign in to Firebase with GitHub authentication
		try {
			await gitHubSignIn();
			router.push('/week-10/shopping-list');
			// redirect('/week-10/shopping-list');
		} catch (e) {
			// {"code":"auth/popup-closed-by-user","customData":{},"name":"FirebaseError"}
			console.log(JSON.stringify(e));
		}
	}

	// Display some of the user's information

	// <p>
	// 		Welcome, {user.displayName} ({user.email})
	// 	</p>
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col gap-2 items-center justify-center">
				<button
					onClick={handleSigninClick}
					className="bg-sky-700 p-1 rounded"
				>
					LOGIN IN TO GITHUB
				</button>
			</div>
		</div>
	);
}
