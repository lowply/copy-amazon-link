javascript:(function(){
	const url = window.location.href;

    if (url.indexOf("https://www.amazon") < 0) {
		console.log("This bookmarklet only works on Amazon");
        return false;
	}

    const site = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
	const selected = document.getElementById("ASIN");

    if (selected == null){
        console.log("ASIN not found")
        return false;
    }

    let textArea = document.createElement("textarea");
    textArea.value = site + "/dp/" + selected.value
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    console.log("Amazon link " + textArea.value + " has been copied to your clipboard!");
    textArea.remove();
})();
