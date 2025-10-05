import TypingAnimation from "./TypingAnimation";

const TYPING_WORDS = ["EXPERIENCES", "STORIES", "IMPRESSIONS", "SOLUTIONS"];

function HeroSection() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-8xl md:text-9xl lg:text-[8rem] mb-4">
                            <span className="font-light tracking-tighter">
                                I'M{" "}
                            </span>
                            <span className="font-bold tracking-wider">
                                OZZY DOMARKAS
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl lg:text-4xl tracking-tighter">
                            VISUAL | AUDIO | CODE
                        </p>
                    </div>

                    <div className="pt-12">
                        <div className="text-3xl md:text-4xl lg:text-5xl">
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
        </div>
    );
}

export default HeroSection;
