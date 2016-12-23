  // should return something in the following format:
  // [
  //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];
  // WITHOUT using any index references (i.e. you can't reference a specific location in an array with thing[0])
  // i.e. using just map, filter and concatAll(which is basically flatten)
  // You cannot use .toString(), .join(), .split()
  // the array should only contain items for movies that have boxarts with width: 150
