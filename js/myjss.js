
function addPrimaryElements () {
  var child; 
  var parent; 

  // wrapper
  child = document.createElement('div');
  child.className = 'wrapper';
  document.body.appendChild(child);

  // title of the test
  child1 = document.createElement('h1');
  child1.innerHTML = "Тест по программированию";
  parent = document.querySelector('.wrapper'); //объявили wrapper родителем
  parent.appendChild(child1); //добавили в родитель h1

  // form-paretn for questions and answers
  child2 = document.createElement('form');
  parent = document.querySelector('.wrapper');
  parent.appendChild(child2);
};
addPrimaryElements ();


function addQuestionsAndAnswers (questions, answers) {
  for (var i = 1; i <= questions; i++) {  //основной цикл
    createQuestion(i); 
    for (var j = 1; j <= answers; j++) {  //вложнный в I-ЦИКЛ метод
      createAnswer(j);  
    };
  };  
}


function createQuestion (amountQuestions) {  //createQuestion(i)==createQuestion (amountQuestions)
  var child; 
  var parent; 

  child = document.createElement('h3');
  child.className="test_question";
  child.innerHTML = 'Вопрос №' + amountQuestions;
  parent = document.querySelector('form');
  parent.appendChild(child);
};


function createAnswer (amountAnswers) {
  var child; 
  var parent; 

  // input[type="checkbox"]
  child = document.createElement('input');
  child.setAttribute("type", "checkbox");
  child.setAttribute("id", "answer_" + amountAnswers);
  parent = document.querySelector('form'); 
  parent.appendChild(child);

  // label for input[type="checkbox"]
  child = document.createElement('label');
  child.setAttribute("for", "answer_" + amountAnswers);
  child.innerHTML = "Вариант ответа №" + amountAnswers + '<br>'  
  parent.appendChild(child);
};


function addButton () {
  var child; 
  var parent; 

  child = document.createElement('input');
  child.setAttribute("type", "submit");
  child.setAttribute("value", "Проверить результат");
  parent = document.querySelector('form');    
  parent.appendChild(child);
};

addQuestionsAndAnswers (3, 3);
addButton ();

