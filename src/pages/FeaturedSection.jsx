import { useModal } from "../hooks/useModal";
import Modal from "../components/Modal";

const PROJECTS = [
    {
        id: 1,
        contentId: "synapse",
        title: "SYNAPSE",
        description: "INTERACTIVE SHORT STORY | FOURTH YEAR PROJECT",
        gridClass: "lg:col-span-3",
    },
    {
        id: 2,
        contentId: "supply-chain",
        title: "MOVING PARTS",
        description: "ANIMATED EXPLAINER | BUSINESS INTELLIGENCE",
        gridClass: "lg:col-span-2",
    },
    {
        id: 3,
        contentId: "andrew-film",
        title: "A DAY IN THE LIFE OF ANDREW",
        description: "DIRECTING | EDITING | VFX",
        gridClass: "lg:col-span-1",
    },
];

function FeaturedSection() {
    const { isOpen, content, type, openProject, close } = useModal();

    return (
        <>
            <section
                className="min-h-[80vh] px-6 py-12"
                data-section="featured"
                style={{ backgroundColor: "#f5f2eb", color: "#2a2a2a" }}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-wider">
                        {">"} FEATURED
                    </h2>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROJECTS.map((project) => (
                            <div key={project.id} className={project.gridClass}>
                                <ProjectCard
                                    project={project}
                                    className={
                                        project.gridClass === "lg:col-span-3"
                                            ? "h-80 md:h-96"
                                            : "h-64 md:h-80"
                                    }
                                    onClick={() =>
                                        openProject(project.contentId)
                                    }
                                />
                            </div>
                        ))}
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

function ProjectCard({ project, className, onClick }) {
    const base = import.meta.env.BASE_URL;
    return (
        <div
            className={`
                relative cursor-pointer
                transition-all duration-200 group
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${className}
            `}
            style={{
                border: "4px solid #2a2a2a",
                backgroundColor: "#f5f2eb",
                boxShadow: "0 0 0 0 rgba(42, 42, 42, 1)",
            }}
            onMouseEnter={(e) => {
                e.target.style.boxShadow =
                    "8px 8px 0px 0px rgba(42, 42, 42, 1)";
            }}
            onMouseLeave={(e) => {
                e.target.style.boxShadow = "0 0 0 0 rgba(42, 42, 42, 1)";
            }}
            onClick={onClick}
            onKeyDown={(e) => e.key === "Enter" && onClick()}
            tabIndex={0}
            role="button"
            aria-label={`View ${project.title} project details`}
        >
            <div
                className="absolute -bottom-2 -right-2 w-full h-full -z-10"
                style={{ backgroundColor: "#2a2a2a" }}
            />

            <img
                src={`${base}assets/svg/mem5.svg`}
                alt=""
                className="pointer-events-none absolute top-2 left-2 w-30 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5"
            />
            <img
                src={`${base}assets/svg/mem4.svg`}
                alt=""
                className="pointer-events-none absolute bottom-2 right-2 w-10 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0.5"
            />

            <div className="p-6 h-full flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center tracking-wider">
                        [ {project.title} ]
                    </h3>
                </div>

                <p className="text-xs md:text-sm tracking-widest uppercase mt-4">
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default FeaturedSection;
