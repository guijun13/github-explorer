module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // does not need to 'import React from 'react'
      },
    ],
  ],
};
