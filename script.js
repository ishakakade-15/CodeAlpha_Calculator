function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearAll() {
    document.getElementById("display").value = "";
}

function deleteOne() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}