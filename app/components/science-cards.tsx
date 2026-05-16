const ScienceCards = () => {
	const cards = [
		{
			title: 'Brain Performance',
			body: 'Sleep deprivation reduces activity in the prefrontal cortex, affecting focus, decision-making, planning, and impulse control.',
		},
		{
			title: 'Emotional Regulation',
			body: 'Poor sleep increases amygdala reactivity, making frustration, anxiety, and emotional overwhelm more likely.',
		},
		{
			title: 'Memory',
			body: 'Sleep strengthens neural pathways and consolidates learning.',
		},
		{
			title: 'Metabolism',
			body: 'Insufficient sleep affects hunger hormones and increases fatigue and cravings.',
		},
		{
			title: 'Longevity',
			body: 'Irregular sleep schedules are associated with increased risks of cardiovascular disease and metabolic dysfunction.',
		},
	];

	return (
		<section
			aria-labelledby='science'
			className='mx-auto max-w-3xl px-6 py-10'
		>
			<h2
				id='science'
				className='text-lg font-semibold text-zinc-50'
			>
				This is measurable biology, not motivation.
			</h2>
			<div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2'>
				{cards.map((c) => (
					<article
						key={c.title}
						className='rounded-md border border-white/5 bg-black/20 p-4'
					>
						<h3 className='text-sm font-semibold text-zinc-100'>{c.title}</h3>
						<p className='mt-2 text-sm text-zinc-300'>{c.body}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default ScienceCards;
