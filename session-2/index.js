// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
console.log("Hello Everyone!")

function listDomElements() {
  const children = document.body.childNodes

    for ( let i = 0; i < children.length; i = i + 1) {
        console.log(children (i))
    }
}
console.log(document.querySelector('.about').innerHTML);
console.log(document.querySelectorAll('.about'));