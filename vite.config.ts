import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	root: "public",
	publicDir: false,
	plugins: [react()],
	server: { open: true },
	build: { outDir: "../dist", emptyOutDir: true },
});
