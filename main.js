function encrypt(){
    let text = document.getElementById("input-text").value.toLowerCase();
    let txtEncrypted = text.replace(/e/igm,"enter");
    txtEncrypted = txtEncrypted.replace(/o/igm,"ober");
    txtEncrypted = txtEncrypted.replace(/i/igm,"imes");
    txtEncrypted = txtEncrypted.replace(/a/igm,"ai");
    txtEncrypted = txtEncrypted.replace(/u/igm,"ufat");

    document.getElementById("search-img").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").innerHTML = txtEncrypted;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    document.getElementById("input-text").value = "";
}
function desencrypt(){
    let text = document.getElementById("input-text").value.toLowerCase();
    let txtEncrypted = text.replace(/enter/igm,"e");
    txtEncrypted = txtEncrypted.replace(/ober/igm,"o");
    txtEncrypted = txtEncrypted.replace(/imes/igm,"i");
    txtEncrypted = txtEncrypted.replace(/ai/igm,"a");
    txtEncrypted = txtEncrypted.replace(/ufat/igm,"u");

    document.getElementById("search-img").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").innerHTML = txtEncrypted;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}
function copyText(){
    let container = document.getElementById("text2");
    container.select();
    document.execCommand("copy");
    document.getElementById("input-text").focus();

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha copiado el texto correctamente.',
        showConfirmButton: false,
        timer: 1500
      })
}
