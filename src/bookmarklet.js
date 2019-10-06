javascript: (() => {
    if (window.location.href.indexOf("https://www.amazon") < 0) {
        console.log("This bookmarklet only works on Amazon");
        return false;
    }

    // The body of the mailto: link
    const swfMailTo = document.querySelector("#swfMailTo");

    if (swfMailTo == null){
        console.log("swfMailTo not found");
        return false;
    }

    // The decoded and unescaped body
    const body = unescape(decodeURI(swfMailTo.href));

    // Trim the text part from the body
    const fullLink = body.substring(body.indexOf("https://"));

    // Trim the ref part from the fullLink
    const link = fullLink.substr(0, fullLink.lastIndexOf("/"));

    if (link == null){
        console.log("Link not found")
        return false;
    }

    let textArea = document.createElement("textarea");
    textArea.value = link
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    console.log("Amazon link " + textArea.value + " has been copied to your clipboard!");
    textArea.remove();
})();
