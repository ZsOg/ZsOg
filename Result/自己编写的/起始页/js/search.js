function search() {
    var searchValue = document.getElementById("searchInput").value;
    // alert(searchValue);
    window.location.href = "http://www.baidu.com/s?ie=UTF-8&wd=" + searchValue;
}