function Input({ type, placeholder, value, defaultValue, ...rest }) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			defaultValue={defaultValue}
			{...rest}
			className='w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400'
		/>
	);
}

export default Input;
