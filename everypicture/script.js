(function (){
    "use strict"
    console.log("JS Running");

    window.addEventListener("load", function(){
        const posts = document.querySelectorAll("article");
        let postTops = [];
        let pageTop;
        let counter = 1;
        let previousCounter = 1;
        // let doneResizing; 

         posts.forEach( function(post){
            postTops.push(Math.floor(post.getBoundingClientRect().top+window.pageYOffset));
        });

        window.addEventListener("scroll", function(){
            pageTop = Math.floor(window.pageYOffset)+850; //at top of page, 0 pixels, more and more pixels are above top of the window
            console.log(pageTop);
            if(pageTop > postTops[counter]){
                console.log(postTops[counter])
                counter++;
                console.log(`scrolling down ${counter}`);
            } else if (counter > 1 && pageTop < postTops[counter-1]) {
                counter--;
                console.log(`scrolling up ${counter}`)
                //scrolling into the next higher section 
            }

            if(counter != previousCounter){

                const thisArticle = document.querySelector(`article:nth-child(${counter})`)

                thisArticle.className = ("hidden");
                thisArticle.className = ("show");
                previousCounter = counter;

                // for ()

                // function myFunction() {
                //     const element = document.getElementById("hidden");
                //     element.classList.toggle("show");
                // }
            
        
                // let hiddenSection = document.querySelectorAll(".hidden");
                // hiddenSection.forEach(function(counter){
                //     counter.removeAttribute("hidden");
                // })

                // let selectedSection = document.querySelector(`section:nth-child(${counter})`);selectedSection.classList.add("show");

                // element.classList.toggle("mystyle");

                // let thisSection = document.querySelectorAll(".animatethis");
                // thisSection.forEach(function(eachPost){
                //     eachPost.classList.remove("hidden");
                //     thisSection.classList.add("show");
                // })

                // navLinks.forEach(function(eachLink){
                //     eachLink.removeAttribute("class");
                // });

                // const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
                // thisLink.className = "selected";
                // previousCounter = counter;

                
                // previousCounter = counter;
            }

        });

    });


})();

// set article to position relative (set right to +-1000px) 
