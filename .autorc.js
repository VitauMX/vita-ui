module.exports = {
  labels: [
    {
      name: 'PR: Breaking Change :boom:',
      changelogTitle: '💥 Breaking Change',
      description: 'Increment the major version when merged',
      overwrite: true,
      color: '#D93F0B',
      releaseType: 'major',
    },
    {
      name: 'PR: New Feature :rocket:',
      changelogTitle: '🚀 New Feature',
      description: 'Increment the minor version when merged',
      color: '#0E8A16',
      overwrite: true,
      releaseType: 'minor',
    },
    {
      name: 'PR: Bug Fix :bug:',
      changelogTitle: '🐛 Bug Fix',
      description: 'Increment the patch version when merged',
      color: '#FBCA04',
      overwrite: true,
      releaseType: 'patch',
    },
    {
      name: 'PR: Skip Release :fast_forward:',
      description: 'Preserve the current version when merged',
      overwrite: true,
      releaseType: 'skip',
    },
    {
      name: 'PR: Release :bookmark:',
      description: 'Create a release when this pr is merged',
      overwrite: true,
      releaseType: 'release',
    },
    {
      name: 'PR: Internal :house:',
      changelogTitle: '🏠 Internal',
      color: '#1D76DB',
      description: 'Changes only affect the internal API',
      overwrite: true,
      releaseType: 'none',
    },
    {
      name: 'PR: Documentation :memo:',
      changelogTitle: '📝 Documentation',
      description: 'Changes only affect the documentation',
      overwrite: true,
      color: '#457572',
      releaseType: 'none',
    },
  ],
  plugins: [
    'npm',
    [
      'all-contributors',
      {
        exclude: ['renovate'],
      },
    ],
  ],
};
