require("esbuild")
  .serve(
    {
      servedir: "demo",
    },
    {
      entryPoints: ["./src/index"],
      outdir: "demo/dist",
      bundle: true,
      format: "esm",
    }
  )
  .catch((err) => {
    console.error(err);
  });
