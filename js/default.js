var number=Math.floor(Math.randam()*3);
var answer=ParseInt(window.prompt('数あてゲーム。0～2の数字を入力！'));

var message;
if(answer === number){
  message= 'あたり';
}else if (answer < number){
  message ='もっと大きいです';
}else if (number < answer){
  message = 'もっと小さいです';
}else{
  message = '0～3の数字を入力してください');
}

document.getElementById('choice').textContent = message;
