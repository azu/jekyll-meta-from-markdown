# jekyll-meta-from-markdown

Create Jekyll Front Matter from single markdown contents.

## Installation

    jekyll-meta-from-markdown

## Usage

``` 
var jekyllMatter = require("jekyll-meta-from-markdown");
jekyllMatter(input); // => output
```

#### input

    # Title
    
    test text
    
    * item 1
    * item 2

#### output

    ---
    layout: post
    title: "Title"
    date: 2014-09-08T21:38:00.000Z
    ---
    
    test text
    
    * item 1
    * item 2

### Options

`jekyll-meta-from-markdown` can accept options object as seconde argument.

``` 
var jekyllMatter = require("jekyll-meta-from-markdown");
var options = {
    date : new Date()
}
jekyllMatter(input, options); // => output
```

- `date`  : {Date} - Date object
- `author`: {String} - author name

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT