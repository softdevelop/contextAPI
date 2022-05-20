import { createContext } from "react";
/*
const users = [
	{ username: "Username 1", email: "email1@gmail.com" },
	{ username: "Username 2", email: "email2@gmail.com" }
]
*/
export const users = {
	user1: {username: "Username 1", email: "email1@gmail.com" },
	user2: {username: "Username 2", email: "email2@gmail.com" },
}

export const UserContext = createContext(
	users.user1		// Default value
);
