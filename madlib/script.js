(function(){
    "use strict";
    console.log("JS running");

    const form = document.querySelector ("form");
    const para1 = document.querySelector ("#panel1");
    const para2 = document.querySelector("#panel2");
    const para3 = document.querySelector("#panel3");
    const para4 = document.querySelector("#panel4");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const restaurant = document.querySelector("#restaurant").value;
        const name1 = document.querySelector("#name1").value;
        const name2 = document.querySelector("#name2").value;
        const adj = document.querySelector("#adj").value;
        const noun = document.querySelector("#noun").value;
        const verb = document.querySelector("#verb").value;

        const panelText1 = `After dinner at <span>${restaurant}</span>, <span>${name1}</span> drives <span>${name2}</span> home in their Chevy.`
    
        const panelText2 = `For a split second, <span>${name1}</span> looks away from the road because <span>${name2}</span> is so <span>${adj}</span>.`

        const panelText3 = `BOOM! The chevy hit a <span>${noun}</span>. Oh no! How will they cross the road now?!`

        const panelText4 = `<span>${name1}</span> doesn't panic, grasping <span>${name2}'s</span> wing and together, they <span>${verb}</span> across the road and into the sunset.`

        para1.innerHTML = panelText1;
        para2.innerHTML = panelText2;
        para3.innerHTML = panelText3;
        para4.innerHTML = panelText4;

        document.querySelector("#madlibtext").style.display = "none";
        document.querySelector("#madlibimage").className = "showing";

    });

})();