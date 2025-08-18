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

    eleventyConfig.addFilter("brackets", function(value) {
        const re = new RegExp(String.raw`(\[\[([^\]]+)\]\])`, "gim");
        return value.replace(re, function(s,m1,m2){
            return `<a href="${eleventyConfig.getFilter("url")('/spells/'+ m2)}">${m2}</a>`;
        })
    });
};

