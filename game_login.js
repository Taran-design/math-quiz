function add(){
var player1_name=document.getElementById("text_player1").value;

var player2_name=document.getElementById("text_player2").value;
localStorage.setItem("player1",player1_name);
localStorage.setItem("player2",player2_name);
window.location="game_page.html";
}