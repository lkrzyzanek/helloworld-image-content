console.log('test');

function callApi(url) {
    console.log('calling rest api: ' + url);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            document.getElementById("restapi-call-result").innerHTML = this.responseText;
        }

    };
    xhr.onerror = function (err) {
        updateResult(err);
    }
    xhr.open("GET", url, true);
    xhr.send();
}
