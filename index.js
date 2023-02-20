let submit = document.getElementById("submit");

submit.onclick = function() {
    let taken = document.getElementById("taken").value;
    let attended = document.getElementById("attended").value;
    let bar = document.getElementById("bar");
  //  let totalClasses = getElementById("toTake");
    let attendance = (attended/taken * 100).toFixed(2);
    // let extraClasses = (0.75 * totalClasses) - totalAttended;

    if(attendance>100) {
        attendance = "kinda sus!!"
    }else {
        attendance += "%";
        document.getElementById("bar").innerText = attendance;
        // document.getElementById("output2").innerText = extraClasses;
    }
        document.getElementById("output").innerText = attendance;
    bar.style.width = attendance;
}

