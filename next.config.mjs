/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrganizationSite = repositoryName?.endsWith(".github.io");
const basePath = process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserOrOrganizationSite
  ? `/${repositoryName}`
  : "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
