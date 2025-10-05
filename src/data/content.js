// Import individual project files
import { synapseProject } from "./projects/synapse.js";
import { supplyChainProject } from "./projects/supply-chain.js";
import { chrisWebsiteProject } from "./projects/chris-website.js";
import { andrewFilmProject } from "./projects/andrew-film.js";
import { showreelProject } from "./projects/showreel.js";

// Import individual collection files
import { webCollection } from "./collections/web.js";
import { motionCollection } from "./collections/motion.js";
import { designsCollection } from "./collections/designs.js";
import { audioCollection } from "./collections/audio.js";

// Export all content
export const PROJECTS = {
    synapse: synapseProject,
    "supply-chain": supplyChainProject,
    "chris-website": chrisWebsiteProject,
    "andrew-film": andrewFilmProject,
    showreel: showreelProject,
};

export const COLLECTIONS = {
    web: webCollection,
    motion: motionCollection,
    designs: designsCollection,
    audio: audioCollection,
};
