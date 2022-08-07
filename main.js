function encrypt(){
    var text = document.getElementById("input-text").value.toLowerCase();
    var txtEncrypted = text.replace(/e/igm,"enter");
    var txtEncrypted = txtEncrypted.replace(/o/igm,"ober");
    var txtEncrypted = txtEncrypted.replace(/i/igm,"imes");
    var txtEncrypted = txtEncrypted.replace(/a/igm,"ai");
    var txtEncrypted = txtEncrypted.replace(/u/igm,"ufat");

    document.getElementById("search-img").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").innerHTML = txtEncrypted;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    document.getElementById("input-text").value = "";
}
function desencrypt(){
    var text = document.getElementById("input-text").value.toLowerCase();
    var txtEncrypted = text.replace(/enter/igm,"e");
    var txtEncrypted = txtEncrypted.replace(/ober/igm,"o");
    var txtEncrypted = txtEncrypted.replace(/imes/igm,"i");
    var txtEncrypted = txtEncrypted.replace(/ai/igm,"a");
    var txtEncrypted = txtEncrypted.replace(/ufat/igm,"u");

    document.getElementById("search-img").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").innerHTML = txtEncrypted;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}
function copyText(){
    var container = document.getElementById("text2");
    container.select();
    document.execCommand("copy");
    document.getElementById("input-text").focus();

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha copiado el texto correctamente',
        showConfirmButton: false,
        timer: 1500
      })
}
