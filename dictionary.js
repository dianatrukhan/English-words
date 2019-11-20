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





let dataForTest = [];
 let words = document.getElementById('words-list');
 let translate = document.getElementById('translation');
 let addBtn = document.getElementById('add');
 //Array.prototype.sort.call(data, );
//  Array.prototype.forEach.call(data, item => {
//     let word = document.createElement('li'); 
//    // let translate = document.createElement('li'); 
//     word.innerHTML = item["question"];
  
//     word.addEventListener("click", () => {
      
//       addBtn.style.visibility = "visible";
//        translate.innerHTML = item["variants"][item["answer"]];
      
//       //  addBtn.innerHTML = "Добавить к изучению";
//       //  document.body.appendChild(addBtn);
      
//        addBtn.addEventListener("click", () =>{
//          dataForTest.push(item);
//          localStorage.setItem("dataForTest", JSON.stringify(dataForTest));
//       })
//     })

//     words.appendChild(word);
   
  
//  });

data.forEach(item => {
       let word = document.createElement('li'); 
      // let translate = document.createElement('li'); 
       word.innerHTML = item["question"];
     
       word.addEventListener("click", () => {
         
        // addBtn.style.display = "block";
      //   translate.innerHTML = '<p style = "color:white"></p>'item["question"];
      translate.innerHTML += item["variants"][item["answer"]];
         translate.innerHTML += "<button onclick = 'addBtn()'>Добавить к изучению</button>"
         //  addBtn.innerHTML = "Добавить к изучению";
         //  document.body.appendChild(addBtn);
         
         addBtn = function () {
             if (JSON.parse(localStorage.getItem('dataForTest')) == item){
                alert('Слово уже добавлено к изучению.');
                return;
             }
            dataForTest.push(item);
            localStorage.setItem("dataForTest", JSON.stringify(dataForTest));
         }
       })
   
       words.appendChild(word);
      
     
    });

 let clearBtn = document.getElementById("clear-test");
 clearBtn.addEventListener("click", () => {
   if (localStorage.length == 0) {
      alert ('В тесте нет слов.');
      return;
   }
   localStorage.clear();
   alert('Все слова из теста убраны.');
})


let startBtn = document.getElementById("start-test");
 startBtn.addEventListener("click", () => {
   if (localStorage.length == 0) {
      alert ('В тесте нет слов. Добавьте слова к изучению, чтобы начать тест.');
      return;
   }

   location.href = 'test.html';
})
