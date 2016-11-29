
    
    var arr = [{
            name: 'Елена', 
            sname: 'Степаненко',
            age: 18, 
            sex: 'женский',
            languages: 'js, php, java'
        },
        {
            name: 'Анатолий', 
            sname: 'Салий',
            age: 34, 
            sex: 'мужcкой',
            languages: 'js, с++, html, css'
        },
        {
            name: 'Полина', 
            sname: 'Червоненко',
            sex: 'женский',
            age: 23, 
            languages: 'js, html, css, php, c++'
        },
        {
            name: 'Олег', 
            sname: 'Кузнецов',
            age: 38, 
            sex: 'мужчина',
            languages: 'html, css'
        }];

    var person = {};


    function ask() {
        do {
         person = {
            name: prompt("Введите имя:"),
            sname: prompt("Введите фамилию:"),
            age: +prompt("Введите возраст:"),
            sex: prompt("Введите пол (мужcкой/женский)"),
            language: langs() 
        };
        arr.push(person);
        repeater = confirm("Пройти заполнение еще раз?");
        } while (repeater);
    }

    function say() {
        for (var i = 0; i < arr.length; i++) {
        for (field in arr[i]) {
            document.write(field + ':' + arr[i][field] + '<br>');
        }
        document.write('<hr>')  
        }
    }


        function langs() {
        var lang_arr = [];
        var language;
        do {
            language = prompt('Каким языком программирования владеете?');
            lang_arr.push(language);
            repeater = confirm("Добавить еще язык?");
        } while(repeater);
        return lang_arr;
    }
 
    ask();
    say(); 



  //delete by name
    function ButtonDel() {
        var name = prompt("Введите имя для удаления");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name == name) {
                arr.splice(i, 1);
        }
    }
    say();
    };

    //delete by Number
    function ButtonDelNumb() {
        var personNum = prompt("Введите номер по списку для удаления");
        for (i = 0; i < arr.length; i++) {
            if (i+1 == personNum) {
                delete arr[i];
                arr.splice(i, 1);
            } 
    }
        say();
    }







    