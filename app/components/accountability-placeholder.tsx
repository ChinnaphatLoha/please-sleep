const AccountabilityPlaceholder = () => {
	return (
		<section
			aria-labelledby='accountability'
			className='mx-auto max-w-3xl px-6 py-10'
		>
			<h2
				id='accountability'
				className='text-lg font-semibold text-zinc-50'
			>
				Your data (private to this device)
			</h2>
			<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3'>
				<div className='rounded-md bg-black/20 p-4'>
					<div className='text-xs text-zinc-500'>Average bedtime</div>
					<div className='mt-2 text-lg text-zinc-50'>—</div>
				</div>
				<div className='rounded-md bg-black/20 p-4'>
					<div className='text-xs text-zinc-500'>Sleep consistency</div>
					<div className='mt-2 text-lg text-zinc-50'>—</div>
				</div>
				<div className='rounded-md bg-black/20 p-4'>
					<div className='text-xs text-zinc-500'>Sleep debt</div>
					<div className='mt-2 text-lg text-zinc-50'>—</div>
				</div>
			</div>
			<p className='mt-4 text-sm text-zinc-400'>
				This data will remain on your device. Connect later to sync across
				devices.
			</p>
		</section>
	);
};

export default AccountabilityPlaceholder;
