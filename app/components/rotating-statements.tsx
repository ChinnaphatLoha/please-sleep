'use client';

import { useEffect, useState } from 'react';

const STATEMENTS = [
	'You are not tired because life is hard. Life feels harder because you are tired.',
	'One late night changes little. Hundreds become your personality.',
	'Potential disappears quietly.',
	'The frightening part of poor sleep is not exhaustion. It is forgetting what your best feels like.',
	'You are not losing time. You are losing sharpness.',
	'Your future self is waiting for you to stop sabotaging his brain.',
	'Survival mode eventually feels normal.',
	'You cannot out-discipline biological exhaustion.',
];

const RotatingStatements = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReduced) return;
		const id = setInterval(
			() => setIndex((i) => (i + 1) % STATEMENTS.length),
			7000,
		);
		return () => clearInterval(id);
	}, []);

	return (
		<div className='text-zinc-300'>
			<div className='rounded-md border border-white/5 bg-black/20 p-4'>
				<p className='text-sm leading-relaxed opacity-90 transition-opacity duration-500'>
					{STATEMENTS[index]}
				</p>
			</div>
		</div>
	);
};

export default RotatingStatements;
