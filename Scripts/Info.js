// Set Page title
const DocumentTitle = "Malachi Commissions";

// Set default picture
const DefaultPicture = "Pics/Default.png";

// Styles
var Styles = [
    new PriceClass("None", 0, DefaultPicture),
    new PriceClass("Sketch", 5, "Pics/malachisketch1.png"),
    new PriceClass("Lineart", 10, "Pics/malachilineart1.png"),
    new PriceClass("Flat Color", 15, "Pics/malachiflatcolor.png"),
    new PriceClass("Full Color", 20, "Pics/malachifullcolor.png"),
];

// Formats 
var Formats = [
    new PriceClass("None", 0, DefaultPicture,),
    new PriceClass("Headshot", 5, "Pics/imumuheadshot.png",),
    new PriceClass("Bust", 7, "Pics/imumubust.png"),
    new PriceClass("Half Body", 10, "Pics/imumuhalfbody.png"),
    new PriceClass("Fullbody", 13, "Pics/2imumufullbody.png"),
];

// Outlines
var Outlines = [
    new PriceClass("None", 0, DefaultPicture),
    new PriceClass("Regular", 0, "Pics/shinxstoneregularoutline.png"),
    new PriceClass("T h i c c", 2, "Pics/shinxstonethickoutline.png"),
    new PriceClass("Sticker", 4, "Pics/shinxstonestickeroutline.png"),
    new PriceClass("Colored", 6, "Pics/shinxstonecoloredoutlines.png"),
];

// Backgrounds 
var Backgrounds = [
    new PriceClass("None", 0, DefaultPicture),
    new PriceClass("None", 0, "Pics/velvetbackgroundnone.png"),
    new PriceClass("Square", 0, "Pics/velvetbackgroundsquare.png"),
    new PriceClass("Pattern", 2, "Pics/velvetbackgroundpattern.png"),
    new PriceClass("Custom", 999, "Pics/velvetbackgroundcustom.png"),
];

// Extras 
var Extras = [
    new PriceClass("None", 0, DefaultPicture),
    new PriceClass("None", 0, "Pics/Default.png"),
    new PriceClass("One", 10, "Pics/Default.png"),
    new PriceClass("Two", 20, "Pics/Default.png"),
    new PriceClass("Three", 30, "Pics/Default.png"),
];

// dmMeText is shown when the price is up to debate, set such class price to "999" to trigger this
var dmMeText = "$ + ?$, dm for more info"

// Document links:
const ToSLink   = "https://docs.google.com/document/d/1W0POqDfm8FCCH5ujt_S3mOmQBXYwICGajFlKRKY62VQ/";
const RulesLink = "https://docs.google.com/document/d/1j_uzSQg4J6fPDyTrkRGAbYTnIfM7lI42HHPEZA3aXmk/";
const OrderLink = "https://docs.google.com/forms/d/e/1FAIpQLSe4a8_yWmegIEVGBj68ws0AwvEx7lN5GI_sVJtaNFKxYvbz8g/viewform";
const QueueLink = "https://docs.google.com/spreadsheets/d/1MILIthZ7YY-GxYxfdmwVOaP1xSVUO7EPcqmzpLE3SWM/";

// Social links: 
const GaggoLink             = "https://www.furaffinity.net/user/gaggosmies/";
const MalachiLinkFA         = "https://www.furaffinity.net/user/malachimoet/";
const MalachiLinkTwitter    = "https://twitter.com/malachimoet";
const MalachiLinkDA         = "https://www.deviantart.com/malachimoet";