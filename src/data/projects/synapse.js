export const synapseProject = {
    id: "synapse",
    title: "SYNAPSE",
    description: "INTERACTIVE SHORT STORY | FOURTH YEAR PROJECT",
    overview: `
    <p><em>Synapse</em> is an interactive short story and my final year project, blending live-action filmmaking with web interactivity. Built in React with Framer Motion, it lets viewers make choices that branch the story of a reclusive programmer in a near-future dystopia who must decide whether to adopt a brain–computer interface to keep his job.</p>
    <p>I handled everything myself from <strong>scriptwriting</strong> and <strong>filming</strong> to <strong>editing</strong>, <strong>sound design</strong> and <strong>interactive development</strong>. The goal was to create something that felt cinematic yet reactive, where each choice carried emotional weight and every branch stayed true to the story’s tone.</p>
    <p>It was a huge challenge to balance narrative pacing with smooth user experience, but it became one of my most personal pieces — an exploration of control, isolation and the cost of progress.</p>
  `,
    year: "2024–2025",
    role: "Writer, Director, Developer, Editor, Composer",
    technologies: [
        "React",
        "Framer Motion",
        "Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Ableton Live",
    ],
    details: `
    <h3 class="text-xl font-bold mb-3">Production Process</h3>
    <ul class="space-y-3">
      <li>• Wrote and refined a <strong>14-page branching script</strong> covering multiple narrative paths</li>
      <li>• Created <strong>97 storyboard panels</strong> on a Wacom tablet and assembled an animatic prototype</li>
      <li>• Filmed on a <strong>Sony A6400</strong> using a DJI gimbal, shooting the story in reverse order to capture the actor’s transformation naturally</li>
      <li>• Directed and edited all footage, integrating motion-tracked <strong>BCI HUDs</strong> and animated text messages in After Effects</li>
      <li>• Composed an original score in Ableton Live to sync with on-screen tension and mood</li>
      <li>• Built a <strong>React app</strong> using JSON-based structure for branching logic and Framer Motion for interactive UI</li>
    </ul>

    <h3 class="text-xl font-bold mb-3 mt-6">Technical Implementation</h3>
   <p>
  The interactive video player was built from scratch in React, with Framer Motion handling transitions and choice prompts. 
  Each clip, choice and branch was defined in a simple JSON structure, making it easy to edit the flow without touching the core code. 
  Videos were encoded and optimised in HandBrake for smooth playback on the web. 
  The system can also be adapted for other interactive video projects with only small code changes.
</p>

    <h3 class="text-xl font-bold mb-3 mt-6">Creative Challenges</h3>
    <p>Balancing story and interactivity was the hardest part. I timed each decision to moments of emotional tension so that choices felt natural, not forced. Every branch carried its own tone and pacing to keep viewers immersed from start to finish. The limited shoot time — a single 10-hour day — meant careful planning and adaptability on set.</p>

    <h3 class="text-xl font-bold mb-3 mt-6">Reflection</h3>
    <p><em>Synapse</em> pushed me to combine every skill I’ve developed — filmmaking, design, coding and music — into one cohesive piece. More than a tech experiment, it became a way to explore emotion through structure, showing how technology can both empower and confine. It’s a project that feels deeply personal and marks the point where my creative and technical sides finally met.</p>
  `,
    gallery: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="aspect-video bg-gray-300 border-4 border-black relative overflow-hidden">
        <div class="absolute -bottom-1 -right-1 w-full h-full bg-black -z-10"></div>
        <img src="assets/images/synapse/davinci.jpeg" alt="DaVinci Resolve color grading interface" class="w-full h-full object-cover" />
      </div>
      <div class="aspect-video bg-gray-300 border-4 border-black relative overflow-hidden">
        <div class="absolute -bottom-1 -right-1 w-full h-full bg-black -z-10"></div>
        <img src="assets/images/synapse/hud.jpeg" alt="BCI HUD visual effects compositing" class="w-full h-full object-cover" />
      </div>
      <div class="aspect-video bg-gray-300 border-4 border-black relative overflow-hidden">
        <div class="absolute -bottom-1 -right-1 w-full h-full bg-black -z-10"></div>
        <img src="assets/images/synapse/premier.jpeg" alt="Premiere Pro editing timeline" class="w-full h-full object-cover" />
      </div>
      <div class="aspect-video bg-gray-300 border-4 border-black relative overflow-hidden">
        <div class="absolute -bottom-1 -right-1 w-full h-full bg-black -z-10"></div>
        <img src="assets/images/synapse/prompt.jpeg" alt="Interactive choice prompt interface" class="w-full h-full object-cover" />
      </div>
    </div>
  `,
    links: {
        demo: "https://www.ozzyd.me/synapse-interactive-story/",
        github: "https://github.com/OzzyD1/synapse-interactive-story",
    },
};
