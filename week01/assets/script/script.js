/*global variables  at top
then local variables
*/

var information ="Hello Hi yo";
var attributes =["blue","green","orange","grey"];
// array start with 0 and use bracket


console.log("Hello");
// alert("Greetings"+" "+information);


document.write("<p>"+ information+"</p>");

console.log(attributes[0]);

var myMSG = document.getElementsByClassName('msg');

//   for(var i=0; i<attributes.length;i++){
//     document.write("<p>"+ attributes[i]+"</p>");
for(var i=0; i< myMSG.length;i++){
    myMSG[i].innerHTML = attributes[i];
 //  console.log("hid");
}



