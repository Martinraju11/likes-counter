var like = document.getElementById("like");
var num = document.getElementById("num");
var a = 0;
like.addEventListener("click", function () {
    a++;
    num.innerHTML = a + " " + "likes";
    like.style.color = "#eb0505";
})