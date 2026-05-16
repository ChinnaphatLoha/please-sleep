'use client';

import { useEffect, useState } from 'react';

const Clock = () => {
	const [time, setTime] = useState(() => new Date());

	useEffect(() => {
		const id = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(id);
	}, []);

	const label = time.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});

	return (
		<div
			className='text-sm text-zinc-400'
			role='status'
			aria-live='polite'
		>
			<div className='text-xs uppercase tracking-widest text-zinc-500'>
				Current time
			</div>
			<div className='mt-1 text-2xl font-mono text-zinc-50'>{label}</div>
		</div>
	);
};

export default Clock;
