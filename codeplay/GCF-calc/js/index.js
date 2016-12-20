document.addEventListener("DOMContentLoaded", function(event) {

    function getResults() {
        var fstNum = parseInt(document.getElementById("fNumber").value);
        var secNum = parseInt(document.getElementById("sNumber").value);
        var l, s, subst;

        if (isNaN(fstNum) == true || isNaN(secNum) == true ||
            fstNum <= 0 || secNum <= 0 || fstNum === secNum) {
            alert("Please enter valid numbers!");
        } else {
            if (fstNum > secNum) { // Assigning larger number to the l variable
                l = fstNum;
                s = secNum;
            } else {
                l = secNum;
                s = fstNum;
            }
            subst = 0;
            while (subst != s) {
                subst = l - s;
                if (subst === s) {
                    var resultcom = "GCF Result: " + subst;
                    document.getElementById("GCFResult").innerHTML = resultcom;
                } else {
                    if (subst > s) {
                        l = subst;
                        subst = 0;
                    } else {
                        l = s;
                        s = subst;
                        subst = 0;
                    }
                }
            }

        }
    }


    function FacResults(input, result) {
        var num = document.getElementById(input).value;
        var array = [];
        var arrayCounter = 0;
        for (i = 1; i <= num; i++) {
            x = num % i;
            if (x === 0) {
                array[arrayCounter] = " (" + i + ") ";
                arrayCounter += 1;
            }
        }
        document.getElementById(result).innerHTML = array;
        if (array.length === 2) {
            document.getElementById(result).innerHTML += ", (Prime number)";
        } else {
            document.getElementById(result).innerHTML += ", (Composite number)";
        }
    }

    document.querySelector("button").addEventListener('click', function() {
        getResults();
        FacResults('fNumber', 'fResult');
        FacResults('sNumber', 'sResult');
    });

});
