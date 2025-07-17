import * as esbuild from "esbuild";
import { Plugin } from "esbuild";

let count = 0;
const endOfBuildLogPlugin: Plugin = {
  name: "end-log",
  setup(build) {
    build.onEnd((result) =>
      console.log(
        `${count++}: 🎁 done with ${result.errors.length} errors and ${
          result.warnings.length
        } warnings`
      )
    );
  }
};

async function watch() {
  const ctx = await esbuild.context({
    bundle: true,
    entryPoints: ["src/index.tsx"],
    outdir: "../server/src/public/js",
    outbase: "src/views",
    sourcemap: "linked",
    plugins: [endOfBuildLogPlugin]
  });
  await ctx.watch();
  console.log("esbuild is watching");
}
watch();
