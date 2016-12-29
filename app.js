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
	return movieLists.map(item => {
		return item.videos.map(({title, id, boxarts}) => ({
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
	return boxarts.reduce((curr, item) => {
		if(item.width == 150) return item.url + curr
		return curr
	}, '')
}

module.exports = transformMovies

