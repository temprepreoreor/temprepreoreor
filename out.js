<script>
function bru() {
 var cookies = document.getElementById('f').cookie;
 alert(document.cookie);
}
</script>
<iframe id="f" onload="bru()" src="/user/1234" >
</iframe>
