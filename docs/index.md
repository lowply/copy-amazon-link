# Copy Amazon link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

<a href="javascript:(()=>{const o=window.location.href;if(o.indexOf("https://www.amazon")<0)return console.log("This bookmarklet only works on Amazon"),!1;const e=o.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1],n=document.querySelector("#ASIN");if(null==n)return console.log("ASIN not found"),!1;let t=document.createElement("textarea");t.value=e+"/dp/"+n.value,document.body.appendChild(t),t.select(),document.execCommand("copy"),console.log("Amazon link "+t.value+" has been copied to your clipboard!"),t.remove()})();">Copy Amazon link</a>

See [github.com/lowply/copy-amazon-link](https://github.com/lowply/copy-amazon-link) for more information.
