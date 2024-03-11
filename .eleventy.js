const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass)
    eleventyConfig.addPassthroughCopy('src/-')
    eleventyConfig.addPassthroughCopy({
      'node_modules/masonry-simple/dist/masonry-simple.min.js': '-/scripts/masonry-simple.min.js'
    })
    return {
      passthroughFileCopy: true,
      dir: {
        input: 'src',
        includes: '_includes',
        data: '_data',
        output: 'public',
      },
    }
}