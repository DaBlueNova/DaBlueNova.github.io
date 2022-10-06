var btn = document.getElementById("btn1");
btn.addEventListener('click', Calculate)

function Calculate () {
    var a = Number(document.getElementById("hours").value);
    var b = Number(document.getElementById("pay").value);
    var c = Number(document.getElementById("oth").value);
    var d = Number(document.getElementById("otp").value);

        var wage;
        wage = a*b
       if (c <= 0) {
        wage = a*b
       } else {
      wage = wage + (c*d)
       }
            document.getElementById("output").innerHTML = wage;
        }