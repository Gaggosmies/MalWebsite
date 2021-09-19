// Set title
document.title = DocumentTitle;
// Set website icon
document.getElementById("WebsiteIcon").href = WebsiteIcon;

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
// var select = document.getElementById("DifferentOptionsHere");
// for (index in Styles) {
//     if (index > 0) {
//         select.options[select.options.length] = new Option(Styles[index].name, index);
//         select.select[select.options.length] = new Selection()
//     }
// }

var number = 0;
for (options in Options) {
    // print new select
    var select = document.createElement("select");
    select.id = Options[options].optionId;
    select.className = "form-control";
    // select.addEventListener(
    //     'change',
    //     calculatePrice(),
    //     false
    //  );

    for (priceClass in Options[options].selectedPriceClass)
    {
        // print new option
        if(priceClass > 0)
        {
            var option = document.createElement("option");
            option.value = Options[options].selectedPriceClass[priceClass].price;
            option.text = Options[options].selectedPriceClass[priceClass].name;
            // option.onchange = calculatePrice();
            // option.setAttribute("onchange", document.getElementById('myimage').src = Styles[priceClass].examplePicture);
            select.appendChild(option);
        }
        // print placeholder
        else
        {
            var option = document.createElement("option");
            option.text = Options[options].placeholderText;
            option.hidden = true;
            select.appendChild(option);
        }
    }

    var label = document.createElement("label");
    label.innerHTML = Options[options].labelText;
    label.htmlFor = Options[options].optionId;
    label.className = "form-control-label";

    var br = document.createElement("br");

    document.getElementById("DifferentOptionsHere").appendChild(label).appendChild(select);
}

// var values = ["dog", "cat", "parrot", "rabbit"];

// var select = document.createElement("select");
// select.name = "pets";
// select.id = "pets";
// select.className = "form-control";


// for (const val of values)
// {
//     var option = document.createElement("option");
//     option.value = val;
//     option.text = val.charAt(0).toUpperCase() + val.slice(1);
//     select.appendChild(option);
// }

// var label = document.createElement("label");
// label.innerHTML = "Choose your pets: "
// label.htmlFor = "pets";
// label.className = "form-control-label";

// document.getElementById("DifferentOptionsHere").appendChild(label).appendChild(select);
// -------------------------------------------------- Draw Options end --------------------------------------------------- //
