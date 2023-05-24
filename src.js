if (window.location.host != "www.amazon.co.jp") {
    console.log("This bookmarklet only works on Amazon.co.jp");
    return false;
}

// ASIN
const ASIN = document.querySelector("input#ASIN").value;

if (ASIN == null){
    console.log("ASIN not found");
    return false;
}

let textArea = document.createElement("textarea");
textArea.value = "https://www.amazon.co.jp/dp/" + ASIN
document.body.appendChild(textArea);
textArea.select();
document.execCommand("copy");
console.log("Amazon link " + textArea.value + " has been copied to your clipboard!");
textArea.remove();
