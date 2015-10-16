var newPara = document.getElementById("content");
newPara.addEventListener("click", textChange);

// Function to change content of "content" div
function textChange(){
    if (document.getElementById("content")) {
    newPara.innerHTML = "<h1>Thanks for the attention!</h1>";
    }
};
