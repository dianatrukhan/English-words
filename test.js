
// let dataForTest = [
//     {
//      'question': 'Apple',
//      'variants': ['Банан', 'Груша', 'Яблоко', 'Мандарин'],
//      'answer': 'Яблоко'   
//     },

//      {
//          'question': 'Grapes',
//          'variants': ['Клубника', 'Виноград', 'Помело', 'Клюква'],
//          'answer': 'Виноград'
//      },

//      {
//          'question': 'Melon',
//          'variants': ['Дыня', 'Арбуз', 'Персик', 'Мандарин'],
//          'answer': 'Дыня'
//      },

//      {
//          'question': 'Strawberry',
//          'variants': ['Голубика', 'Виноград', 'Ежевика', 'Клубника'],
//          'answer': 'Клубника'
//      }

//  ];\\


let plus = 0;
let currAnswer = 0;
dataForTest = JSON.parse(localStorage.getItem("dataForTest"));
let countAnswer = dataForTest.length;

let options = [];
options =  document.getElementsByClassName('option');
Array.prototype.forEach.call(options, element => {
    element.addEventListener ('click',()=>{
        check(Array.prototype.indexOf.call(options, element)+1);
    })
})

let startBtn = document.getElementById('start');
startBtn.addEventListener ('click', () => {
    check(0);
})

let endBtn = document.getElementById('end');




function check(num){
    
   
    if(num == 0){ 
    
      Array.prototype.forEach.call(options, element => {
          element.style.display = 'block';
    
        element.innerHTML = dataForTest[currAnswer]['variants'][Array.prototype.indexOf.call(options, element)];
        
      })

      document.getElementById('question').innerHTML = dataForTest[currAnswer]['question'];
        
      document.getElementById('start').style.display = 'none';
      document.getElementById('end').style.display = 'inline';
     
  }

  else
  {
    let answer = dataForTest[currAnswer]['answer'];
   
      if (num == answer + 1) {
          plus++; 
          document.getElementById('result').innerHTML = 'Верно!';
      }
      else {
          document.getElementById('result').innerHTML = 'Неверно! Правильный ответ: ' +  dataForTest[currAnswer]['variants'][answer];
      }
     
      currAnswer++;
     
     
      if(currAnswer < countAnswer){
        Array.prototype.forEach.call(options, element => {
            element.innerHTML = dataForTest[currAnswer]['variants'][Array.prototype.indexOf.call(options, element)];
        })
          document.getElementById('question').innerHTML = dataForTest[currAnswer]['question'];
          
      }
      else
      { 
        Array.prototype.forEach.call(options, element => {
            element.style.display = 'none';
        })
          document.getElementById('question').style.display = 'none';
          document.getElementById('end').style.display = 'inline';
           
          let percent =  Math.round(plus/countAnswer*100);				
          let res = 'Плохо!';
          if(percent > 70) res = 'Хорошо!';
          if(percent == 100) res = 'Отлично!';
          
          document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + countAnswer + ' (' + percent + '%)<br>' + res;
      }
  }

}


 