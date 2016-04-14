forked from https://github.com/balupton/jquery-history

- - -

[![axisj-contributed](https://img.shields.io/badge/AXISJ.com-Contributed-green.svg)](https://github.com/axisj)
![](https://img.shields.io/badge/Seowoo-Mondo&Thomas-red.svg)

> *Dependencies*
> * _[jQuery 1.X+](http://jquery.com/)_
> * _[ax5core](http://ax5.io)

## Examples
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jquery-history</title>
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/ax5core/dist/ax5core.min.js"></script>
    <script src="../dist/jquery.history.js"></script>
</head>
<body style="padding: 20px;">
<div id="demo">
    <ul id="menu">
        <li><a href="#/apricots">Learn about Apricots</a></li>
        <li><a href="#/bananas">Lean about Bananas</a></li>
        <li><a href="#/coconuts">Learn about Coconuts</a></li>
    </ul>
</div>
<script>
    $(function () {
        // Bind a handler for ALL hash/state changes
        $.History.bind(function (state) {
            console.log(state);
        });

        // Bind a handler for state: apricots
        /*
        $.History.bind('/apricots', function (state) {

        });
        */
    });
</script>

</body>
</html>
```