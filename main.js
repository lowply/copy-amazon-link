'use strict';

const fs = require("fs");
const { minify } = require("terser");
const ejs = require("ejs");

async function main() {
    const code = fs.readFileSync("src/bookmarklet.js", {encoding: "utf-8"});
    const result = await minify(code, { sourceMap: false });
    const encoded = encodeURI(result.code)

    ejs.renderFile("src/index.ejs", {src: encoded}, function(err, out){
        if (err != null) {
            console.log(err);
            return false;
        }
        fs.writeFileSync("docs/index.md", out, "utf8");
    })
}

main()
