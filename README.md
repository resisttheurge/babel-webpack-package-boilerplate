babel-webpack-package-boilerplate
=================================

**Now updated for webpack 2!**

This project is meant to show how easy and useful it can be to use [webpack] as
a tool-chain for npm packages.

Fun things in this project:
  - Source code and tests for the package are written with [es2015+] and
    [stage-0] features (specifically the features supported by the [env] and
    [stage-0] presets for [babel]).
    See any `*.js` files in `src` for examples. See `.babelrc` for
    the babel configuration, and `config/rules.js` to see how babel was
    integrated into webpack.
  - Platform-specific polyfills and transpilation. Use of the [env] preset for
    [babel] allows webpack to avoid unused polyfills and source code transforms
    if the target platform supports them. See `.babelrc` to see how the preset
    was configured to support this.
  - Tree-shaking transpilation through webpack 2 and [es2015+] modules. Due to the
    statically-analyzable module system provided by next-generation JavaScript, webpack can remove unused code and dependencies at transpiletime, resulting in smaller built artifacts.
  - Modules in `lib` directories can be loaded universally, like modules found
    in `node_modules`. See `src/main.js` and `src/test/index.js` for examples.
    See `modules` in `config/resolve.js` to see how this was configured.
  - Modules in `src` that end with `*test.js` and modules that are direct
    children of `test` directories can be run as [mocha] test modules, which will
    automatically be processed using webpack.

Getting Started
---------------

Clone the repository and install dependencies with `npm`.
```bash
$ git clone https://github.com/resisttheurge/babel-webpack-package-boilerplate.git
$ cd babel-webpack-package-boilerplate
$ npm install
```

Building
--------
The `build` script defined in the `package.json` file uses webpack to transpile
sources in the `src` directory. The successfully transpiled sources
are placed in the `dist` folder. This folder is preserved by npm, but ignored
by git.

```bash
$ npm run build
```

`Watch`-style building is supported by the `build:watch` script.

```bash
$ npm run build:watch
```

The `prestart`, and `prepublish` scripts defined in the
`package.json` file reference the `build` script, so there's no need to run
the build script manually in those situations.

Running
-------

Run the project with `npm start`.

```bash
$ npm start

  hello, world!
```

As said before, this will automatically run the build script first.

Testing
-------

Test the project with `npm test`.

```bash
$ npm test
```

`Watch`-style testing is supported by the `test:watch` script.

```bash
$ npm run test:watch
```

Publishing
----------

Publish the project on the local machine (for testing) with `npm install`.

```bash
$ npm install . -g
$ babel-webpack-package-boilerplate

  hello, world!
```

Publish the package globally with `npm publish`.

```bash
$ npm publish
$ npm install -g babel-webpack-package-boilerplate
$ babel-webpack-package-boilerplate

  hello, world!
```

In both cases, again, this will automatically run the build script after installation.

[webpack]:https://webpack.github.io/
[es2015+]:http://www.ecma-international.org/ecma-262/6.0/
[stage-0]:https://github.com/tc39/ecma262/blob/master/stage0.md
[babel]:https://babeljs.io/
[babel-preset-env]:https://babeljs.io/docs/plugins/preset-env/
[babel-preset-stage-0]:https://babeljs.io/docs/plugins/preset-stage-0/
[mocha]:https://mochajs.org/
