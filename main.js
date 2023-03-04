// Evaluating Math Operators
function evalMath(value) {
    return (new Function('return (' + value + ')')());
}

void function main() {

    // Evaluating Variables
    const evaluate = document.querySelector("#evaluator"),
    calcResult = document.querySelector("#result-calc");


    const buttons = document.querySelectorAll(".btn");

    // Control Variables
    const clear = document.querySelector(".clear"),
    del = document.querySelector(".delete"),
    equal = document.querySelector(".equal");


    let evalInput;

    // Normal Buttons
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            calcResult.innerHTML += btn.innerHTML;

            if (btn == buttons[0]) {
                evalInput = "%";
            } else if (btn == buttons[1]) {
                evalInput = "/";
            } else if (btn == buttons[5]) {
                evalInput = "*";
            } else {
                evalInput = btn.innerHTML;
            }

            evaluate.innerHTML += evalInput;

        });
    });


    // Control Buttons (where a value will calculate)
    [clear, del, equal].forEach(controlBtn => {
        controlBtn.addEventListener("click",
            () => {
                if (controlBtn == clear) {

                    evaluate.innerHTML = null;
                    calcResult.innerHTML = null;

                } else if (controlBtn == del) {

                    evaluate.innerHTML = evaluate.innerHTML.substring(0, evaluate.innerHTML.length-1);

                    calcResult.innerHTML = calcResult.innerHTML.substring(0, calcResult.innerHTML.length-1);
                } else if (controlBtn == equal) {
                    calcResult.innerHTML = evalMath(evaluate.innerHTML);
                }
            });
    });


}();