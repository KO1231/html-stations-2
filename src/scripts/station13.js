function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const idtext = document.getElementById("text");
  if(e.target.checked){
    idtext.style.backgroundColor = "#ff0000";
  }else{
    idtext.style.backgroundColor = "#ffffff";
  }
}
