## JPwd.js  [![build status][travis-image]][travis-url] [![GitHub license][license-image]][license-url] [![GitHub release][release-image]][release-url]
A JS password input components.

* No images, no external CSS
* No dependencies
* Configurable

[Click here to see the demo.](https://peiyucn.github.io/JPwd/src/sample.html)

## Usage

    <script src="JPwd.min.js"></script>
    <script>
        /**
         * password input style custom config
         * if there is no custom config JPwd will be use built-in config
         */
        var JPwdConfig = {
            passwordMaxLength: 6,                // The number of password length
            passwordSymbol: "●",                 // The password character
            passwordSymbolColor: "#9b9b9b",      // The password character color
            passwordSymbolSize: "1rem",          // The password character font size
            passwordSpanSideLength: "2.5rem",    // The password input span side length
            passwordSpanBorderThin: "1px",       // The password input span border thickness
            passwordSpanBorderColor: "#dbdbdb",  // The password input span border color
            passwordSpanBorderStyle: "solid"     // The password input span border style
        };
        /** callback function */
        function getPassword(result) {
            console.log(result);
        }
        var jpwd = new JPwd(JPwdConfig);
        /**
         * 'pwdInputPlace' is the html element id
         * which you want to show the JPwd input
         */
        jpwd.init('pwdInputPlace', getPassword);
    </script>

[travis-image]: https://travis-ci.org/peiyucn/JPwd.svg?branch=master
[travis-url]: https://travis-ci.org/peiyucn/JPwd
[release-image]:https://img.shields.io/github/release/peiyucn/JPwd.svg
[release-url]:https://github.com/peiyucn/JPwd/releases/
[license-image]:https://img.shields.io/badge/license-MIT-blue.svg
[license-url]:https://raw.githubusercontent.com/peiyucn/JPwd/master/LICENSE