
# Copy Amazon link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

[Copy Amazon link](javascript:(function(){!function()%7Bconst%20o=window.location.href;if(o.indexOf(%22https://www.amazon%22)%3C0)return%20console.log(%22This%20bookmarklet%20only%20works%20on%20Amazon%22),!1;const%20e=o.match(/%5Ehttps?:%5C/%7B2,%7D(.*?)(?:%5C/%7C%5C?%7C#%7C$)/)[1],n=document.getElementById(%22ASIN%22);if(null==n)return%20console.log(%22ASIN%20not%20found%22),!1;let%20t=document.createElement(%22textarea%22);t.value=e+%22/dp/%22+n.value,document.body.appendChild(t),t.select(),document.execCommand(%22copy%22),console.log(%22Amazon%20link%20%22+t.value+%22%20has%20been%20copied%20to%20your%20clipboard!%22),t.remove()%7D();})();)

See [github.com/lowply/copy-amazon-link](https://github.com/lowply/copy-amazon-link) for more information.