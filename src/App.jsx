import HeroSection from "./pages/HeroSection";
import FeaturedSection from "./pages/FeaturedSection";
import CollectionsSection from "./pages/CollectionsSection";
import AboutSection from "./pages/AboutSection";

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
