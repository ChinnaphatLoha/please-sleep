const DeveloperSection = () => {
	return (
		<section
			aria-labelledby='dev'
			className='mx-auto max-w-3xl px-6 py-10'
		>
			<h2
				id='dev'
				className='text-lg font-semibold text-zinc-50'
			>
				What poor sleep does to developers
			</h2>
			<div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<article className='rounded-md border border-white/5 bg-black/20 p-4'>
					<h3 className='text-sm font-semibold text-zinc-100'>
						Reduced working memory
					</h3>
					<p className='mt-2 text-sm text-zinc-300'>
						Harder to hold multiple abstractions and dependencies in mind.
					</p>
				</article>
				<article className='rounded-md border border-white/5 bg-black/20 p-4'>
					<h3 className='text-sm font-semibold text-zinc-100'>More bugs</h3>
					<p className='mt-2 text-sm text-zinc-300'>
						Tired brains make more logical mistakes and overlook obvious errors.
					</p>
				</article>
				<article className='rounded-md border border-white/5 bg-black/20 p-4'>
					<h3 className='text-sm font-semibold text-zinc-100'>
						Slower learning
					</h3>
					<p className='mt-2 text-sm text-zinc-300'>
						New concepts become harder to encode into long-term memory.
					</p>
				</article>
				<article className='rounded-md border border-white/5 bg-black/20 p-4'>
					<h3 className='text-sm font-semibold text-zinc-100'>
						Lower debugging performance
					</h3>
					<p className='mt-2 text-sm text-zinc-300'>
						Mental flexibility decreases when sleep-deprived.
					</p>
				</article>
			</div>
			<p className='mt-6 text-sm text-zinc-400'>
				You are not lazy. Your brain is operating in degraded mode.
			</p>
		</section>
	);
};

export default DeveloperSection;
