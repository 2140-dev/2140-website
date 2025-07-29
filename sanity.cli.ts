import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const studio = process.env.NEXT_SANITY_STUDIO_HOST;

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: studio,
  vite: {
    define: {
      "process.env.NEXT_PUBLIC_SANITY_PROJECT_ID": JSON.stringify(projectId),
      "process.env.NEXT_PUBLIC_SANITY_DATASET": JSON.stringify(dataset),
    },
    resolve: {
      alias: {
        "@": __dirname,
      },
    },
  },
});
