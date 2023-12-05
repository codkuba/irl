var  password = "elobamboszu";

function passcheck() {

    if(document.getElementById('pass1').value != password) {
        alert('ZŁE HASŁO');
        return false
    }

    if(document.getElementById('pass1').value == password) {
        alert('DOBRE HASŁO. KLIKNIJ OK ŻEBY WEJŚĆ');
    }
}