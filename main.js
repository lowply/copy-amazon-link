'use strict';

const fs = require('fs');
const Terser = require("terser");
const stripIndent = require('strip-indent');

function main() {
    const code = fs.readFileSync("copy-amazon-link.js", {encoding: "utf-8"});
    const out = Terser.minify(code, {mangle: false, compress: false, warnings: true}).code
    const md = `
        # Copy Amazon link bookmarklet

        Drag this link to your bookmark bar to save the bookmarklet:

        [Copy Amazon link](${out})

        See [github.com/lowply/copy-amazon-link](https://github.com/lowply/copy-amazon-link) for more information.
    `

    fs.writeFileSync("index.md", stripIndent(md), "utf8");
    fs.writeFileSync("copy-amazon-link.bookmarklet", out , "utf8");
}

main()
