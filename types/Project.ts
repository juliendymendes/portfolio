import type { Stack } from "./Stack";

export interface Project {
	id: number;
	name: string;
	description: string;
	githubLink: string | null;
	websiteLink: string | null;
	imageUrl: string;
	stack: Stack[];
}
