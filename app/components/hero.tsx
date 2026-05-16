'use client';

import { useState } from 'react';
import Clock from './clock';
import Countdown from './countdown';
import Button from './button';
import RotatingStatements from './rotating-statements';
import ConsequencePanel from './consequence-panel';

const Hero = () => {
	const [showOverlay, setShowOverlay] = useState(false);
	const [message, setMessage] = useState<string | null>(null);

	const handleIgnore = () => {
		try {
			const raw = localStorage.getItem('ignoreCount') || '0';
			const n = Number(raw) || 0;
			localStorage.setItem('ignoreCount', String(n + 1));
			localStorage.setItem('lastIgnoredAt', new Date().toISOString());
		} catch (e) {
			// ignore
		}
		setMessage('Understood. You’re borrowing from tomorrow again.');
		setTimeout(() => setMessage(null), 4500);
	};

	return (
		<header className='w-full'>
			<div className='mx-auto max-w-3xl px-6 py-12'>
				<div className='flex flex-col sm:flex-row items-start gap-8'>
					<div className='flex-1 mb-6 sm:mb-0'>
						<div className='text-xs font-semibold uppercase tracking-wider text-red-400'>
							YOU ARE TRADING TOMORROW RIGHT NOW
						</div>
						<h1 className='mt-4 text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl'>
							Tomorrow’s version of you is being built tonight.
						</h1>
						<p className='mt-4 max-w-prose text-lg text-zinc-300'>
							Sleep is not lost time. It is the biological process that
							determines whether tomorrow you thinks clearly, learns quickly,
							regulates emotions, solves problems, and performs at full
							capacity.
						</p>

						<div className='mt-6 flex flex-col sm:flex-row flex-wrap gap-3'>
							<Button
								onClick={() => setShowOverlay(true)}
								aria-label='Go to sleep now'
							>
								Go To Sleep
							</Button>

							<Button
								variant='outline'
								onClick={handleIgnore}
								aria-label='Ignore tonight'
							>
								Ignore Tonight
							</Button>
							{message ? (
								<div className='mt-2 sm:ml-2 text-sm text-zinc-400'>
									{message}
								</div>
							) : null}
						</div>

						<div className='mt-8'>
							<RotatingStatements />
						</div>
					</div>

					<aside className='w-full sm:w-72 shrink-0'>
						<div className='rounded-lg bg-black/40 p-4'>
							<Clock />
							<Countdown />
							<div className='mt-4'>
								<ConsequencePanel />
							</div>
						</div>
					</aside>
				</div>
			</div>

			{showOverlay ? (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'>
					<div className='mx-4 max-w-xl rounded-lg bg-zinc-900 p-8 text-center'>
						<h2 className='text-2xl font-semibold text-zinc-50'>Sleep now</h2>
						<p className='mt-4 text-zinc-300'>
							Turn off the screen. Give tomorrow a fair chance.
						</p>
						<div className='mt-6 flex flex-col sm:flex-row justify-center gap-3'>
							<button
								className='rounded-full bg-zinc-50 px-6 py-2 text-sm font-semibold text-black'
								onClick={() => {
									setShowOverlay(false);
									try {
										localStorage.setItem('sleptNow', new Date().toISOString());
									} catch (e) {}
								}}
							>
								I will sleep
							</button>
							<button
								className='rounded-full border border-zinc-700 px-6 py-2 text-sm text-zinc-200'
								onClick={() => setShowOverlay(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			) : null}
		</header>
	);
};

export default Hero;
