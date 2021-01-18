var input = document.querySelectorAll("input")[
    0];
document.getElementById("reverse-btn")
.addEventListener("click", () => {
    var reverse = [];
    if (input.value.length < 3) {
        alert("输入的值太低了！！！");
    } else {
        document.getElementById("reversed-word")
        .innerText = "";
        for (let i = input.value.length; i > 0; i--) {
            if (input.value.charAt(i - 1) == ' ') {
                document.getElementById("reversed-word")
                .textContent += ' | ';
            } else {
                document.getElementById("reversed-word")
                .textContent += input.value.charAt(i - 1);
            }
        }
    }
});