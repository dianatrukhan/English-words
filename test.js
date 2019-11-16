let plus = 0;
let currAnswer = 0;
let countAnswer = qAndA.length;

let options = [];
options =  document.getElementsByClassName('option');
Array.prototype.forEach.call(options, element => {
    element.addEventListener ("click",()=>{
        check(Array.prototype.indexOf.call(options, element)+1);
    })
})

let startBtn = document.getElementById('start');
startBtn.addEventListener ("click",()=>{
    check(0);
})

function check(num){

    if(num == 0){ 
    
      Array.prototype.forEach.call(options, element => {
          element.style.display = 'block';
          element.innerHTML = qAndA[currAnswer][Array.prototype.indexOf.call(options, element)+1];
      })

      document.getElementById('question').innerHTML=qAndA[currAnswer][0];
        
      document.getElementById('start').style.display='none';
      document.getElementById('end').style.display='inline';
  }else{

      if( num ==  qAndA[currAnswer][5]){
          plus++;
          document.getElementById('result').innerHTML='Верно!';
      }else{
          document.getElementById('result').innerHTML="Неверно! Правильный ответ: " + qAndA[currAnswer][qAndA[currAnswer][5]];
      }
          
      currAnswer++;
      if(currAnswer < countAnswer){
        Array.prototype.forEach.call(options, element => {
            element.innerHTML = qAndA[currAnswer][Array.prototype.indexOf.call(options, element)+1];
        })
          document.getElementById('question').innerHTML=qAndA[currAnswer][0];
          
      }else{
          
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
 