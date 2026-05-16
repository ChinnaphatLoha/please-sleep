import Hero from './components/hero';
import CostCards from './components/cost-cards';
import DeveloperSection from './components/developer-section';
import ScienceCards from './components/science-cards';
import AccountabilityClient from './components/accountability-client';
import Footer from './components/footer';

const Home = () => {
	return (
		<div className='min-h-screen bg-black font-sans'>
			<main>
				<Hero />
				<CostCards />
				<DeveloperSection />
				<ScienceCards />
				<AccountabilityClient />
				<Footer />
			</main>
		</div>
	);
};

export default Home;
