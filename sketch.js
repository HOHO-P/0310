let questionP, radio, input, submitButton, result;
let questions = [
  { question: "1 + 1 = ?", type: "multiple-choice", options: ["1", "2", "3", "4"], correct: "2" },
  { question: "2 + 2 = ?", type: "multiple-choice", options: ["2", "3", "4", "5"], correct: "4" },
  { question: "請填寫 3 + 3 的答案：", type: "fill-in-the-blank", correct: "6" }
];
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FAE1DF"); //買一張顏色紙

  textSize(50);

  // 顯示 "413730044 教科一B 何宣諭"
  let header = createP("413730044 教科一B 何宣諭");
  header.style('font-size', '50px');
  header.style('color', '#FF69B4'); // 設置文字顏色為亮粉色
  header.position(width / 2 - header.width / 2, 50);

  questionP = createP('');
  questionP.style('font-size', '50px');
  questionP.style('color', '#FF69B4'); // 設置文字顏色為亮粉色
  questionP.position(width / 2 - 250 /2 , height / 2 - 100);

  radio = createRadio();
  radio.style('font-size', '50px');
  radio.style('color', '#FF69B4'); // 設置文字顏色為亮粉色
  radio.position(width / 2 - radio.width / 2, height / 2 - 100);

  input = createInput();
  input.style('font-size', '50px');
  input.style('color', '#FF69B4'); // 設置文字顏色為亮粉色
  input.position(width / 2 - 250 / 2, height / 2);
  input.hide();

  submitButton = createButton('送出');
  submitButton.style('font-size', '50px');
  submitButton.style('color', '#FF69B4'); // 設置文字顏色為亮粉色
  submitButton.position(width / 2 - 120 , height / 2 + 70);
  submitButton.mousePressed(checkAnswer);

  result = createP('');
  result.style('font-size', '50px');
  result.style('color', '#FF69B4'); // 設置文字顏色為亮粉色
  result.position(width / 2 -120 , height / 2 + 70);

  loadNextQuestion();
}

function draw() { //畫圖
  background("#FAE1DF"); //不斷的塗上顏色
}

function loadNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    let question = questions[currentQuestionIndex].question;
    let type = questions[currentQuestionIndex].type;
    questionP.html(question);
    questionP.position(width / 2 - questionP.width / 2, height / 2 - 200); // 置中問題
    if (type === 'multiple-choice') {
      let options = questions[currentQuestionIndex].options;
      radio.html('');
      options.forEach(option => radio.option(option));
      radio.position(width / 2 - 250 / 2, height / 2); // 置中選項
      radio.show();
      input.hide();
    } else if (type === 'fill-in-the-blank') {
      radio.hide();
      input.position(width / 2 - input.width / 2, height / 2 - 100); // 置中填空題
      input.show();
    }
  } else {
    showResult();
  }
}

function checkAnswer() {
  const type = questions[currentQuestionIndex].type;
  let answer;
  if (type === 'multiple-choice') {
    answer = radio.value();
  } else if (type === 'fill-in-the-blank') {
    answer = input.value();
  }
  const correctAnswer = questions[currentQuestionIndex].correct;
  if (answer === correctAnswer) {
    correctCount++;
    result.html('答對了！');
  } else {
    incorrectCount++;
    result.html('答錯了！');
  }
  currentQuestionIndex++;
  loadNextQuestion();
}

function showResult() {
  questionP.html('測驗結束');
  radio.hide();
  input.hide();
  submitButton.hide();
  result.html(`答對題數: ${correctCount}, 答錯題數: ${incorrectCount}`);
}S
