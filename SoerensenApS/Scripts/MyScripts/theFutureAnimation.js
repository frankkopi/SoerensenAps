
    // An object of CSS properties and values that the animation will move toward.
    var futureProperties = {
            top: "45%",
            left: "10%",
            fontSize: "400%" };

    // A map of additional options to pass to the method.
    var options = {
        duration: 1500,
        //complete: function(){
        //    var audio10 = $('#beep10').get(0);
        //    audio10.play();
        //}
    };

    function startTheFutureSentence(){
        $('#firstDotFuture').addClass('show');

        setTimeout(function(){
            $('#firstDotFuture').text('I');
        }, 1500);

        setTimeout(function(){
            $( "#firstDotFuture").animate(futureProperties, options);
        }, 1500);

        setTimeout(function () {
            $('#theFutureText').addClass('show');
            $('#theFutureText').typeIt({
                strings: ['<i>n the future, the light and</i>'],
                speed: 150,
                breakLines: false,
                loop: false,
                loopDelay: 3000
            });
        }, 3500);

        setTimeout(function(){
            $('#theFutureTextFinish').typeIt({
                strings: ['<i>the truth is to be found...&ldquo;</i>'],
                speed: 150,
                breakLines: false,
                loop: false,
                loopDelay: 3000
            });
        }, 8000);

        setTimeout(function () {
            $('#rightQuote').addClass('show');
            $('#poulErik').typeIt({
                strings: ['Poul Erik Soerensen'],
                speed: 150,
                breakLines: false,
                loop: false,
                loopDelay: 3000
            });
        }, 13000);
    }
