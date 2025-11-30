import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Articles from '@/components/Articles';

export default function Home() {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<Header />
				<main className="max-w-6xl mx-auto px-6 py-12 w-full">
					<Hero />
					<Stats />
					<About />
					<Services />
					<Experience />
					<Skills />
					<Projects />
					<Testimonials />
					<Articles />
					<FAQ />
					<CTA />
					<Contact />
				</main>
				<Footer />
			</div>
		</>
	);
}
