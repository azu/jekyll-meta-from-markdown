/**
 * Created by azu on 2014/09/09.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var jekyllMatter = require("../lib/jekyll-meta-from-markdown");
var fs = require("fs");
describe("jekyll-meta-from-markdown-test", function () {
    describe("when input text has title", function () {
        var input = fs.readFileSync(__dirname + "/fixtures/input.markdown", "utf-8");
        var output = fs.readFileSync(__dirname + "/fixtures/output.markdown", "utf-8");
        it("should return text contain jekyll front matter", function () {
            assert.equal(jekyllMatter(input,{
                date : new Date("2014-09-08T21:38")
            }), output);
        });
    });
    describe("when input text has not title", function () {
        it("should occur exception", function () {
            assert.throws(function(){
                jekyllMatter("no title text");
            });
        });
    });
});
