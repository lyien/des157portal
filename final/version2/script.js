(function () {
    "use strict"
    alert("Hello! Welcome to this User Test. Complete these 3 tasks: Scroll down to view elements move on the page, hover over 'reasons to go / stay home' post it notes, and hover over boba images")
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
            console.log(pageTop);
            if (pageTop > postTops[counter]) {
                console.log(postTops[counter])
                counter++;
                console.log(`scrolling down ${counter}`);
            } else if (counter > 1 && pageTop < postTops[counter - 1]) {
                counter--;
                console.log(`scrolling up ${counter}`)
                //scrolling into the next higher section 
            }

            const thisDiv = document.querySelector(`.targetDiv${counter}`);
            const postitnote = document.querySelector('.postitnote');


            if (counter != previousCounter) {
                const thisDiv = document.querySelector(`.targetDiv${counter}`);
                console.log(counter);
                console.log(thisDiv);
                thisDiv.classList.replace("hidden", "show");
                previousCounter = counter;
            }
        });




    });

    // const bobaimages = document.querySelectorAll(".second img");
    //     const background = document.querySelectorAll("article");
    //     console.log(bobaimages);
    //     console.log(background);
    
    //     for (const eachImg of bobaimages) {
    //         eachImg.addEventListener("mouseover", function () {
    //             if (eachImg == 0) {
    //                 background[1].className = "blueanimation";
    //             }
    //             else if (eachImg.ID == 'tpercentbobaimg'){
    //                 background.className = "blueanimation";
    //             }  
    //             else if (eachImg.ID == 'umeteabobaimg'){
    //                 background.className = "blueanimation";
    //             }
    //             else if (eachImg.ID == 'teaspoonbobaimg'){
    //                 background.className = "blueanimation";
    //             }
    //             else if (eachImg.ID == 'iteabobaimg'){
    //                 background.className = "blueanimation";
    //             }
    //         });
    
    //         eachImg.addEventListener("mouseout", function () {
    //             if(eachImg.ID == 'T4bobaimg' || 'tpercentbobaimg' || 'umeteabobaimg' || 'teaspoonbobaimg' || 'iteabobaimg' ){
    //                 background.removeAttribute("class");
    //             }
    //         });
    
    //     }



    





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

