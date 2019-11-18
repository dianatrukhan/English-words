// let words = document.getElementById('words-list');
// // create an element
// const createNode = (elem) => {
//     return document.createElement(elem);
// };

// // append an element to parent
// const appendNode = (parent, elem) => {
//     parent.appendChild(elem);
// }

// fetch('./data.json').then(response => {
//     return response.json();
//   }).then(data => {
//     let ul = createNode('ul');
//     Array.prototype.forEach.call(data, element => {
//         appendNode(ul, element["question"]);
//     })

//     console.log(data);
//   }).catch(err => {
 
//     console.log('The request failed!'); 
//   });



 let words = document.getElementById('words-list');
 let translates = document.getElementById('translates-list');
 Array.prototype.forEach.call(data, item => {
    let word = document.createElement('li'); 
    let translate = document.createElement('li'); 
    word.innerHTML = item["question"];
  
    word.addEventListener("click", () => {
        translate.innerHTML = item["answer"];
    })
    translates.appendChild(translate);
    words.appendChild(word);
   
  
 });

