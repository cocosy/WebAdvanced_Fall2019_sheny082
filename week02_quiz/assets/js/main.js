(function() {
  var questions = [{
    question: "Buy a Krabby Patty?",
    choices: [ "Yes","No"],

  }, {
    question: "SpongeBob is making it for you. Please tip.",
    choices: ["$5", "No tip"],

  }, {
    question: "So What do you want to order?",
    choices: ["Sushi","I want it for free!"],

  }];

  var result = [{
  title : "SpongeBob made you a double-layer Krabby Patty!",},{
  title : "SpongeBob is quitting this job", },{
  title: "You are not welcomed BYE!",},{
  title: "Free?! Nobody eats at my restaurant for free!",}
  ];
 
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var num;
  

  
 
  // Display initial question
  displayNext();

 // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      $('#result').remove();

      if(questionCounter < questions.length){

        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if(questionCounter !== 0){
          $('#prev').show();
          $('#next').show();
        
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();

        }
      }else {
        var endingElem = displayResult();
        quiz.append(endingElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
 
    
  }







   // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    choose();
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    if(quiz.is(':animated')) {
      return false;
    }
      questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });









  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
      e.preventDefault();
    
    // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
      return false;
      }
      choose();
    
      // If no user selection, progress is stopped
     if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
      }
      else if(questionCounter === 0 && selections[selections.length-1] === 1)
      { questionCounter +=2;}
      else if(questionCounter === 1)
      {questionCounter +=2;}
      else{questionCounter ++;}

   //console.log(selections[selections.length-1]);
      
      displayNext();
    
  });
  
 
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Q' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;

  }
  


  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Computes and returns a paragraph element to be displayed
  function displayResult() {
    var ending = $('<p>',{id: 'question'});

      //check user answers:

           if(selections[0] === 0 && selections[1] === 0 ) {
    num = 0;
    }else if(selections[0] === 0 && selections[1] === 1 ){
    num =1;

  }else if(selections[0] === 1 && selections[2] === 0){
    num =2;
    
  }else if(selections[0] === 1 && selections[2] === 1){
    num = 3;}




   // var header = $('<h2>Q' + (index + 1) + ':</h2>');
   //  qElement.append(header);


         // for (var i = 0; i < selections.length; i++) {
    ending.append(result[num].title);


    return ending;


  }
})();



