<p align="center">
    <img src="./public/static/webpack.svg" width="50px"/>
    <img src="./public/static/babel.svg" width="125px"/>
</p>
<div align="center">
  <h3 align="center">Webpack Babel Polyfill</h3>

  <p align="center">
    Configure babel using polyfill
    <br />
    <a href="https://webpack.js.org/configuration/dev-server/#devserverstatic" target="_blank" ><strong>Webpack Docs ↗</strong></a>
    <br />
    <br />
  </p>
</div>

<summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#polyfill">Polyfill</a>
      <ul>
        <li><a href="#core-js">core-js</a></li>
      </ul>
    </li>
    <li>
      <a href="#entry-and-output">Browser Support</a>
    </li>
    <li><a href="#babel-config">Babel Config</a></li>
  </ol>

<br/>

## Polyfill

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

To add polyfills, <a href="https://www.npmjs.com/package/core-js" target="_blank">core-js ↗</a> is used. <a href="https://babeljs.io/docs/en/babel-polyfill">@babel/polyfill ↗</a> is deprecated and not recommended to use.

## core-js

core-js contains all the polyfill methods for ES versions as late as in 2023.

### Browser Support

Currently for demo, we are setting up the project for Internet Explorer versions > 7

## Babel Config

We are using babel preset-env as usual but with an aditional object passed.

    "debug": true
To get more descriptive messages/errors

    "useBuiltIns": "usage"
Babel automatically imports polyfill, according to our usage of methods. 

<br/>