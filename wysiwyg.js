// Create an array of objects that represents famous people (see structure below).
// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

var peopleArray = [
  {title: "Activist,",
  name: "Mahatma Gandhi",
  bio: "The leader of the Indian independence movement in British-ruled India.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/330px-Portrait_Gandhi.jpg",
  lifespan: {
    birth: 1869,
    death: 1948
    }},
  {title: "Humanitarian,",
  name: "Martin Luther King Jr.",
  bio: "The leader of the African-American Civil Rights Movement.",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
  lifespan: {
    birth: 1929,
    death: 1968
  }
 }   
]

var container =  document.getElementById("container");
for (var i = 0; i < peopleArray.length; i++) {
container.innerHTML += "<div class='person'><header id ='hdr'>" + "Title and Name:   " + peopleArray[i].title + " "+ peopleArray[i].name + "</header>" + "<section id='sect'><p id='bio'>"+peopleArray[i].bio + "</p>"+ "<img src =" + peopleArray[i].image +">"+ "</section>" + "<footer id ='foot'>" + "Lifespan:"+ peopleArray[i].lifespan.birth + " to  "+ peopleArray[i].lifespan.death + "</footer>"  + "</div>";
    }

// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing. NOTE 1
container.addEventListener("click", function(event){
    //thePerson variable finds the closest div with a class of person to what you have clicked on
    var thePerson = event.target.closest('.person');
    thePerson.classList.add("dottedBorder");
    document.getElementById("textInput").focus();
    grabInput(thePerson);
  });

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
function grabInput(temp){
  console.log("temp",temp );
  //bioText starts with the temp input (which is teh whole .person element)
  // Then it selects all the children and chooses the one in the 1 index - which is the section with id=sect
  //then it selects all the children of that one and takes the 0 index - which is the p tag with the id=bio
  var bioText = temp.children[1].children[0];
  document.getElementById("textInput").addEventListener("keypress", function(e){
    var input = document.getElementById("textInput").value
    bioText.innerHTML = input;
    if(e.keyCode === 13)
    {
      document.getElementById("textInput").value  = "";  
    }
  });
}
