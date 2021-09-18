// Set title
document.title = DocumentTitle;

// Show default picture when the page is first reloaded
document.getElementById("myimage").src = DefaultPicture;

// Set Socials
const FAPicture = "Pics/FaPicture.png"
document.getElementById("FAPicture").src        = FAPicture;

document.getElementById("GaggoSocial").href     = GaggoLink;
document.getElementById("MalachiFA").href       = MalachiLinkFA;
document.getElementById("MalachiTwitter").href  = MalachiLinkTwitter;
document.getElementById("MalachiDA").href       = MalachiLinkDA;



// -------------------------------------------------- calculatePrice() -------------------------------------------------- //
// emptyCounter is used in multiple functions
var emptyCounter = 0;

function calculatePrice() {
    event.preventDefault();
    // reset counter
    emptyCounter = 0;

    // check there is no empty elements
    var stylePrice      =   checkIfElementEmpty(document.getElementById('style').selectedIndex,         Styles[document.getElementById('style').selectedIndex].price);
    var formatPrice     =   checkIfElementEmpty(document.getElementById('format').selectedIndex,        Formats[document.getElementById('format').selectedIndex].price);
    var outlinesPrice   =   checkIfElementEmpty(document.getElementById('outline').selectedIndex,       Outlines[document.getElementById('outline').selectedIndex].price);
    var backgroundPrice =   checkIfElementEmpty(document.getElementById('background').selectedIndex,    Backgrounds[document.getElementById('background').selectedIndex].price);
    var extraPrice      =   checkIfElementEmpty(document.getElementById('extra').selectedIndex,         Extras[document.getElementById('extra').selectedIndex].price);

    var result;

    // On those cases where the price is not set, variable price is set to 999 to trigger this if
    if (backgroundPrice != 999) {
        // get the price
        result = stylePrice + formatPrice + outlinesPrice + parseInt(backgroundPrice) + extraPrice + " $";
    }
    else {
        // get the price and text
        result = stylePrice + formatPrice + outlinesPrice + extraPrice;
        result += dmMeText;
    }

    document.getElementById("price").innerHTML = result;

    // if empty counter is more than 0 -> there are empty slots
    if (emptyCounter > 0) {
        document.getElementById("price").style.color = "red";
        document.getElementById("price").innerHTML += " Choose all options";
    }
    else {
        document.getElementById("price").style.color = "green";
    }
};

// Return 0 if element is empty
function checkIfElementEmpty(elementIndex, elementValue) {
    var temp;
    if (elementIndex === 0) {
        temp = 0;
        emptyCounter += 1;
    }
    else if (elementValue == 999) {
        return elementValue;
    }
    else {
        temp = elementValue;
    }
    return parseInt(temp);
}
// -------------------------------------------------- calculatePrice() end ---------------------------------------------- //

// -------------------------------------------------- Draw Options ------------------------------------------------------ //
// Used to draw each class dynamically
// For styles
var select = document.getElementById("style");
for (index in Styles) {
    if (index > 0) {
        select.options[select.options.length] = new Option(Styles[index].name, index);
    }
}

// For formats
var select = document.getElementById("format");
for (index in Formats) {
    if (index > 0) {
        select.options[select.options.length] = new Option(Formats[index].name, index);
    }
}

// For outlines
var select = document.getElementById("outline");
for (index in Outlines) {
    if (index > 0) {
        select.options[select.options.length] = new Option(Outlines[index].name, index);
    }
}

// For Backgrounds
var select = document.getElementById("background");
for (index in Backgrounds) {
    if (index > 0) {
        select.options[select.options.length] = new Option(Backgrounds[index].name, index);
    }
}

// For Extras
var select = document.getElementById("extra");
for (index in Extras) {
    if (index > 0) {
        select.options[select.options.length] = new Option(Extras[index].name, index);
    }
}
// -------------------------------------------------- Draw Options end --------------------------------------------------- //
