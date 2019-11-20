
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

let backBtn = document.getElementById('back');
backBtn.addEventListener ('click', () => {
  location.href = 'dictionary.html';
})

let questionBtn = document.getElementById('question');
let result = document.getElementById('result');


function check(num){
    if(num == 0){ 
    
      Array.prototype.forEach.call(options, element => {
          element.style.display = 'block';
    
        element.innerHTML = dataForTest[currAnswer]['variants'][Array.prototype.indexOf.call(options, element)];
        
      })

      questionBtn.innerHTML = dataForTest[currAnswer]['question'];
        
      startBtn.style.display = 'none';
  }

  else
  {
    let answer = dataForTest[currAnswer]['answer'];
      if (num == answer + 1) {
          plus++; 
          result.innerHTML = 'Верно!';
      }
      else {
          result.innerHTML = 'Неверно!' + '<br>' + 'Правильный ответ: ' + '<br>' + dataForTest[currAnswer]['variants'][answer];
      }
     
      currAnswer++;
      
      if(currAnswer < countAnswer){
        Array.prototype.forEach.call(options, element => {
            element.innerHTML = dataForTest[currAnswer]['variants'][Array.prototype.indexOf.call(options, element)];
        })
        questionBtn.innerHTML = dataForTest[currAnswer]['question'];
          
      }
      else
      { 
        Array.prototype.forEach.call(options, element => {
            element.style.display = 'none';
        })
        questionBtn.style.display = 'none';
           
          let percent =  Math.round(plus/countAnswer*100);				
          let res = 'Плохо!';
          if(percent > 70) res = 'Хорошо!';
          if(percent == 100) res = 'Отлично!';
          
          result.innerHTML='Правильных ответов: ' + plus + ' из ' + countAnswer + ' (' + percent + '%)<br>' + res;
      }
  }

}




 