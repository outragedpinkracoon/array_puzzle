const assert = require('assert')
const transformMovies = require('./app')
const data = require('./data')

describe('app', () => {
	it('transforms movies', () => {
		const expected = [
     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
   	];
		assert.deepEqual(transformMovies(data), expected)
	})

	it('gets movies with undefined boxart', () => {
		const data = [
			{
				videos: [ { 'id': 70111470, 'title': 'title 1', 'other': 'meh'} ]
			},
			{
				videos: [ { 'id': 65432445, 'title': 'title 2', 'other': 'meh'} ]
			}
		]

		const expected = [
			{ 'id': 70111470, 'title': 'title 1', 'boxart': undefined },
			{ 'id': 65432445, 'title': 'title 2', 'boxart': undefined }
		]
		assert.deepEqual(transformMovies(data), expected)
	})
})
