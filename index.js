let submit = document.getElementById("submit");

submit.onclick = function() {
    let taken = document.getElementById("taken").value;
    let attended = document.getElementById("attended").value;
    let bar = document.getElementById("bar");
    let attendance = (attended/taken * 100).toFixed(2);
    if(attendance>100) {
        attendance = "kinda sus!!"
    }else attendance += "%";
    document.getElementById("output").innerText = attendance;
    bar.style.width = attendance;
}

