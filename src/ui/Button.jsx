function Button({
	onClick,
	className = "",
	children,
	textColor = "text-primary",
	bgColor = "bg-accent",
}) {
	return (
		<button
			className={` px-6 py-2 rounded-lg ${textColor} ${bgColor} font-bold ${className}`}
			onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
