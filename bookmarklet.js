javascript:void%20function(){if(%22www.amazon.co.jp%22!=window.location.host)return%20console.log(%22This%20bookmarklet%20only%20works%20on%20Amazon.co.jp%22),!1;const%20a=document.querySelector(%22input%23ASIN%22).value;if(null==a)return%20console.log(%22ASIN%20not%20found%22),!1;let%20b=document.createElement(%22textarea%22);b.value=%22https://www.amazon.co.jp/dp/%22+a,document.body.appendChild(b),b.select(),document.execCommand(%22copy%22),console.log(%22Amazon%20link%20%22+b.value+%22%20has%20been%20copied%20to%20your%20clipboard!%22),b.remove()}();