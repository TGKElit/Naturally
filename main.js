
//For Scroll
window.onscroll = function(e) {
    
    if (this.oldScroll > this.scrollY) {
        document.getElementById("header-section").classList.add("scroll-up");
    } else {
        document.getElementById("header-section").classList.remove("scroll-up");
    }
    this.oldScroll = this.scrollY;
}



//BLOB
const blob = document.querySelector(".blob");
const blobCross = document.querySelector(".blob-cross-button")
console.log(blob);


blobCross.addEventListener("click", ()=> {

    blob.classList.add("blob-invisible");
    blobCross.classList.add("blob-invisible");


})

