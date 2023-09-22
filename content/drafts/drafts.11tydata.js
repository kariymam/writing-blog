require('dotenv').config();

const isDevEnv = process.env.ELEVENTY_ENV === 'development';

module.exports = function() {
	return {
		eleventyComputed: {
			eleventyExcludeFromCollections: function(data) {
				if(isDevEnv) {
					return data.eleventyExcludeFromCollections;
				}
				else {
					return true;
				}
			},
			permalink: function(data) {
				if(!isDevEnv) {
					return false;
				}
				else if(data.permalink !== '') {
					return data.permalink;
				}
				else {
					return data.page.filePathStem.replace('/drafts/', '/blog/') + '/';
				}
			}
		}
	}
}
