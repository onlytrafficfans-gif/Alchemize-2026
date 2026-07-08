const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

let finalConfig = config;
try {
  const { withMetallicMetro } = require("@metallic-ai/toolkit-sdk/metro");
  finalConfig = withMetallicMetro(config);
} catch (e) {
  // Metallic SDK not yet available, use default config
  // This will be enabled when Metallic releases their toolkit SDK
}

module.exports = finalConfig;
