function checkout() {
  var information = new Information(document.getElementById('class-name').value,
                                    document.getElementById('id-number').value,
                                    document.getElementById('student-name').value);
  if(!information.check()){
    return false;
  }

  var score = new Score();

  FillInBlanks.checkAnwser(score);
  SingleChoose.checkAnwser(score);
  MultiChoose.checkAnwser(score);
  Judge.checkAnwser(score);
  Subjective.checkAnwser(score);

  score.showScore();
}
