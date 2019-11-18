// var data_array = [
//     ["Сколько сантиметров в метре?","10","1024","100","1000",3],
//     ["Перевод слова: Hello","Как дела?","Привет","Ты","Дом",2],
//     ["Перевод слова: Dog","Собака","Кошка","Дерево","Сосиска",1],
//     ["Сколько месяцев в году?","10","11","12","13",3],
//     ["Перевод слова: Tree","Три","Собака","Дерево","Дом",3],
//     ["Перевод слова: Wall","Стена","Дом","Башня","Война",1],
//   ];

// let data = [
//     {
//      "question": "Apple",
//      "variants": ["Банан", "Груша", "Яблоко", "Мандарин"],
//      "answer": "Яблоко"   
//     },

//      {
//          "question": "Grapes",
//          "variants": ["Клубника", "Виноград", "Помело", "Клюква"],
//          "answer": "Виноград"
//      },

//      {
//          "question": "Melon",
//          "variants": ["Дыня", "Арбуз", "Персик", "Мандарин"],
//          "answer": "Дыня"
//      },

//      {
//          "question": "Strawberry",
//          "variants": ["Голубика", "Виноград", "Ежевика", "Клубника"],
//          "answer": "Клубника"
//      }

//  ];

let plus = 0;
let currAnswer = 0;
let countAnswer = data.length;

let options = [];
options =  document.getElementsByClassName('option');
Array.prototype.forEach.call(options, element => {
    element.addEventListener ("click",()=>{
        check(Array.prototype.indexOf.call(options, element)+1);
    })
})

let startBtn = document.getElementById('start');
startBtn.addEventListener ("click",() => {
    check(0);
})



function check(num){
    let currVariants = data[currAnswer]["variants"];
    
    console.log(data[0]["answer"]);
    if(num == 0){ 
    
      Array.prototype.forEach.call(options, element => {
          element.style.display = 'block';
    
        element.innerHTML = currVariants[Array.prototype.indexOf.call(options, element)];
        
      })

      document.getElementById('question').innerHTML = data[currAnswer]["question"];
        
      document.getElementById('start').style.display = 'none';
      document.getElementById('end').style.display = 'inline';
      console.log(currVariants[data["answer"]]);
  }

  else
  {
    let answer = data[currAnswer]["answer"];
      if (num == answer) {
          plus++;
          document.getElementById('result').innerHTML='Верно!';
      }
      else {
          document.getElementById('result').innerHTML="Неверно! Правильный ответ: " +  data[currAnswer]["variants"][answer];
      }
          
      currAnswer++;
     
      
      if(currAnswer < countAnswer){
        Array.prototype.forEach.call(options, element => {
            element.innerHTML = currVariants[Array.prototype.indexOf.call(options, element)];
        })
          document.getElementById('question').innerHTML = data[currAnswer]["question"];
          
      }
      else
      { 
        Array.prototype.forEach.call(options, element => {
            element.style.display = 'none';
        })
          document.getElementById('question').style.display='none';
          document.getElementById('end').style.display='inline';
          
          let percent =  Math.round(plus/countAnswer*100);				
          let res = 'Плохо!';
          if(percent > 70) res = 'Хорошо!';
          if(percent == 100) res = 'Отлично!';
          
          document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + countAnswer + ' (' + percent + '%)<br>' + res;
      }
  }
}
 