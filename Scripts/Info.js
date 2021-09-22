// Set Page title
const DocumentTitle = "Malachi Commissions";
const WebsiteIcon   = "Pics/Default.png";

// Set default picture
const DefaultPicture     = "Pics/Default.png";
const DefaultPictureName = "Default";

// Picture parameters
const PictureLocation   = "Pics/";
const PictureFormat     = ".png";


// ---------------------------------------------------- Different PriceClasses ---------------------------------------------------- //
// Styles          |Name:          |Price:
var Styles = [
    new PriceClass( "None",          0),
    new PriceClass( "Sketch",        5),
    new PriceClass( "Lineart",       10),
    new PriceClass( "Flat Color",    15),
    new PriceClass( "Full Color",    20),
];

// Formats         |Name:          |Price:
var Formats = [
    new PriceClass( "None",          0),
    new PriceClass( "Headshot",      5),
    new PriceClass( "Bust",          7),
    new PriceClass( "Half Body",     10),
    new PriceClass( "Fullbody",      13),
];

// Outlines        |Name:          |Price:
var Outlines = [
    new PriceClass( "None",          0),
    new PriceClass( "Regular",       0),
    new PriceClass( "T h i c c",     2),
    new PriceClass( "Sticker",       4),
    new PriceClass( "Colored",       6),
];

// Backgrounds     |Name:          |Price:
var Backgrounds = [
    new PriceClass( "None",          0),
    new PriceClass( "None",          0),
    new PriceClass( "Square",        0),
    new PriceClass( "Pattern",       2),
    new PriceClass( "Custom",        999),
];

//  Extras         |Name:          |Price:
var Extras = [
    new PriceClass( "None",          0),
    new PriceClass( "None",          0),
    new PriceClass( "One",           10),
    new PriceClass( "Two",           20),
    new PriceClass( "Three",         30),
];
// ---------------------------------------------------- Different PriceClasses end ------------------------------------------------ //

// ---------------------------------------------------- Different options --------------------------------------------------------- //

// NOTE! Example picture name should match selectId!!

// Options         |selectId:        |selectedPriceClass:           |labelText:                 |placeholderText:
var Options = [
    new OpinionClass("Style",           Styles,                     "Style selected",           "Select the style"),
    new OpinionClass("Format",          Formats,                    "Format selected",          "Select the format"),
    new OpinionClass("Outline",         Outlines,                   "Outline selected",         "Select the outlines"),
    new OpinionClass("Background",      Backgrounds,                "Background selected",      "Select the background"),
    new OpinionClass("Extra",           Extras,                     "Extra characters",         "Select amount of extra characters"),
];

// ---------------------------------------------------- Different options end ----------------------------------------------------- //


// dmMeText is shown when the price is up to debate, set such class price to "999" to trigger this
var dmMeText        = " + ?$, dm for more info";
var chooseAllText   = ", Choose all options";

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