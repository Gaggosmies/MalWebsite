// Set Page title
const DocumentTitle = "Malachi Commissions";
const WebsiteIcon   = "Pics/Default.png";

// Set default picture
const DefaultPicture     = "Pics/Default.png";
const DefaultPictureName = "Default";

// Picture parameters
const PictureLocation   = "Pics/";
const PictureFormat     = ".png";


// Styles          |Name:          |Price: |Location:         |Picture name:       |Picture format:
var Styles = [
    new PriceClass( "None",          0,      PictureLocation + DefaultPictureName   + PictureFormat),
    new PriceClass( "Sketch",        5,      PictureLocation + "Style1"             + PictureFormat),
    new PriceClass( "Lineart",       10,     PictureLocation + "Style2"             + PictureFormat),
    new PriceClass( "Flat Color",    15,     PictureLocation + "Style3"             + PictureFormat),
    new PriceClass( "Full Color",    20,     PictureLocation + "Style4"             + PictureFormat),
];

// Formats         |Name:          |Price: |Location:         |Picture name:       |Picture format:
var Formats = [
    new PriceClass( "None",          0,      PictureLocation + DefaultPictureName   + PictureFormat,),
    new PriceClass( "Headshot",      5,      PictureLocation + "Format1"            + PictureFormat),
    new PriceClass( "Bust",          7,      PictureLocation + "Format2"            + PictureFormat),
    new PriceClass( "Half Body",     10,     PictureLocation + "Format3"            + PictureFormat),
    new PriceClass( "Fullbody",      13,     PictureLocation + "Format4"            + PictureFormat),
];

// Outlines        |Name:          |Price: |Location:         |Picture name:       |Picture format:
var Outlines = [
    new PriceClass( "None",          0,      PictureLocation + DefaultPictureName   + PictureFormat),
    new PriceClass( "Regular",       0,      PictureLocation + "Outline1"           + PictureFormat),
    new PriceClass( "T h i c c",     2,      PictureLocation + "Outline2"           + PictureFormat),
    new PriceClass( "Sticker",       4,      PictureLocation + "Outline3"           + PictureFormat),
    new PriceClass( "Colored",       6,      PictureLocation + "Outline4"           + PictureFormat),
];

// Backgrounds     |Name:          |Price: |Location:         |Picture name:       |Picture format:
var Backgrounds = [
    new PriceClass( "None",          0,      PictureLocation + DefaultPictureName   + PictureFormat),
    new PriceClass( "None",          0,      PictureLocation + "Background1"        + PictureFormat),
    new PriceClass( "Square",        0,      PictureLocation + "Background2"        + PictureFormat),
    new PriceClass( "Pattern",       2,      PictureLocation + "Background3"        + PictureFormat),
    new PriceClass( "Custom",        999,    PictureLocation + "Background4"        + PictureFormat),
];

//  Extras         |Name:          |Price: |Location:         |Picture name:       |Picture format:
var Extras = [
    new PriceClass( "None",          0,      PictureLocation + DefaultPictureName   + PictureFormat),
    new PriceClass( "None",          0,      PictureLocation + DefaultPictureName   + PictureFormat),
    new PriceClass( "One",           10,     PictureLocation + DefaultPictureName   + PictureFormat),
    new PriceClass( "Two",           20,     PictureLocation + DefaultPictureName   + PictureFormat),
    new PriceClass( "Three",         30,     PictureLocation + DefaultPictureName   + PictureFormat),
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