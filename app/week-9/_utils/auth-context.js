'use client';

import { useContext, createContext, useState, useEffect } from 'react';
import {
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	GithubAuthProvider,
} from 'firebase/auth';
import { auth } from './firebase';

const AuthContext = createContext();

/**
 * This behaves like a component that
 * can be used to wrap OTHER components.
 *
 * It's a context.
 */
export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	/**
	 * gitHubSignin and firebaseSignOut
	 *
	 * are just functions that are then MADE ACCESSIBLE
	 * to EVERY COMPONENT that is wrapped by the AUTH CONTEXT provider
	 */
	function gitHubSignIn() {
		const provider = new GithubAuthProvider();
		return signInWithPopup(auth, provider);
	}

	function firebaseSignOut() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
			{/* Children is a special prop that stands in for every component that 
            is wrapped by the user created context */}
			{children}
		</AuthContext.Provider>
	);
}

export function useUserAuth() {
	return useContext(AuthContext);
}
