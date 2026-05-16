import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'solid' | 'outline';
};

const Button = ({
	variant = 'solid',
	className = '',
	children,
	...props
}: Props) => {
	const base =
		'flex w-full sm:w-auto items-center justify-center rounded-full px-6 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
	const solid =
		'bg-zinc-50 text-black hover:brightness-95 dark:bg-zinc-50 dark:text-black/90';
	const outline = 'border border-zinc-700 text-zinc-50 hover:bg-white/2';

	return (
		<button
			{...props}
			className={`${base} ${variant === 'solid' ? solid : outline} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
