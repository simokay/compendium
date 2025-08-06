module.exports = function (eleventyConfig) {

	// Copy `img and css` to `_site/`
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("css");


    eleventyConfig.addFilter("abilityModifier", function(value) {
        const modVal = Math.floor((value-10)/2)
        if(modVal < 0) {
            return modVal
        } else {
            return "+"+modVal
        }
    });

};