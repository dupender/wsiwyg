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

// Create an array of objects that represents famous people (see structure below).
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
// for Header element:
container.addEventListener("click", function(event){
  // console.log("event",event );
  // if(event.target.id === "hdr" ||"footer"){
    tgt = event.target;
    tgt.classList.add("dottedBorder");
    document.getElementById("textInput").focus();
    var bio= document.getElementById("bio"); 
    grabInput(event.target);
    // console.log(document.getElementById("bio").innerHTML);
    // }
  });

// NOTE 1 for section element:
// container.addEventListener("click", function(event){
//   console.log("event",event.target );
//   if(event.srcElement.parentElement.id === "sect"){
//     tgt = event.srcElement.parentNode;
//     tgt.classList.add("dottedBorder");
//     document.getElementById("textInput").focus();
//     var bio= document.getElementById("bio"); 
//     grabInput(event.target);
//     // document.getElementById("bio").innerHTML = document.getElementById("textInput").value;
//     }
  // });

// NOTE 1 for 
// container.addEventListener("click", function(event){
//   console.log("event",event );
//   if(event.target.id === "foot"){
//     tgt = event.target;
//     tgt.classList.add("dottedBorder");
//     document.getElementById("textInput").focus();
//     // document.getElementById("bio").innerHTML = document.getElementById("textInput").value;
//     }
//   });

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
function grabInput(temp){
document.getElementById("textInput").addEventListener("keypress", function(){
  var input = document.getElementById("textInput").value
  temp.innerHTML = input;
});
}
// document.getElementById("sect").addEventListener("mouseover", function(){
//     document.getElementById("bio").innerHTML = document.getElementById("textInput").value;
// });

// document.getElementById("foot").addEventListener("mouseover", function(){
//     document.getElementById("bio").innerHTML = document.getElementById("textInput").value;
// });








