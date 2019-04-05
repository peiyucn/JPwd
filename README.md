# JPwd.js

 [![build status][travis-image]][travis-url]
 [![GitHub release][release-image]][release-url]
 [![GitHub license][license-image]][license-url]
 [![996.icu][996.icu-image]][996.icu-url]

A JS password input components.

* No images, no external CSS
* No dependencies
* Simply Configurable

[Click here to see the demo.](https://peiyucn.github.io/JPwd/src/sample.html)

## Downloads

[![JPwd.js][download-image]][download-url]

[![JPwd.min.js][download-min-image]][download-min-url]

## Usage

```javascript
 /**
  * password input style custom config
  * if there is no custom config JPwd will be use built-in config
  */
 var JPwdConfig = {
     // Built-in defaultConfig, you can change it.
     passwordMaxLength: 6,                   // The number of password length
     passwordInvisible: true,                // The password whether to hide
     passwordSymbol: "●",                    // The password character
     passwordSymbolColor: "#9b9b9b",         // The password character color
     passwordSymbolSize: "1rem",             // The password character font size
     passwordSpanSideLength: "2.5rem",       // The password input span side length
     passwordSpanBorderThin: "1px",          // The password input span border thickness
     passwordSpanBorderColor: "#dbdbdb",     // The password input span border color
     passwordSpanBorderStyle: "solid",       // The password input span border style
     passwordInputBorderRadius: "4px",       // The password input span border radius
     passwordInputBoxShadow: "10px",         // The password input box shadow thickness
     passwordInputBoxShadowColor: "#72d1ff"  // The password input box shadow color
 };
 /** callback function */
 function getPassword(result) {
     console.log(result);
 }
 var jpwd = new JPwd(JPwdConfig);//or new JPwd(),it will use built-in config.
 /**
  * 'pwdInputPlace' is the html element id
  * which you want to show the JPwd input
  */
 jpwd.init('pwdInputPlace', getPassword);
```

[travis-image]: https://travis-ci.org/peiyucn/JPwd.svg?branch=master
[travis-url]: https://travis-ci.org/peiyucn/JPwd
[release-image]: https://img.shields.io/github/release/peiyucn/JPwd.svg
[release-url]: https://github.com/peiyucn/JPwd/releases/
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/peiyucn/JPwd/master/LICENSE
[996.icu-image]: https://img.shields.io/badge/link-996.icu-red.svg
[996.icu-url]: https://996.icu
[download-image]: https://img.shields.io/badge/Code-JPwd.js-brightgreen.svg
[download-url]: https://peiyucn.github.io/JPwd/src/JPwd.js
[download-min-image]: https://img.shields.io/badge/Code-JPwd.min.js-brightgreen.svg
[download-min-url]: https://peiyucn.github.io/JPwd/src/JPwd.min.js