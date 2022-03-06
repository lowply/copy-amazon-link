# Copy Amazon link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

[Copy Amazon link](javascript:(()=%3E%7Bif(window.location.href.indexOf(%22https://www.amazon%22)%3C0)return%20console.log(%22This%20bookmarklet%20only%20works%20on%20Amazon%22),!1;const%20o=document.querySelector(%22input#ASIN%22).value;if(null==o)return%20console.log(%22ASIN%20not%20found%22),!1;let%20e=document.createElement(%22textarea%22);e.value=%22https://www.amazon.co.jp/dp/%22+o,document.body.appendChild(e),e.select(),document.execCommand(%22copy%22),console.log(%22Amazon%20link%20%22+e.value+%22%20has%20been%20copied%20to%20your%20clipboard!%22),e.remove()%7D)();)

See [github.com/lowply/copy-amazon-link](https://github.com/lowply/copy-amazon-link) for more information.
