var app = function(){
  var src = "https://static.tumblr.com/c1f89b11cd6a3ee36569ceeb0dd68b97/ch8ksnx/MJfo76s52/tumblr_static_tumblr_static_7j4q1juw448woo4w4og884kc8_640.jpg";
  addCat("Percy", "marshmallows", src);
}

var addCat = function(name, food, src){
  var catUl = createCatUl();
  var liName = createCatNameLi(name);
  var liFood = createCatFoodLi(food);
  var liPicture = createCatPictureLi(500, src);

  var catSection = document.getElementById("cats");
  appendAllTheThings(catSection, catUl, liName, liFood, liPicture);
}

var appendAllTheThings = function(catSection, catUl, liName, liFood, liPicture){
  catUl.appendChild(liName);
  catUl.appendChild(liFood);
  catUl.appendChild(liPicture);
  catSection.appendChild(catUl);
}

var createCatUl = function(){
  var catUl = document.createElement('ul');
  catUl.classList.add("cat");
  return catUl;
}

var createCatNameLi = function(name){
  var liName = document.createElement('li');
  liName.innerText = "Name: "+name;
  return liName;
}

var createCatFoodLi = function(food){
  var liFood = document.createElement('li');
  liFood.innerText = "Favourite food: "+food;
  return liFood;
}

var createCatPictureLi = function(width, src){
  var catImage = createCatImage(width, src);
  var liPicture = document.createElement('li');
  liPicture.appendChild(catImage);
  return liPicture;
}

var createCatImage = function(width, src){
  var catImage = document.createElement('img');
  catImage.width = width;
  catImage.src = src;
  return catImage;
}

window.addEventListener('load', app);

// ROUGH AND READY VERSION BELOW ----------------------------------

// var app = function(){
//
//   var catUl = document.createElement('ul'); //creates a new <ul>
//   catUl.classList.add("cat");  //adds the class 'cat'
//
//   //create <li> for name with text inside
//   var liName = document.createElement('li');
//   liName.innerText = "Name: Percy";
//   console.log("liName", liName);
//
//   var liFood = document.createElement('li');
//   liFood.innerText = "Favourite food: Marshmallows";
//   console.log(liFood);
//
//   var liPicture = document.createElement('li');
//   var catImage = document.createElement('img');
//   catImage.src = "https://static.tumblr.com/c1f89b11cd6a3ee36569ceeb0dd68b97/ch8ksnx/MJfo76s52/tumblr_static_tumblr_static_7j4q1juw448woo4w4og884kc8_640.jpg";
//   catImage.width = 500;
//
//   //add the image to the ul element
//   liPicture.appendChild(catImage);
//
//   //add the <li> elements to the <ul> element
//   catUl.appendChild(liName);
//   catUl.appendChild(liFood);
//   catUl.appendChild(liPicture);
//
//   //get hold of section with id="cats"
//   var catSection = document.getElementById("cats");
//   catSection.appendChild(catUl);
// }
