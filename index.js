let submit = document.getElementById("submit");

submit.onclick = function() {
    let taken = document.getElementById("taken").value;
    let attended = document.getElementById("attended").value;

    let attendance = attended/taken * 100;

    document.getElementById("output").innerText = attendance;
}

