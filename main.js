
//Used for checking language
HTML = document.querySelector("HTML"); 

//Gets all language elements
const langElements = [];
const elements = document.querySelectorAll("*");
elements.forEach(element => {
    if(element.hasAttribute("lang") && element.tagName != "HTML" ){
    langElements.push( element);         
    }    
});

//FUNCTIONS////////////////////////////////////////////////////
//Shows current language elements, hides all others
const handleLanguage = () => {
    langElements.forEach(element => {
        if(element.lang != HTML.lang)
        {
            element.classList.add("hidden"); 
        }else
        {
            element.classList.remove("hidden");
        }
    })
}
//Does everything needed to switch language
const switchLanguage = () => {
    if(HTML.lang === "eng"){
        HTML.lang = "se";
    }else{
        HTML.lang = "eng";
    }
    handleLanguage();
}
//////////////////////////////////////////////////////////////////

//Set visible/invisible elements based on start language
handleLanguage();



//EVENT LISTENERS/////////////////////////////////////////////////

//Blob
const blob = document.querySelector(".blob");
const blobCross = document.querySelector(".blob-cross-button")
const blobContainer = document.querySelector(".blob-container");
const blobInputfield = document.querySelector(".blob-input");
const blobButtons = document.querySelectorAll(".blob-button");



//Empty inputfield on button click
blobButtons.forEach(blobButton => {

    blobButton.addEventListener("click", (event) => {

        event.preventDefault();
        blobInputfield.value = "";

    })


})


blobCross.addEventListener("click", ()=> {

    blob.classList.add("blob-invisible");
    blobCross.classList.add("blob-invisible");


})
//For Scroll
window.onscroll = function(e) {
    
    if (this.oldScroll > this.scrollY) {
        document.getElementById("header-section").classList.add("scroll-up");
    } else {
        document.getElementById("header-section").classList.remove("scroll-up");
    }
    this.oldScroll = this.scrollY;


    if (this.scrollY > 266 + 0.56 * window.innerWidth) //Header height * hero height(scales with window width)
    {
       blobContainer.classList.add("blob-animation");


    }
}





//Language change button
const languageButton = document.querySelector("#language-button");
languageButton.addEventListener("click", (event) =>{
    event.preventDefault();
    switchLanguage();

})


//story scrollbar
const leftCircle = document.getElementById("left");
const middleCircle = document.getElementById("middle");
const rightCircle = document.getElementById("right");
const storyContainer = document.getElementById("story-container");
let containerWidth = storyContainer.scrollWidth - document.body.clientWidth;

window.onresize = function() {
    containerWidth = storyContainer.scrollWidth - document.body.clientWidth;
}

storyContainer.onscroll = function(e) {
    const scrollPercentage = (this.scrollLeft + document.body.scrollLeft) / containerWidth;
    console.log(scrollPercentage);
    switch (true) {
        
        case scrollPercentage < 0.5:
            leftCircle.classList.add("selected");
            rightCircle.classList.remove("selected");
            break;

        case scrollPercentage == 0.5:
            leftCircle.classList.remove("selected");
            rightCircle.classList.remove("selected");
            break;
        case scrollPercentage > 0.5:
            leftCircle.classList.remove("selected");
            rightCircle.classList.add("selected");
            break;
        
    }
}

leftCircle.addEventListener("click", function() {
    storyContainer.scrollTo(0,0);
});

middleCircle.addEventListener("click", function() {
    storyContainer.scrollTo(containerWidth / 2, 0);
})

rightCircle.addEventListener("click", function() {
    storyContainer.scrollTo(containerWidth, 0);
})