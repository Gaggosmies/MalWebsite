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

function RestoreDefaultPicture() {
    document.getElementById('myimage').src = DefaultPicture;
}

// Sum up all the prices
function CalculatePrice(){
    var price = 0;
    var dmMe = 0;
    var emptyFields = 0;
    for (differentOptions in Options) {
        if(document.getElementById(Options[differentOptions].selectId).selectedIndex == 0)
        {
            emptyFields++;
        }
        var add = parseInt(document.getElementById(Options[differentOptions].selectId).value); 
        if (add == 999) {
            dmMe = 1;
        }
        else {
            price += add;
        }
    }   

    price += "$"

    if(dmMe > 0){
        price += dmMeText;
    }

    if(emptyFields > 0){
        price += chooseAllText;
        document.getElementById("price").style.color = "red";
    }
    else{
        document.getElementById("price").style.color = "green";
    }

    document.getElementById("price").innerHTML = price;  
}

// -------------------------------------------------- Draw Options ------------------------------------------------------ //
// Every select option from Info.js is drawn here
for (indexSelect in Options) {
    // print new container for each select
    var divForSelect = document.createElement("div");
    divForSelect.className = "grid-selectItem";

    // print new select
    var select = document.createElement("select");
    select.id = Options[indexSelect].selectId;
    

    // Changing every created select will change the example picture
    select.addEventListener(
        'change',
        function ChangeExamplePicture(){
            document.getElementById('myimage').src = PictureLocation + this.id + this.selectedIndex + PictureFormat;
        }
     );

    // Changing every created select will update the price
    select.addEventListener(
        'change',
        function (){
            CalculatePrice();
        }
    );

    for (indexOption in Options[indexSelect].selectedPriceClass)
    {
        // print new option
        if(indexOption > 0)
        {
            var option = document.createElement("option");
            option.value = Options[indexSelect].selectedPriceClass[indexOption].price;
            option.text = Options[indexSelect].selectedPriceClass[indexOption].name;
            select.appendChild(option);
        }
        // print placeholder
        else
        {
            var option = document.createElement("option");
            option.text = Options[indexSelect].placeholderText;
            option.hidden = true;
            option.value = 0;
            select.appendChild(option);
        }
    }

    // print new container for each select
    var divForLabel = document.createElement("div");
    divForLabel.className = "grid-selectItem";

    var label = document.createElement("label");
    label.innerHTML = Options[indexSelect].labelText;
    label.htmlFor = Options[indexSelect].selectId;
    label.className = "form-control-label";

    document.getElementById("DifferentOptionsHere")
    .appendChild(divForSelect)
    .appendChild(label)
    .appendChild(divForLabel)
    .appendChild(select);
}
// -------------------------------------------------- Draw Options end --------------------------------------------------- //

// -------------------------------------------------- Draw Buttons ------------------------------------------------------- //

Buttons.forEach(function (ButtonClass, buttonIndex, buttonArray) {
    // print new container for each button
    var divForButton = document.createElement("div");
    divForButton.class = "grid-button-div";

    // add button details
    var button = document.createElement("button");
    button.className = "grid-button";
    button.id = buttonArray[buttonIndex].buttonId;
    button.style.background = buttonArray[buttonIndex].buttonColor;
    button.textContent = buttonArray[buttonIndex].buttonText;

    // reset button reloads the website
    if (button.textContent.valueOf() == new String("Reset").valueOf())
    {
        button.addEventListener(
            'click',
            function() {
                location.reload();
            }
        );
    }
    // else add link to the button
    else
    {
        button.addEventListener(
            'mousedown',
            function() {
                window.open(buttonArray[buttonIndex].buttonLink);
            }
        );
    }
    
    // Append buttons
    document.getElementById("DifferentButtonsHere")
    .appendChild(divForButton)
    .appendChild(button)
});

// -------------------------------------------------- Draw Buttons end --------------------------------------------------- //