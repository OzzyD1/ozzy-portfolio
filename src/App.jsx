import HeroSection from "./pages/HeroSection";
import FeaturedSection from "./pages/FeaturedSection";
import CollectionsSection from "./pages/CollectionsSection";
import AboutSection from "./pages/AboutSection";

function App() {
    return (
        <div style={{ backgroundColor: "#f5f2eb", color: "#2a2a2a" }}>
            <HeroSection />
            <FeaturedSection />
            <CollectionsSection />
            <AboutSection />
        </div>
    );
}

export default App;
