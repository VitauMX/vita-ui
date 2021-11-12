module.exports = {
  stories: ['../packages/stories/contributing.stories.mdx','../packages/*/stories/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs'
  ],
};
