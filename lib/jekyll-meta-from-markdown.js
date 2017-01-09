/**
 * Created by azu on 2014/09/09.
 * LICENSE : MIT
 */
"use strict";
var merge = require("lodash.merge");
function createFrontMatter(options) {
    var title = options.title;
    var stack = [
        '---',
        'layout: post',
        'title: "' + title.trim() + '"'
    ];
    if (options.author) {
        stack.push('author: ' + options.author);
    }
    if (options.date && options.date instanceof Date) {
        stack.push('date: ' + options.date.toISOString());
    } else {
        stack.push('date: ' + (new Date).toISOString());
    }
    if (options.tags && options.tags instanceof Array) {
      stack.push("tags:\n  - " + options.tags.join("\n  - "));
    }
    stack.push('---');
    return  stack.join("\n")
}
function jekyllFrontMatter(text, options) {
    var lines = text.split("\n");
    if (lines.length === 0) {
        throw new Error("no content");
    }
    var firstLine = lines[0];
    var headerMatch = /^#+(.*)$/;
    if (!headerMatch.test(firstLine)) {
        throw new Error("1st line must to beheader");
    }
    var match = firstLine.match(headerMatch);
    var title = match && match[1];
    lines[0] = createFrontMatter(merge({
        title: title
    }, options));
    return lines.join("\n");
}
module.exports = jekyllFrontMatter;