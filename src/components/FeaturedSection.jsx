const PROJECTS = [
    {
        id: 1,
        title: "SYNAPSE",
        description: "INTERACTIVE SHORT STORY | FOURTH YEAR PROJECT",
        gridClass: "lg:col-span-1",
    },
    {
        id: 2,
        title: "SUPPLY CHAIN",
        description: "ANIMATED EXPLAINER | MAP VISUALISATION",
        gridClass: "lg:col-span-2",
    },
    {
        id: 3,
        title: "CHRIS'S WEBSITE",
        description: "CLIENT PROJECT | WEB DEVELOPMENT",
        gridClass: "lg:col-span-1",
    },
    {
        id: 4,
        title: "A DAY IN THE LIFE OF ANDREW",
        description: "DIRECTING | EDITING | VFX",
        gridClass: "lg:col-span-1",
    },
    {
        id: 5,
        title: "SHOWREEL",
        description: "MOTION DESIGN | AFTER EFFECTS",
        gridClass: "lg:col-span-1",
    },
];

function FeaturedSection() {
    return (
        <section className="min-h-screen bg-white text-black px-6 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-wider">
                    {">"} FEATURED
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <div key={project.id} className={project.gridClass}>
                            <ProjectCard
                                project={project}
                                className={
                                    index < 2 ? "h-80 md:h-96" : "h-64 md:h-80"
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, className }) {
    return (
        <div
            className={`
            relative border-4 border-black bg-white cursor-pointer
            transition-all duration-200 group
            hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            ${className}
        `}
        >
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-black -z-10" />

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
