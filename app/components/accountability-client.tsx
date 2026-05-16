'use client';

import dynamic from 'next/dynamic';

const AccountabilityPlaceholder = dynamic(
	() => import('./accountability-placeholder'),
	{
		ssr: false,
	},
);

const AccountabilityClient = () => {
	return <AccountabilityPlaceholder />;
};

export default AccountabilityClient;
