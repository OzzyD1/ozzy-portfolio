// Import individual project files
import { synapseProject } from "./projects/synapse.js";
import { supplyChainProject } from "./projects/supply-chain.js";
import { andrewFilmProject } from "./projects/andrew-film.js";

// Import individual collection files
import { webCollection } from "./collections/web.js";
import { motionCollection } from "./collections/motion.js";
import { designsCollection } from "./collections/designs.js";
import { audioCollection } from "./collections/audio.js";

// Export all content
export const PROJECTS = {
    synapse: synapseProject,
    "supply-chain": supplyChainProject,
    "andrew-film": andrewFilmProject,
};

export const COLLECTIONS = {
    web: webCollection,
    motion: motionCollection,
    designs: designsCollection,
    audio: audioCollection,
};
