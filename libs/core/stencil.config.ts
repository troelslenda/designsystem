import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'kirby',
  plugins: [sass({ injectGlobalPaths: ['../angular/src/lib/scss/utils'] })],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@kirbydesign/core',
      directivesProxyFile: '../angular/src/lib/components/proxies.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      // dir: '../../dist/libs/core/dist',
      // copy: [
      //   { src: '../dist', dest: '../../../../dist/libs/core/dist' },
      //   { src: '../loader', dest: '../../../../dist/libs/core/loader' },
      //   { src: '../package.json', dest: '../../../../dist/libs/core/package.json' },
      // ],
    },
    { type: 'experimental-dist-module', dir: 'dist/module' },
    // { type: 'experimental-dist-module', dir: '../../dist/libs/core/dist/module' },
    { type: 'docs-readme' },
    { type: 'docs-json', file: './stuff.json' },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
  // testing: {
  //   testPathIgnorePatterns: ['/node_modules/', '/libs/designsystem/.*', '/apps/.*'],
  // },
};
