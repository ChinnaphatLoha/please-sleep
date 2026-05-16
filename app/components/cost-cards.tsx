const CostCards = () => {
	const cards = [
		{
			title: 'One complete sleep cycle lost.',
			body: 'Sleep happens in cycles. Cutting one cycle disproportionately hurts recovery, attention, and emotional regulation.',
		},
		{
			title: 'Slower coding and problem solving tomorrow.',
			body: 'Sleep restriction reduces working memory, cognitive flexibility, and debugging efficiency.',
		},
		{
			title: 'Reduced learning retention.',
			body: 'Without sufficient sleep, your brain stores information less effectively.',
		},
		{
			title: 'Higher emotional fatigue.',
			body: 'Poor sleep increases emotional reactivity and lowers resilience to stress.',
		},
	];

	return (
		<section
			aria-labelledby='costs'
			className='mx-auto max-w-3xl px-6 py-10'
		>
			<h2
				id='costs'
				className='text-lg font-semibold text-zinc-50'
			>
				What staying awake another 90 minutes costs you
			</h2>
			<div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2'>
				{cards.map((c) => (
					<div
						key={c.title}
						className='rounded-md border border-white/5 bg-black/20 p-4'
					>
						<h3 className='text-sm font-semibold text-zinc-100'>{c.title}</h3>
						<p className='mt-2 text-sm text-zinc-300'>{c.body}</p>
					</div>
				))}
			</div>
			<p className='mt-6 text-sm text-zinc-400 italic'>
				You are not gaining time. You are spending tomorrow in advance.
			</p>
		</section>
	);
};

export default CostCards;
