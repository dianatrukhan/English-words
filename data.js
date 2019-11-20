let data = [
    {
        'question': 'Melon',
        'variants': ['Дыня', 'Арбуз', 'Персик', 'Мандарин'],
        'answer': 0
    },

    {
     'question': 'Apple',
     'variants': ['Банан', 'Груша', 'Яблоко', 'Мандарин'],
     'answer': 2  
    },

     {
         'question': 'Grapes',
         'variants': ['Клубника', 'Виноград', 'Помело', 'Клюква'],
         'answer': 1
     },

    
     {
         'question': 'Strawberry',
         'variants': ['Голубика', 'Виноград', 'Ежевика', 'Клубника'],
         'answer': 3
     },

 ];

 data.sort(function(a, b) {
    let x = a.question;
    let y = b.question;
    return x < y ? -1 : x > y ? 1 : 0;
 });