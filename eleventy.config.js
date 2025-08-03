module.exports = function (eleventyConfig) {

	// Copy `img and css` to `_site/`
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("css");


    eleventyConfig.addFilter("abilityModifier", function(value) {
        return Math.floor((value-10)/2)
    });

};