(function (){
    "use strict"
    console.log("JS Running");

    window.addEventListener("load", function(){
        let postTops = [];
        let pageTop;
        let counter = 1;
        let previousCounter = 1;
        let doneResizing; 

        window.addEventListener("scroll", function(){
            pageTop = Math.floor(window.pageYOffset)+250; //at top of page, 0 pixels, more and more pixels are above top of the window
            // console.log(pageTop);
            if(pageTop > postTops[counter]){
                counter++;
                console.log(`scrolling down ${counter}`);
            } else if (counter > 1 && pageTop < postTops[counter-1]) {
                counter--;
                console.log(`scrolling up ${counter}`)
                //scrolling into the next higher section 
            }

            if(counter != previousCounter){
                document.querySelector("article").className = "show";
                previousCounter = counter;
            }


        });

    });


})();
