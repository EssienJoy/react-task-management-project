import Hero from "../ui/Hero";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
			</main>
			<Footer />
		</>
	);
}

export default Home;
