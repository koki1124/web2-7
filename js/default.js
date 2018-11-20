var number=Math.floor(Math.random()*3);
var answer=parseInt(window.prompt('数あてゲーム。0～2の数字を入力！'));
var message;

for (var i=0;i<10;i++){
if(answer === number){
  message= 'あたり';
  break;
}else if (answer < number){
  message ='もっと大きいです';
}else if (number < answer){
  message = 'もっと小さいです';
}else{
  message = '0～3の数字を入力してください';
}
}

document.getElementById('choice').textContent = message;
