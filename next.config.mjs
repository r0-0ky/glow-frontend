/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { nextRuntime }) {
    if (nextRuntime === "nodejs") {
      config.resolve.alias.canvas = false;
    }
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    )
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
  experimental: {
    serverComponentsExternalPackages: ['canvas']
  }
};

export default nextConfig;