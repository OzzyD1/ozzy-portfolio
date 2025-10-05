const SOCIAL_LINKS = [
    {
        id: 1,
        name: "CV",
        url: "public/assets/documents/CV.pdf",
    },
    {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ozzyd/",
    },
    {
        id: 3,
        name: "Github",
        url: "https://github.com/OzzyD1",
    },
];

function AboutSection() {
    return (
        <section className="min-h-screen bg-white text-black px-6 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-wider">
                    {">"} ABOUT ME
                </h2>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Bio */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-2">
                                Ozzy Domarkas
                            </h3>
                            <p className="text-lg italic text-gray-600 mb-2">
                                B.Sc (Hons) in Creative Computing
                            </p>
                            <p className="text-lg italic text-gray-600">
                                South East Technological University
                            </p>
                        </div>

                        <div className="space-y-4 text-base leading-relaxed">
                            <p>
                                I’m a{" "}
                                <strong>multidisciplinary creative</strong> who
                                works across visual, audio, and code but what
                                drives me most is emotion.
                            </p>

                            <p>
                                I build things that feel alive, from interactive
                                short films and motion design explainers to
                                music production and web experiences. Every
                                project is an attempt to capture a feeling, a
                                rhythm, or a moment.
                            </p>

                            <p>
                                Whether I’m shaping sound, crafting visuals, or
                                writing code, my goal is the same: to make
                                something that connects, not just functions —
                                something with clarity, impact, and a pulse.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                            {SOCIAL_LINKS.map((link) => (
                                <SocialLink key={link.id} link={link} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md">
                            <div className="aspect-[4/5] bg-gray-300 border-4 border-black relative">
                                <div className="absolute -bottom-2 -right-2 w-full h-full bg-black -z-10" />
                                {/* Placeholder for profile image */}
                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                                    [Profile Image]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </section>
    );
}

function SocialLink({ link }) {
    return (
        <a
            href={link.url}
            className="
                border-4 border-black bg-white
                px-4 py-3 text-center font-bold
                cursor-pointer transition-all duration-200
                hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                relative block
            "
        >
            <div className="absolute -bottom-1 -right-1 w-full h-full bg-black -z-10" />
            {link.name}
        </a>
    );
}

function Footer() {
    return (
        <footer className="pt-16 pb-8">
            <div className="space-y-2">
                <h4 className="text-lg font-bold">BUILT BY ME</h4>
                <p className="text-sm text-gray-600 tracking-wider">
                    TAILWIND | REACT | VITE
                </p>
            </div>
        </footer>
    );
}

export default AboutSection;
