'use client';

import { useEffect, useMemo, useState } from 'react';
import { nextOccurrenceOfTime } from '../../lib/time';

const pad = (n: number) => {
	return n.toString().padStart(2, '0');
}

const Countdown = () => {
	const [target, setTarget] = useState<string | null>(null);
	const [now, setNow] = useState<Date>(() => new Date());
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		const saved =
			typeof window !== 'undefined' && localStorage.getItem('targetBedtime');
		if (saved) setTarget(saved);
	}, []);

	useEffect(() => {
		const id = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(id);
	}, []);

	const timeLeft = useMemo(() => {
		if (!target) return null;
		try {
			const next = nextOccurrenceOfTime(target, now);
			const ms = next.getTime() - now.getTime();
			if (ms <= 0) return '00:00:00';
			const s = Math.floor(ms / 1000);
			const h = Math.floor(s / 3600);
			const m = Math.floor((s % 3600) / 60);
			const sec = s % 60;
			return `${pad(h)}:${pad(m)}:${pad(sec)}`;
		} catch (e) {
			return null;
		}
	}, [target, now]);

	const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const t = String(fd.get('bedtime') || '');
		if (!t) return;
		localStorage.setItem('targetBedtime', t);
		setTarget(t);
		setEditing(false);
	};

	return (
		<div className='mt-4'>
			{!target || editing ? (
				<form
					onSubmit={handleSave}
					className='flex flex-col sm:flex-row items-center gap-3'
				>
					<label className='sr-only'>Target bedtime</label>
					<input
						name='bedtime'
						type='time'
						defaultValue='23:00'
						className='w-full sm:w-auto rounded-md bg-black/20 px-3 py-2 text-sm text-zinc-50'
						aria-label='Set target bedtime'
					/>
					<button
						type='submit'
						className='w-full sm:w-auto rounded-full bg-zinc-50 px-4 py-2 text-sm font-semibold text-black'
					>
						Save
					</button>
					{target ? (
						<button
							type='button'
							onClick={() => setEditing(false)}
							className='w-full sm:w-auto text-sm text-zinc-400'
						>
							Cancel
						</button>
					) : null}
				</form>
			) : (
				<div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
					<div>
						<div className='text-xs uppercase tracking-widest text-zinc-500'>
							Target bedtime
						</div>
						<div className='mt-1 text-lg font-medium text-zinc-50'>
							{target}
						</div>
					</div>
					<div>
						<div className='text-xs uppercase tracking-widest text-zinc-500'>
							Time remaining
						</div>
						<div className='mt-1 text-lg font-mono text-zinc-50'>
							{timeLeft ?? '—'}
						</div>
					</div>
					<button
						className='mt-2 sm:mt-0 text-sm text-zinc-400'
						onClick={() => setEditing(true)}
					>
						Change
					</button>
				</div>
			)}
		</div>
	);
};

export default Countdown;
