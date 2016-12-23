const data = require('./data')

Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(subArrayItem) {
      results.push(subArrayItem)
    })
  });

  return results;
};

const transformMovies = (movieLists) => {
	return movieLists
				.map(item => item.videos)
				.map(videos => {
					return videos.map(({title, id, boxarts}) => ({
							title,
							id,
							boxart: getBoxart(boxarts)
						})
					)
				})
				.concatAll()

}

const getBoxart = (boxarts) => {
	if(!boxarts) return
	return boxarts.filter(x => x.width == 150)
								.map(x => x.url)
								.reduce(((curr, item) => item + curr), '')
}

module.exports = transformMovies

