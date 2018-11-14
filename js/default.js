
@charset "utf-8"; 
console.log('こんにちは');

var result=window.confirm('準備OK？');

if(result){
  document.getElementById('choice').textContent='OKが押されました';
}else{
   document.getElementById('choice').textContent='キャンセルが押されました';
}


var number=Math.floor(Math.random()*3);
var answer=parseInt(window.prompt('数当てゲーム　0～2の数字を入力してください！'));

var message;
if(answer===number){
  message='当たり';
}else if(answer<number){
  message='もっと大きい';
}else if(number<answer){
  message='もっと小さい';
}else{
  message='0～3の数字を入力してください';
}

document.getElementById('choice').textContent=message;
                    
                    
                    
                 
