(function () {
    "use strict"
    console.log("JS Running");
    // scroll function
    window.addEventListener("load", function () {
        const posts = document.querySelectorAll("article");
        let postTops = [];
        let pageTop;
        let counter = 0;
        let previousCounter = 0;
        let doneResizing;

        posts.forEach(function (post) {
            postTops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset));
        });

        window.addEventListener("scroll", function () {
            pageTop = Math.floor(window.pageYOffset) - 650; //at top of page, 0 pixels, more and more pixels are above top of the window
            // console.log(pageTop);
            if (pageTop > postTops[counter]) {
                counter++;
                console.log(`scrolling down ${counter}`);
            } else if (counter > 1 && pageTop < postTops[counter - 1]) {
                counter--;
                console.log(`scrolling up ${counter}`)
                //scrolling into the next higher section 
            }

            const thisDiv = document.querySelector(`.targetDiv${counter}`);

            if (counter != previousCounter) {
                const thisDiv = document.querySelector(`.targetDiv${counter}`);
                // console.log(counter);
                // console.log(thisDiv);
                thisDiv.classList.replace("hidden", "show");
                previousCounter = counter;
            }
        });
    });

    // overlay 
    const T4overlay = document.querySelector('#T41 .overlaycontainer')
    const tpercentoverlay = document.querySelector('#tpercent1 .overlaycontainer')
    const umeteaoverlay = document.querySelector('#umetea1 .overlaycontainer')
    const teaspoonoverlay = document.querySelector('#teaspoon1 .overlaycontainer')
    const iteaoverlay = document.querySelector('#itea1 .overlaycontainer')


    const close = document.querySelector(".close")
    const body = document.querySelector("body");

    //open
    document.querySelector("#t4mainimg").addEventListener('click', function (event) {
        event.preventDefault();
        T4overlay.classList.replace("overlayhidden", "overlayshow");
        body.className = "noscroll"
    });

    document.querySelector("#tpercentmainimg").addEventListener('click', function (event) {
        event.preventDefault();
        tpercentoverlay.classList.replace("overlayhidden", "overlayshow");
        body.className = "noscroll"
    });

    document.querySelector("#umeteamainimg").addEventListener('click', function (event) {
        event.preventDefault();
        umeteaoverlay.classList.replace("overlayhidden", "overlayshow");
        body.className = "noscroll"
    });

    document.querySelector("#teaspoonmainimg").addEventListener('click', function (event) {
        event.preventDefault();
        teaspoonoverlay.classList.replace("overlayhidden", "overlayshow");
        body.className = "noscroll"
    });

    document.querySelector("#iteamainimg").addEventListener('click', function (event) {
        event.preventDefault();
        iteaoverlay.classList.replace("overlayhidden", "overlayshow");
        body.className = "noscroll"
    });

    //close

    document.querySelector("#t4close").addEventListener('click', function (event) {
        T4overlay.classList.replace("overlayshow", "overlayhidden");
        body.removeAttribute("class");
    });

    document.querySelector("#tpercentclose").addEventListener('click', function (event) {
        tpercentoverlay.classList.replace("overlayshow", "overlayhidden");
        body.removeAttribute("class");
    });

    document.querySelector("#umeteaclose").addEventListener('click', function (event) {
        umeteaoverlay.classList.replace("overlayshow", "overlayhidden");
        body.removeAttribute("class");
    });

    document.querySelector("#teaspoonclose").addEventListener('click', function (event) {
        teaspoonoverlay.classList.replace("overlayshow", "overlayhidden");
        body.removeAttribute("class");
    });

    document.querySelector("#iteaclose").addEventListener('click', function (event) {
        iteaoverlay.classList.replace("overlayshow", "overlayhidden");
        body.removeAttribute("class");
    });


    // close.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     if (close.id === "t4close") {
    //         T4overlay.classList.replace("overlayshow", "overlayhidden");
    //         body.removeAttribute("class");
    //     } else if (close.id === "tpercentclose") {
    //         tpercentoverlay.classList.replace("overlayshow", "overlayhidden");
    //         body.removeAttribute("class");
    //     } else if (close.id === "umeteaclose") {
    //         umeteaoverlay.classList.replace("overlayshow", "overlayhidden");
    //         body.removeAttribute("class");
    //     } else if (close.id === "teaspoonclose") {
    //         teaspoonoverlay.classList.replace("overlayshow", "overlayhidden");
    //         body.removeAttribute("class");
    //     } else {
    //         iteaoverlay.classList.replace("overlayshow", "overlayhidden");
    //         body.removeAttribute("class");
    //     }
    // });


    // smoothscroll back to top 
    const button = document.querySelector("#button");
    button.addEventListener("click", smoothScroll);

    const button1 = document.querySelector("#button1");
    button1.addEventListener("click", smoothScroll);


    function smoothScroll(event) {
        event.preventDefault();

        const targetID = event.target.getAttribute("href"); //if can get each attribute can know which section scroll to
        const targetAnchor = document.querySelector(targetID);
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 200; //rounds down value & stops 200 px from the top of the page 
        window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" })
        console.log(originalTop);
    };

})();

