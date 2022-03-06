javascript: (() => {
    if (window.location.href.indexOf("https://www.amazon") < 0) {
        console.log("This bookmarklet only works on Amazon");
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
})();
