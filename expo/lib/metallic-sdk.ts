// Metallic SDK wrapper with fallback for development
// When Metallic SDK is released, this will use the real implementation

let metallicGenerateObject: any = null;

try {
  const module = require('@metallic-ai/toolkit-sdk');
  metallicGenerateObject = module.generateObject;
} catch (e) {
  // SDK not available yet, provide fallback for development
}

export async function generateObject(options: any) {
  if (metallicGenerateObject) {
    return metallicGenerateObject(options);
  }

  // Fallback: Mock response for development
  // This allows the app to work while waiting for Metallic SDK
  const schema = options.schema;

  if (schema?.parse && options.prompt?.includes('food')) {
    return {
      foods: [
        {
          name: 'Sample Food',
          servingSize: '1 cup',
          calories: 250,
          protein: 15,
          carbs: 30,
          fat: 8,
        },
      ],
    };
  }

  if (schema?.parse && options.prompt?.includes('workout')) {
    return {
      estimatedCalories: 350,
      confidence: 'medium',
      explanation: 'Sample workout analysis',
    };
  }

  // Generic fallback
  return {};
}
