import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<Header />
				<main className="max-w-5xl mx-auto px-6 py-12 w-full">
					<Hero />
					{/* <div className="h-[400] w-[400]">
						<h1 className=" text-brand-500">Hello world</h1>
						<button className="bg-brand-500 text-white p-4 rounded animate-float">
							Test Button
						</button>
					</div> */}
					<About />
					<Skills />
					<Projects />
					<Contact />
				</main>
				<Footer />
			</div>
		</>
	);
}
