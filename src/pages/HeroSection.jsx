import TypingAnimation from "../components/TypingAnimation";

const TYPING_WORDS = ["EXPERIENCES", "STORIES", "IMPRESSIONS", "SOLUTIONS"];

function HeroSection() {
    const scrollToFeatured = () => {
        const el = document.querySelector('[data-section="featured"]');
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div
            className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: "#f5f2eb", color: "#2a2a2a" }}
        >
            <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center relative">
                {/* Top label */}
                <div className="tracking-widest text-xs md:text-sm uppercase mb-6 opacity-80">
                    [ portfolio ]
                </div>

                {/* Name + underline block */}
                <div className="space-y-6">
                    <div>
                        <h1 className="mb-3 text-7xl md:text-8xl lg:text-[7.5rem] leading-none">
                            <span className="mb-3 text-4xl md:text-5xl lg:text-[4rem] font-light tracking-tighter">
                                I&apos;M{" "}
                            </span>
                            <span className="font-extrabold tracking-tight">
                                OZZY DOMARKAS
                            </span>
                        </h1>

                        {/* Memphis underline */}
                        <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                            <div
                                className="h-1 w-24"
                                style={{ backgroundColor: "#2a2a2a" }}
                            />
                            <div
                                className="h-1 w-6 rotate-45"
                                style={{ backgroundColor: "#2a2a2a" }}
                            />
                            <div
                                className="h-1 w-24"
                                style={{ backgroundColor: "#2a2a2a" }}
                            />
                        </div>

                        <p className="mt-6 text-xl md:text-2xl lg:text-3xl tracking-widest uppercase">
                            A Multi‑Disciplinary Designer
                        </p>
                    </div>

                    {/* Typing */}
                    <div className="pt-10">
                        <div className="text-2xl md:text-3xl lg:text-4xl">
                            <TypingAnimation
                                staticPrefix="> I CREATE "
                                textArray={TYPING_WORDS}
                                speed={100}
                                pauseDuration={2000}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Subtle up/down animation keyframes */}
            <style>{`
                @keyframes arrow-float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                    100% { transform: translateY(0); }
                }
            `}</style>

            {/* Down arrow (solid, no shaft) with subtle float */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div
                    style={{
                        animation: "arrow-float 3s ease-in-out infinite",
                    }}
                    className="will-change-transform"
                >
                    <button
                        onClick={scrollToFeatured}
                        aria-label="Scroll to featured projects"
                        className="w-8 h-8 focus:outline-none hover:-translate-y-1 transition-transform duration-200"
                        style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full"
                            role="img"
                            aria-hidden="true"
                        >
                            {/* Solid triangle pointing down */}
                            <path d="M12 18L3 6h18L12 18z" fill="#2a2a2a" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
