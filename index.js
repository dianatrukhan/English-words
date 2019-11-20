
let dataForTest = [];
 let words = document.getElementById('words-list');
 let translate = document.getElementById('translation');
 let addBtn = document.getElementById('add');

data.forEach(item => {
       let word = document.createElement('li'); 
      
       word.innerHTML = item["question"];
     
       word.addEventListener("click", () => {
   
      translate.innerHTML = item["question"];
     
      translate.innerHTML += '<br>';
      translate.innerHTML += item["variants"][item["answer"]];
      translate.innerHTML += '<br>';
      
      translate.innerHTML += "<button onclick = 'addBtn()'>Добавить к изучению</button>"
     
         addBtn = function () {
            //  if (JSON.parse(localStorage.getItem('dataForTest')) == item){
            //     alert('Слово уже добавлено к изучению.');
            //     return;
            //  }
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
