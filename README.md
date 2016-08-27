# JPwd
一个模拟分割密码输入的JS组件工具

[点击这里预览Demo](/src/sample.html)

###使用方法

    <script src="JPwd.js"></script>
    <script>
        /** callback function */
        function getPassword(result) {
            console.log(result);
        }
        var jpwd = new JPwd();
        /**
         * 'pwdInputPlace' is the html element id
         * which you want to show the JPwd input
         */
        jpwd.init('pwdInputPlace', getPassword);
    </script>