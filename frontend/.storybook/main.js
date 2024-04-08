// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-vite",
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };

// export default config;

import { mergeConfig } from 'vite';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // Add the Vite specific configuration here
  async viteFinal(config, { configType }) {
    // Return the customized Vite config
    return mergeConfig(config, {
      server: {
        watch: {
          // Use polling if necessary, especially useful in Docker environments
          usePolling: true,
          interval: 100, // Check for changes every 100ms
        },
      },
    });
  },
};

export default config;
