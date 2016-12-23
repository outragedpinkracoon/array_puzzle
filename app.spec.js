const assert = require('assert')
const app = require('./app')
const data = require('./data')

describe('app', () => {
	it('gets videos', () => {
		const expected = [
     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
   	];
		assert.deepEqual(app.getVideos(data), expected)
	})

	it('gets videos with undefined boxart', () => {
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
		assert.deepEqual(app.getVideos(data), expected)
	})

	it('gets id, title and boxart', () => {
		const data = [
			{ 'id': 70111470, 'title': 'title 1', 'other': 'meh',
				'boxarts': [
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg' },
            { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' }
          ]
      },
			{ 'id': 65432445, 'title': 'title 2', 'other': 'meh',
				 'boxarts': [
          { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
          { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg' }
         ]
      }
		]

		const expected = [
			{ 'id': 70111470, 'title': 'title 1', 'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg'},
			{ 'id': 65432445, 'title': 'title 2', 'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'}
		]
		assert.deepEqual(app.getDetails(data), expected)
	})

	it('gets boxart', () => {
		const data = [
      { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
		]
		const expected = 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'
		assert.deepEqual(app.getBoxart(data), expected)
	})
})
