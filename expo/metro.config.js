const { getDefaultConfig } = require("expo/metro-config");
const { withMetallicMetro } = require("@metallic-ai/toolkit-sdk/metro");

const config = getDefaultConfig(__dirname);

module.exports = withMetallicMetro(config);
