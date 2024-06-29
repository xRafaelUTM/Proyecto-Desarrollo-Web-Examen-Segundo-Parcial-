let questions = [
    {
      numb: 1,
      question: "¿Cuál es el juego más vendido de todos los tiempos?",
      answer: "Minecraft",
      options: [
        "Fortnite",
        "Minecraft",
        "The Legend of Zelda",
        "Among Us"
      ]
    },
    {
      numb: 2,
      question: "¿Quién es el creador de la famosa saga de videojuegos 'Super Mario'?",
      answer: "Shigeru Miyamoto",
      options: [
        "Hideo Kojima",
        "Shigeru Miyamoto",
        "Satoru Iwata",
        "Yoko Taro"
      ]
    },
    {
      numb: 3,
      question: "¿Qué red social popular se basa en compartir fotos y vídeos cortos?",
      answer: "Instagram",
      options: [
        "Twitter",
        "Instagram",
        "Facebook",
        "Reddit"
      ]
    },
    {
      numb: 4,
      question: "¿Cómo se llama el protagonista de la serie 'Stranger Things' que tiene poderes telequinéticos?",
      answer: "Eleven",
      options: [
        "Mike",
        "Dustin",
        "Lucas",
        "Eleven"
      ]
    },
    {
      numb: 5,
      question: "¿Cuál es el nombre del robot asistente virtual desarrollado por Apple?",
      answer: "Siri",
      options: [
        "Alexa",
        "Cortana",
        "Siri",
        "Google Assistant"
      ]
    },
    {
      numb: 6,
      question: "¿Qué personaje del Universo Marvel es conocido como 'El Hombre Araña'?",
      answer: "Spider-Man",
      options: [
        "Iron Man",
        "Hulk",
        "Spider-Man",
        "Capitán América"
      ]
    },
    {
      numb: 7,
      question: "¿Cuál es el nombre del hechicero más famoso de la saga de libros escrita por J.K. Rowling?",
      answer: "Harry Potter",
      options: [
        "Gandalf",
        "Harry Potter",
        "Merlin",
        "Dumbledore"
      ]
    },
  
    {
      numb: 8,
      question: "¿En qué año se lanzó la primera PlayStation de Sony?",
      answer: "1994",
      options: [
        "1989",
        "1994",
        "2000",
        "1998"
      ]
    },
  
    {
      numb: 9,
      question: "¿Cuál es el nombre de la princesa en la serie de videojuegos 'The Legend of Zelda'?",
      answer: "Zelda",
      options: [
        "Peach",
        "Zelda",
        "Daisy",
        "Samus"
      ]
    },
  
    {
      numb: 10,
      question: "¿Qué película animada de Disney cuenta la historia de dos hermanas y un reino congelado?",
      answer: "Frozen",
      options: [
        "Tangled",
        "Frozen",
        "Moana",
        "Brave"
      ]
    },
    {
      numb: 11,
      question: "¿Cuál es el nombre del villano principal en la serie de películas de 'Star Wars'?",
      answer: "Darth Vader",
      options: [
        "Darth Maul",
        "Darth Vader",
        "Kylo Ren",
        "Emperor Palpatine"
      ]
    },
    {
      numb: 12,
      question: "¿Qué videojuego popular incluye una isla donde los jugadores se enfrentan entre sí hasta que solo queda uno?",
      answer: "Fortnite",
      options: [
        "Apex Legends",
        "Fortnite",
        "PUBG",
        "Call of Duty: Warzone"
      ]
    },
  
    {
      numb: 13,
      question: "¿Qué superhéroe de DC Comics es conocido como 'El Caballero de la Noche'?",
      answer: "Batman",
      options: [
        "Superman",
        "Aquaman",
        "Batman",
        "Flash"
      ]
    },
    {
      numb: 14,
      question: "¿Cuál es el nombre del parque temático de Disney situado en Florida?",
      answer: "Disney World",
      options: [
        "Disneyland",
        "Disney World",
        "Epcot",
        "Magic Kingdom"
      ]
    },
    {
      numb: 15,
      question: "¿Cómo se llama el lugar donde vive Bob Esponja?",
      answer: "Fondo de Bikini",
      options: [
        "Atlantis",
        "Fondo de Bikini",
        "Ciudad Medusa",
        "La Roca de Patricio"
      ]
    }
  ];


const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

let timeValue = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Se acabo el tiempo"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show"); 
        }
    }
}

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 20; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore == 15){ 
        let scoreTag = '<span><p>¡PUNTAJE PERFECTO! 🎉, Tienes ' + userScore + ' de ' + questions.length + ' ¡¡¡¡FELICIDADES!!!! </p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore == 14){ 
        let scoreTag = '<span><p> ¡EXCELENTE TRABAJO! 😎, Tienes ' + userScore + ' de ' + questions.length + ' ¡CASI PERFECTO!</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore >= 10){ 
        let scoreTag = '<span><p>¡MUY BUEN TRABAJO! 👍, Tienes ' + userScore + ' de ' + questions.length + ' ¡SIGUE ASÍ!</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore >= 5){ 
        let scoreTag = '<span><p>¡BUEN INTENTO! 😊, Tienes ' + userScore + ' de ' + questions.length + ' ¡PUEDES MEJORAR!</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore >= 1){ 
        let scoreTag = '<span><p>¡SIGUE INTENTANDO! 💪, Tienes ' + userScore + ' de ' + questions.length + ' ¡NO TE RINDAS!</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span><p>¡LO SIENTO! 😐, Tienes ' + userScore + ' de ' + questions.length + ' ¡INTÉNTALO NUEVAMENTE!</p></span>';
        scoreText.innerHTML = scoreTag;
    }    
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}

function queCounter(index){
    
    let totalQueCounTag = '<span><p>Pregunta '+ index +'</p> de <p>'+ questions.length +'</p>..</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(20); 
    startTimerLine(0); 
}

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Tiempo restante"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}

quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 39);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}