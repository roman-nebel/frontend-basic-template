import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRootDir = path.resolve(fileURLToPath(new URL(".", import.meta.url)));

export default defineConfig({
	root: "public",
	publicDir: false,
	plugins: [react()],
	resolve: {
		alias: {
			"/src": path.resolve(projectRootDir, "src"),
		},
	},
	server: {
		open: true,
		fs: {
			allow: [projectRootDir],
		},
	},
	build: { outDir: "../dist", emptyOutDir: true },
});
