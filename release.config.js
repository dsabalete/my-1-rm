module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer', // Analyzes commits to determine the next version
    '@semantic-release/release-notes-generator', // Generates release notes
    '@semantic-release/changelog', // Updates the CHANGELOG.md
    '@semantic-release/npm', // Updates package.json
    // [
    //   '@semantic-release/github',
    //   {
    //     assets: [
    //       { path: 'CHANGELOG.md', label: 'Changelog' },
    //       { path: 'dist/*.js', label: 'Compiled JS files' },
    //     ],
    //   },
    // ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
