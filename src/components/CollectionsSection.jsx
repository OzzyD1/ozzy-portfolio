import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const COLLECTIONS = [
    {
        id: 1,
        contentId: "motion",
        title: "MOTION",
        gridClass: "col-span-1",
    },
    {
        id: 2,
        contentId: "web",
        title: "WEB",
        gridClass: "col-span-1",
    },
    {
        id: 3,
        contentId: "designs",
        title: "DESIGNS",
        gridClass: "col-span-1",
    },
    {
        id: 4,
        contentId: "audio",
        title: "AUDIO",
        gridClass: "col-span-1",
    },
];

const SKILLS = [
    {
        category: "VISUAL://",
        skills: "After Effects, Premiere Pro, Photoshop, Illustrator, InDesign, Figma",
    },
    {
        category: "AUDIO://",
        skills: "Ableton Live, Audition, Mixing",
    },
    {
        category: "CODE://",
        skills: "React, JavaScript, Node.js",
    },
];

function CollectionsSection() {
    const { isOpen, content, type, openCollection, close } = useModal();

    const handleCollectionClick = (contentId) => {
        openCollection(contentId);
    };

    return (
        <>
            <section className="min-h-screen bg-white text-black px-6 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Collections Section */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-wider">
                            {">"} COLLECTIONS
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {COLLECTIONS.map((item) => (
                                <div key={item.id} className={item.gridClass}>
                                    <CollectionCard
                                        item={item}
                                        onClick={() =>
                                            handleCollectionClick(
                                                item.contentId
                                            )
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider">
                            {">"} SKILLS
                        </h2>

                        <div className="space-y-3">
                            {SKILLS.map((skill, index) => (
                                <SkillItem key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                content={content}
                isOpen={isOpen}
                onClose={close}
                type={type}
            />
        </>
    );
}

function CollectionCard({ item, onClick }) {
    const handleClick = () => {
        if (item.contentId) {
            onClick();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && item.contentId) {
            onClick();
        }
    };

    return (
        <div
            className={`
                border-4 border-black bg-white
                aspect-square flex items-center justify-center
                transition-all duration-200 group
                hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                relative
                ${
                    item.contentId
                        ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        : "cursor-default opacity-75"
                }
            `}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={item.contentId ? 0 : -1}
            role={item.contentId ? "button" : undefined}
            aria-label={
                item.contentId ? `View ${item.title} collection` : undefined
            }
        >
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-black -z-10" />

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center tracking-wider p-4">
                {item.title}
            </h3>
        </div>
    );
}

function SkillItem({ skill }) {
    return (
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
            <div className="md:w-32 flex-shrink-0">
                <h3 className="font-bold text-lg tracking-wider">
                    {skill.category}
                </h3>
            </div>
            <div className="flex-1">
                <p className="text-base tracking-wide">{skill.skills}</p>
            </div>
        </div>
    );
}

export default CollectionsSection;
