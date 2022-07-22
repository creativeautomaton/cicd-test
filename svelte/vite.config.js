import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import houdini from "houdini-preprocess";
import { defineConfig, loadEnv } from "vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  // resolve: {
  //   alias: {
  //     $houdini: path.resolve(".", "$houdini"),
  //   },
  // },
  // server: {
  //   fs: {
  //     // Allow serving files from one level up to the project root
  //     // https://vitejs.dev/config/#server-fs-allow
  //     allow: [".."],
  //   },
  // },
};
//
export default config;
