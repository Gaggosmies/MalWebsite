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

// -------------------------------------------------- Draw Options ------------------------------------------------------ //
for (index in Options) {
    // print new select
    var select = document.createElement("select");
    select.id = Options[index].optionId;
    select.className = "form-control";
    select.addEventListener(
        'change',
        function ChangeExamplePicture(){
            document.getElementById('myimage').src = PictureLocation + this.id + this.selectedIndex + PictureFormat;
        },
        false
     );

     select.addEventListener(
        'change',
        function CalculatePrice(){
            var price = 0;
            var dmMe = 0;
            var emptyFields = 0;
            for (differentOptions in Options) {
                if(document.getElementById(Options[differentOptions].optionId).selectedIndex == 0)
                {
                    emptyFields++;
                }
                var add = parseInt(document.getElementById(Options[differentOptions].optionId).value); 
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
        },
        false
     );

    for (priceClass in Options[index].selectedPriceClass)
    {
        // print new option
        if(priceClass > 0)
        {
            var option = document.createElement("option");
            option.value = Options[index].selectedPriceClass[priceClass].price;
            option.text = Options[index].selectedPriceClass[priceClass].name;
            select.appendChild(option);
        }
        // print placeholder
        else
        {
            var option = document.createElement("option");
            option.text = Options[index].placeholderText;
            option.hidden = true;
            option.value = 0;
            select.appendChild(option);
        }
    }

    var label = document.createElement("label");
    label.innerHTML = Options[index].labelText;
    label.htmlFor = Options[index].optionId;
    label.className = "form-control-label";

    document.getElementById("DifferentOptionsHere").appendChild(label).appendChild(select);
}
// -------------------------------------------------- Draw Options end --------------------------------------------------- //
