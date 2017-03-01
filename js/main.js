$(document).ready(function() {

    var $target = $("#target")
      , count = 0;

    function addLog(text, color, offset = 1) {

        setTimeout(function(){

            // New line.
            var content = document.createElement("p");

            content.className = color;

            // Add line.
            target.appendChild(content);

            // Type on page.
            $(content).typed({
                strings: [text],
                typeSpeed: 2,
                startDelay: 3,
                showCursor: false
            });

            // Log.
            console.log(text);

        }, count * 2000);

        count += offset;
    }

    addLog("Hello!", 'black');
    addLog("Good to see you.", 'black');
    addLog("Let's start...", 'black');

    addLog("Creating 5 variable types and printing the length of each one...", 'olive', 3);

    var i = 42;

    addLog("1º: integer, i = " + i + " with length " + i.length, 'green', 2);

    var s = "the right answer";

    addLog("2º: string, s = '" + s + "'' with length " + s.length, 'green', 2);

    var b = true;

    addLog("3º: boolean, b = " + b + " with length  " + b.length, 'green', 2);

    var a = ["'fish'", "'rats'", "'dolphins'"];

    addLog("4º: array, a = [" + a + "] with length  " + a.length, 'green', 2);

    var $o = {'id': 1, 'name': 'goldenheart'};

    addLog("5º: object, o = " + $o + " with length  " + $o.length, 'green', 2);

    addLog("Creating 2 arrays, one of numbers and another of strings...", 'olive', 3);

    var x = [15, 1, 10, 1000];

    addLog("array of numbers, x = [" + x + "]", 'green', 2);

    var y = ["'banana'", "'orange'", "'apple'"];

    addLog("array of strings, y = [" + y + "]", 'green', 2);

    addLog("Sorting both arrays...", 'olive', 3);

    addLog("array of numbers, x = [" + x.sort() + "]", 'green', 2);

    addLog("array of strings, y = [" + y.sort() + "]", 'green', 2);

    addLog("That's it.");

    addLog("Cheers!");
});