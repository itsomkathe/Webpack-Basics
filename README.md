<p align="center">
  <img src="./public/static/webpack.svg" width="40px"/>
  <img src="./public/static/css.svg" width="35px">
  <img src="./public/static/sass.svg" width="50px"/>
  <img src="./public/static/postcss.svg" width="40px"/>
</p>
<div align="center">
  <h3 align="center">Webpack CSS Configuration</h3>

  <p align="center">
    Setup CSS, SaSS, PostCSS with webpack
    <br />
    <a href="https://webpack.js.org/configuration/dev-server/#devserverstatic" target="_blank" ><strong>Webpack Docs ↗</strong></a>
    <br />
    <br />
  </p>
</div>

<summary>Table of Contents</summary>
<ol>
  <li>
    <a href="#loaders">Loaders</a>
    <ul>
      <li><a href="#style-loader">Style Loader</a></li>
      <li><a href="#css-loader">CSS Loader</a></li>
      <li><a href="#sass-loader">SaSS Loader</a></li>
      <li><a href="#postcss-loader">PostCSS Loader</a></li>
    </ul>
  </li>
  <li>
    <a href="#loaders">Plugins</a>
    <ul>
      <li><a href="#style-loader">Mini CSS Extract Plugin</a></li>
    </ul>
  </li>
  <li><a href="#browserslist">Browserslist</a></li>
</ol>

<br/>

## Loaders

The following loaders are used for the project.

### Style Loader

Style loader injects the CSS into the style tag of the output HTML file. This may not be suitable for bigger projects, as CSS code can be large.

### CSS Loader

This reads the CSS files as a plain text. The application of the styles is done by style loader.

### SaSS Loader

This also reads the SaSS and SCSS files. It should be used with the CSS Loader and Style loader to apply the styles. <a href="https://www.interviewbit.com/blog/sass-vs-scss/" target="_blank" >SaSS vs SCSS ↗</a>

### PostCSS Loader

For reading PostCSS.

## Plugins

Plugins are used to handle more advanced tasks, which loaders cannot do. 

### Mini CSS Extract Plugin

This plugin, creates a CSS file and adds to the bundle (*main.css* in this case), instead of injecting *style* tag into HTML. 

## Browserslist

Used to describe which browser does the apllication support.
