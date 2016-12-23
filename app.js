const data = require('./data')

Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    // Add all the items in each subArray to the results array.
    subArray.forEach(function(subArrayItem) {
      results.push(subArrayItem)
    })
  });

  return results;
};

const getVideos = (movieLists) => {
	return movieLists.map(item => item.videos)
									 .map(videos => {
									 		return videos.map(({title, id, boxarts}) => ({
													title,
													id,
													boxart: boxarts.filter(x => x.width == 150)
											 									 .map(x => x.url)
											 									 .reduce(((curr, item) => item + curr), '')
												})
											)
									 	})
									 .concatAll()

}

const getVideos2 = (movieLists) => {
	return movieLists.map(item => item.videos)
									 .map(video => getDetails(video))
									 .concatAll()
}

const getDetails = (videos) => {
	return videos.map(({title, id, boxarts}) => ({
			title,
			id,
			boxart: getBoxart(boxarts)
		})
	)
}

const getBoxart = (boxarts) => {
	if(!boxarts) return

	return boxarts.filter(x => x.width == 150)
											 .map(x => x.url)
											 .reduce(((curr, item) => item + curr), '')
}

module.exports = {
	getVideos,
	getDetails,
	getBoxart
}

