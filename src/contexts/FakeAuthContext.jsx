import { createContext, useContext, useReducer } from "react";
import loginApi from "../auth/login";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = {
	isAuthenticated: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "login":
			return { ...state, isAuthenticated: true };
		case "logout":
			return { ...state, isAuthenticated: false };
		default:
			throw new Error("Unknown action");
	}
}

function AuthProvider({ children }) {
	const [{ isAuthenticated }, dispatch] = useReducer(reducer, initialState);

	const navigate = useNavigate();

	async function login({ email, password }) {
		if (password.length < 4) {
			toast.error("Password must be 4 didgit numbers or letters");
			return;
		}

		if (email.includes("@") && email.includes(".com")) {
			const data = await loginApi(email);
			const userData = data[0];

			if (!userData) {
				toast.error("User not found.");
				return;
			}

			if (userData?.password === password) {
				dispatch({ type: "login" });

				localStorage.setItem("userId", userData.userId);
				navigate("/dashboard");
				toast.success("Welcome Back ✅");
			} else {
				toast.error("Incorrect password.");
			}
		} else {
			toast.error("❌ Incorrect, email must include @ and .com");
		}
	}

	function logout() {
		dispatch({ type: "logout" });
		localStorage.removeItem("userId");
		navigate("/");
		toast.success("Logout Sucessful");
	}

	return (
		<AuthContext.Provider value={{ login, logout, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined)
		throw new Error("AuthContext was used outside AuthProvider");
	return context;
}

export { AuthProvider, useAuth };
