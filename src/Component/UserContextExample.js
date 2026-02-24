// ...existing code... GLOBAL SETTINGS
import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const UserContext = createContext();

// 2. Provider component to wrap your app
//colour, language, role, auth, theme, name
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com', role: 'admin', color: 'blue', language: 'English', auth: true, theme: 'light' });
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
			// children represent all nested components that can access this context

		</UserContext.Provider>
	);
};

// 3. Consumer component to use context data
export const UserProfile = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px', margin: '2rem auto' }}>
			<h2>User Profile</h2>
			<p><strong>Name:</strong> {user.name}</p>
			<p><strong>Email:</strong> {user.email}</p>
			<button onClick={() => setUser({ name: 'Jane Smith', email: 'jane@example.com' })} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
				Change User
			</button>
		</div>
	);
};
