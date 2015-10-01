// Egyedi azonosító.
var az = "user_63117816";

// Űrlap küldése.
function processForm(btn) {

    // Gomb.
    var btn = $(btn);

    // Űrlap kiválasztása.
    var form = btn.parents("form");

    // Mentjük a beviteli mezők értékeit.
    var data = {};
    form.find("input").each(function (index, input) {
        data[input.name] = input.value;
    });

    // Objektum amit elküldünk a szerverre.
    var serverObj = {
        "user": az,
        "data": data
    }

    console.log(serverObj);

    return false;
}