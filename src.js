if (window.location.host != "www.amazon.com" && window.location.host != "www.amazon.co.jp") {
    console.error("This bookmarklet only works on Amazon.com or Amazon.co.jp");
    return false;
}

const ASIN = document.querySelector("input#ASIN");

if (!ASIN) {
    console.error("ASIN not found");
    return false;
}

const link = `https://${window.location.host}/dp/${ASIN.value}`
navigator.clipboard.writeText(`https://${window.location.host}/dp/${ASIN.value}`);
