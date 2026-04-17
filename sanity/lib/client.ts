// sanity/lib/client.ts
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityEnabled = !!projectId && !!dataset;

export const client = sanityEnabled
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : createClient({
      projectId: "demo",
      dataset: "production",
      apiVersion: "2024-01-01",
      useCdn: false,
    });