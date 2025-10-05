import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import CollectionsSection from "./components/CollectionsSection";
import AboutSection from "./components/AboutSection";

function App() {
    return (
        <div className="bg-white text-black">
            <HeroSection />
            <FeaturedSection />
            <CollectionsSection />
            <AboutSection />
        </div>
    );
}

export default App;
