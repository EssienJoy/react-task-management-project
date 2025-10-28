import { Link as RouterLink } from "react-router-dom";

export default function Link({
	to,
	children,
	className = "",
	textColor = "text-primary",
	bgColor = "bg-accent",
}) {
	return (
		<RouterLink
			to={to}
			className={` px-6 py-2 rounded-lg ${textColor} ${bgColor} font-bold ${className}`}>
			{children}
		</RouterLink>
	);
}
