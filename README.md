babel-webpack-package-boilerplate
=================================

This project is meant to show how easy and useful it can be to use [webpack] as
a tool-chain for npm packages.

Fun things in this project:
  - Source code and tests for the package are written with [es2015] and
    [stage-0] ([es2016]) features (specifically the features supported by
    [babel]: [es2015][babel-preset-es2015], [stage-0][babel-preset-stage-0]).
    See any `*.js` files in `src` and `test` for examples. See `.babelrc` for
    the babel configuration, and `module.loaders` in `webpack.config.js` to see
    how babel was integrated into webpack.
  - Modules in `src/lib` can be loaded universally, like modules found in
    `node_modules`. See `src/index.js` and `test/index.js` for examples. See
    `resolve.modulesDirectories` in `webpack.config.js` to see how this was
    configured.

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
sources in the `src` and `test` directories. The successfully transpiled sources
are placed in the `build` folder. This folder is preserved by npm, but ignored
by git.

```bash
$ npm run-script build
```

The `pretest`, `prestart`, and `prepublish` scripts defined in the
`package.json` file all reference the `build` script, so there's no need to run
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

Again, this will automatically run the build script first.

Publishing
----------

Publish the project on the local machine (for testing) with `npm install`.

```bash
$ npm install -g ./
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

In both cases, again, this will automatically run the build script first.

[webpack]:https://webpack.github.io/
[es2015]:http://www.ecma-international.org/ecma-262/6.0/
[stage-0]:https://github.com/tc39/ecma262/blob/master/stage0.md
[es2016]:https://tc39.github.io/ecma262/
[babel]:https://babeljs.io/
[babel-preset-es2015]:https://babeljs.io/docs/plugins/preset-es2015/
[babel-preset-stage-0]:https://babeljs.io/docs/plugins/preset-stage-0/
[mocha]:https://mochajs.org/
