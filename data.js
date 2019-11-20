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

     {
        'question': 'Bird',
        'variants': ['Насекомое', 'Птица', 'Голубь', 'Сова'],
        'answer': 1
    },

    {
        'question': 'Book',
        'variants': ['Книга', 'Письмо', 'Газета', 'Лист'],
        'answer': 0
    },

    {
        'question': 'Bus',
        'variants': ['Поезд', 'Самолет', 'Автобус', 'Автомобиль'],
        'answer': 2
    },

    {
        'question': 'King',
        'variants': ['Король', 'Корона', 'Трон', 'Королева'],
        'answer': 0
    },

    {
        'question': 'West',
        'variants': ['Север', 'Юг', 'Запад', 'Восток'],
        'answer': 2
    },

    {
        'question': 'Ost',
        'variants': ['Север', 'Юг', 'Запад', 'Восток'],
        'answer': 3
    },

    {
        'question': 'North',
        'variants': ['Север', 'Юг', 'Запад', 'Восток'],
        'answer': 0
    },

    {
        'question': 'South',
        'variants': ['Север', 'Юг', 'Запад', 'Восток'],
        'answer': 1
    },

    {
        'question': 'Watch',
        'variants': ['Стол', 'Рубашка', 'Часы', 'Браслет'],
        'answer': 2
    },

    {
        'question': 'Wind',
        'variants': ['Ветер', 'Туман', 'Мороз', 'Холод'],
        'answer': 0
    },

    {
        'question': 'Week',
        'variants': ['Слабость', 'Число', 'Неделя', 'Дата'],
        'answer': 2
    },

    {
        'question': 'Tree',
        'variants': ['Гора', 'Куст', 'Холм', 'Дерево'],
        'answer': 3
    },

    {
        'question': 'Sound',
        'variants': ['Песня', 'Звук', 'Нота', 'Слово'],
        'answer': 1
    },

    {
        'question': 'Sentence',
        'variants': ['Предложение', 'Определение', 'Цитата', 'Пояснение'],
        'answer': 0
    },

    {
        'question': 'Letter',
        'variants': ['Бумага', 'Письмо', 'Мусор', 'Заметка'],
        'answer': 1
    },

    {
        'question': 'Mountain',
        'variants': ['Мох', 'Холм', 'Гора', 'Волна'],
        'answer': 2
    },
    {
        'question': 'Answer',
        'variants': ['Вопрос', 'Ответ', 'Ошибка', 'Значение'],
        'answer': 1
    },
    {
        'question': 'Child',
        'variants': ['Ребенок', 'Мальчик', 'Подросток', 'Друг'],
        'answer': 0
    },
    {
        'question': 'Picture',
        'variants': ['Отпечаток', 'Краска', 'Письмо', 'Картина'],
        'answer': 3
    },
    {
        'question': 'Pumpkin',
        'variants': ['Дыня', 'Тыква', 'Арбуз', 'Хурма'],
        'answer': 1
    },
    {
        'question': 'Word',
        'variants': ['Мир', 'Планета', 'Слово', 'Предложение'],
        'answer': 2
    },
    {
        'question': 'Paper',
        'variants': ['Бумага', 'Альбом', 'Сверток', 'Древесина'],
        'answer': 0
    },
 ];

 data.sort(function(a, b) {
    let x = a.question;
    let y = b.question;
    return x < y ? -1 : x > y ? 1 : 0;
 });