import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Signup from "./pages/Signup";
import AppLayOut from "./ui/AppLayOut";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./ui/Tickets";
import ProtectedRoute from "./ui/ProtectedRoute";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { AuthProvider } from "./contexts/FakeAuthContext";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,
		},
	},
});

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<QueryClientProvider client={queryClient}>
					<Routes>
						<Route
							element={
								<ProtectedRoute>
									<AppLayOut />
								</ProtectedRoute>
							}>
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/tickets' element={<Tickets />} />
						</Route>

						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
					<Toaster
						position='top-center'
						gutter={12}
						containerStyle={{ margin: "8px" }}
						toastOptions={{
							success: { duration: 5000 },
							error: { duration: 5000 },
							style: {
								fontSize: "16px",
								maxWidth: "500px",
								padding: "16px 24px",
								backgroundColor: "var(--color-primary)",
								color: "var(--color-accent)",
							},
						}}
					/>
				</QueryClientProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
