import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export for GitHub Pages
  basePath: "/results-summary-component", //GitHub Pages subpath
  assetPrefix: "/results-summary-component/", // Prefix assets with repo path
};

export default nextConfig;
