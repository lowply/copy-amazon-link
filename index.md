
# Copy Amazon link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

[Copy Amazon link](javascript:(()=>{const url=window.location.href;if(url.indexOf("https://www.amazon")<0){console.log("This bookmarklet only works on Amazon");return false}const site=url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];const asin=document.querySelector("#ASIN");if(asin==null){console.log("ASIN not found");return false}let textArea=document.createElement("textarea");textArea.value=site+"/dp/"+asin.value;document.body.appendChild(textArea);textArea.select();document.execCommand("copy");console.log("Amazon link "+textArea.value+" has been copied to your clipboard!");textArea.remove()})();)

See [github.com/lowply/copy-amazon-link](https://github.com/lowply/copy-amazon-link) for more information.
    