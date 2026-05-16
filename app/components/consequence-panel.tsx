'use client';

import { useEffect, useState } from 'react';
import {
	computeSleepDuration,
	formatDurationHours,
	classifyPerformance,
} from '../../lib/time';

const ConsequencePanel = () => {
	const [target, setTarget] = useState<string | null>(null);
	const [hours, setHours] = useState<number | null>(null);

	useEffect(() => {
		const saved =
			typeof window !== 'undefined' && localStorage.getItem('targetBedtime');
		if (saved) setTarget(saved);
	}, []);

	useEffect(() => {
		if (!target) return;
		try {
			const hrs = computeSleepDuration(target, '07:00');
			setHours(hrs);
		} catch (e) {
			setHours(null);
		}
	}, [target]);

	if (!target) {
		return (
			<div className='text-sm text-zinc-400'>
				Set a target bedtime to see tomorrow's forecast.
			</div>
		);
	}

	const performance = hours != null ? classifyPerformance(hours) : '—';
	const friendly =
		hours == null
			? '—'
			: hours < 5
				? 'Tomorrow is not the same version of you.'
				: hours < 6
					? 'You are voluntarily making tomorrow harder.'
					: hours >= 7.5
						? 'You gave tomorrow a fair chance.'
						: 'Tomorrow will be modestly reduced.';

	return (
		<div className='text-sm text-zinc-200'>
			<div className='text-xs uppercase tracking-widest text-zinc-500'>
				Estimated sleep
			</div>
			<div className='mt-1 text-lg font-mono text-zinc-50'>
				{hours != null ? formatDurationHours(hours) : '—'}
			</div>
			<div className='mt-2 text-xs text-zinc-400'>
				Cognitive performance:{' '}
				<span className='font-medium text-zinc-100'>{performance}</span>
			</div>
			<div className='mt-2 text-sm text-zinc-300 italic'>{friendly}</div>
		</div>
	);
};

export default ConsequencePanel;
