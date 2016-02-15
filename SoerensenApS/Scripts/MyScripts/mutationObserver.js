    var audio = $('#beep1').get(0);
    var audio2 = $('#beep2').get(0);
    var audio3 = $('#beep3').get(0);
    var audio4 = $('#beep4').get(0);
    var audio5 = $('#beep5').get(0);
    var audio6 = $('#beep6').get(0);
    var audio7 = $('#beep7').get(0);
    var audio8 = $('#beep8').get(0);
    var audio9 = $('#beep9').get(0);
    var audio10 = $('#beep10').get(0);

    var sounds = [audio, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10];
    var count = 0;

    function thePastTextObserver(){

        // select the target node
        var target = document.querySelector('#thePastText');

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                console.log(mutation.type);
                if (count == sounds.length){
                    count = 0;
                }
                sounds[count].play();
                count++;
            });
        });

        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true, subtree: true };

        // pass in the target node, as well as the observer options
        observer.observe(target, config);

        // later, you can stop observing
        //observer.disconnect();
    }


    function thePastTextFinishObserver(){

        // select the target node
        var target = document.querySelector('#thePastTextFinish');

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                console.log(mutation.type);
                if (count == sounds.length){
                    count = 0;
                }
                sounds[count].play();
                count++;
            });
        });

        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true, subtree: true };

        // pass in the target node, as well as the observer options
        observer.observe(target, config);

        // later, you can stop observing
        //observer.disconnect();
    }


    function theFutureTextObserver(){

        // select the target node
        var target = document.querySelector('#theFutureText');

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                console.log(mutation.type);
                if (count == sounds.length){
                    count = 0;
                }
                sounds[count].play();
                count++;
            });
        });

        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true, subtree: true };

        // pass in the target node, as well as the observer options
        observer.observe(target, config);

        // later, you can stop observing
        //observer.disconnect();
    }


    function theFutureTextFinishObserver(){

        // select the target node
        var target = document.querySelector('#theFutureTextFinish');

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                console.log(mutation.type);
                if (count == sounds.length){
                    count = 0;
                }
                sounds[count].play();
                count++;
            });
        });

        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true, subtree: true };

        // pass in the target node, as well as the observer options
        observer.observe(target, config);

        // later, you can stop observing
        //observer.disconnect();
    }