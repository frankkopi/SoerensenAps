
    // An object of CSS properties and values that the animation will move toward.
    var properties = {
        top: "20%",
        left: "10%",
        fontSize: "400%" };

    // A map of additional options to pass to the method.
    var options = {
        duration: 1500,
        //complete: function () {

        //    var audio10 = $('#beep10').get(0);
        //    audio10.play();
        //}
    };

    function startThePastSentence(){

        setTimeout(function(){
            $('#firstDotPast').text('I');
        }, 1500);

        setTimeout(function () {
            $( "#firstDotPast").animate(properties, options);
        }, 1500);

        setTimeout(function () {
            $('#leftQuote').addClass('show');
            $('#thePastText').typeIt({
                strings: ['<i>n the past, the darkness and</i>'],
                speed: 150,
                breakLines: false,
                loop: false,
                loopDelay: 3000
            });
        }, 3500);

        setTimeout(function(){
            $('#thePastTextFinish').typeIt({
                strings: ['<i>the lies are hidden...</i>'],
                speed: 150,
                breakLines: false,
                loop: false,
                loopDelay: 3000
            });
        }, 8000);
    }




