var account = document.getElementById("account");
var passwd = document.getElementById("passwd");
var setAccount = "AdMiN"
var setPasswd = "2857140"
function check() {
  var accountVl = account.value;
  var passwdVl = passwd.value;
  if (accountVl == "" || passwdVl == "") { //判断不能为空
    alert("账号或密码不能为空");
    return false;
  } else if (accountVl != setAccount) { //判断不等于已设置的用户名时，提示错误
    alert("账号输入错误");
    return false;
  } else if (passwdVl != setPasswd) { //判断不等于已设置的密码时，提示错误
    alert("密码输入错误");
    return false;
  } else {//否则登录成功
    alert("登陆成功");
    window.location.href = "index.html"
  };
}
function checkEnterKey() {
  if (e.key == 13) {//回车键的键值为13
    document.getElementById("submit").click(); //调用登录按钮的登录事件
  }
}
