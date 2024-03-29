import React from "react";
import soundfile from "../sound/laugh.mp3";
let audio = new Audio(soundfile);

const eric = (
  <img
    onClick={() => audio.play()}
    preload="true"
    src="./img/eric.png"
    alt="Eric Cartman being impolite"
  />
);

const emojiArray = [
  {
    icon_id: 0,
    label: "Grinning Face",
    icon: "😀"
  },
  {
    icon_id: 1,
    label: "Grinning Face With Big Eyes",
    icon: "😃"
  },
  {
    icon_id: 2,
    label: "Grinning Face With Smiling Eyes",
    icon: "😄"
  },
  {
    icon_id: 3,
    label: "Beaming Face With Smiling Eyes",
    icon: "😁"
  },
  {
    icon_id: 4,
    label: "Grinning Squinting Face",
    icon: "😆"
  },
  {
    icon_id: 5,
    label: "Grinning Face With Sweat",
    icon: "😅"
  },
  {
    icon_id: 6,
    label: "Rolling on the Floor Laughing",
    icon: "🤣"
  },
  {
    icon_id: 7,
    label: "Face With Tears of Joy",
    icon: "😂"
  },
  {
    icon_id: 8,
    label: "Slightly Smiling Face",
    icon: "🙂"
  },
  {
    icon_id: 9,
    label: "Upside-Down Face",
    icon: "🙃"
  },
  {
    icon_id: 10,
    label: "Winking Face",
    icon: "😉"
  },
  {
    icon_id: 11,
    label: "Smiling Face With Smiling Eyes",
    icon: "😊"
  },
  {
    icon_id: 12,
    label: "Smiling Face With Halo",
    icon: "😇"
  },
  {
    icon_id: 13,
    label: "Smiling Face With Hearts",
    icon: "🥰"
  },
  {
    icon_id: 14,
    label: "Smiling Face With Heart-Eyes",
    icon: "😍"
  },
  {
    icon_id: 15,
    label: "Star-Struck",
    icon: "🤩"
  },
  {
    icon_id: 16,
    label: "Face Blowing a Kiss",
    icon: "😘"
  },
  {
    icon_id: 17,
    label: "Kissing Face",
    icon: "😗"
  },
  {
    icon_id: 18,
    label: "Kissing Face With Closed Eyes",
    icon: "😚"
  },
  {
    icon_id: 19,
    label: "Kissing Face With Smiling Eyes",
    icon: "😙"
  },
  {
    icon_id: 20,
    label: "Face Savoring Food",
    icon: "😋"
  },
  {
    icon_id: 21,
    label: "Face With Tongue",
    icon: "😛"
  },
  {
    icon_id: 22,
    label: "Winking Face With Tongue",
    icon: "😜"
  },
  {
    icon_id: 23,
    label: "Zany Face",
    icon: "🤪"
  },
  {
    icon_id: 24,
    label: "Squinting Face With Tongue",
    icon: "😝"
  },
  {
    icon_id: 25,
    label: "Money-Mouth Face",
    icon: "🤑"
  },
  {
    icon_id: 26,
    label: "Hugging Face",
    icon: "🤗"
  },
  {
    icon_id: 27,
    label: "Face With Hand Over Mouth",
    icon: "🤭"
  },
  {
    icon_id: 28,
    label: "Shushing Face",
    icon: "🤫"
  },
  {
    icon_id: 29,
    label: "Thinking Face",
    icon: "🤔"
  },
  {
    icon_id: 30,
    label: "Zipper-Mouth Face",
    icon: "🤐"
  },
  {
    icon_id: 31,
    label: "Face With Raised Eyebrow",
    icon: "🤨"
  },
  {
    icon_id: 32,
    label: "Neutral Face",
    icon: "😐"
  },
  {
    icon_id: 33,
    label: "Expressionless Face",
    icon: "😑"
  },
  {
    icon_id: 34,
    label: "Face Without Mouth",
    icon: "😶"
  },
  {
    icon_id: 35,
    label: "Smirking Face",
    icon: "😏"
  },
  {
    icon_id: 36,
    label: "Unamused Face",
    icon: "😒"
  },
  {
    icon_id: 37,
    label: "Face With Rolling Eyes",
    icon: "🙄"
  },
  {
    icon_id: 38,
    label: "Grimacing Face",
    icon: "😬"
  },
  {
    icon_id: 39,
    label: "Lying Face",
    icon: "🤥"
  },
  {
    icon_id: 40,
    label: "Relieved Face",
    icon: "😌"
  },
  {
    icon_id: 41,
    label: "Pensive Face",
    icon: "😔"
  },
  {
    icon_id: 42,
    label: "Sleepy Face",
    icon: "😪"
  },
  {
    icon_id: 43,
    label: "Drooling Face",
    icon: "🤤"
  },
  {
    icon_id: 44,
    label: "Sleeping Face",
    icon: "😴"
  },
  {
    icon_id: 45,
    label: "Face With Medical Mask",
    icon: "😷"
  },
  {
    icon_id: 46,
    label: "Face With Thermometer",
    icon: "🤒"
  },
  {
    icon_id: 47,
    label: "Face With Head-Bandage",
    icon: "🤕"
  },
  {
    icon_id: 48,
    label: "Nauseated Face",
    icon: "🤢"
  },
  {
    icon_id: 49,
    label: "Face Vomiting",
    icon: "🤮"
  },
  {
    icon_id: 50,
    label: "Sneezing Face",
    icon: "🤧"
  },
  {
    icon_id: 51,
    label: "Hot Face",
    icon: "🥵"
  },
  {
    icon_id: 52,
    label: "Cold Face",
    icon: "🥶"
  },
  {
    icon_id: 53,
    label: "Woozy Face",
    icon: "🥴"
  },
  {
    icon_id: 54,
    label: "Dizzy Face",
    icon: "😵"
  },
  {
    icon_id: 55,
    label: "Exploding Head",
    icon: "🤯"
  },
  {
    icon_id: 56,
    label: "Cowboy Hat Face",
    icon: "🤠"
  },
  {
    icon_id: 57,
    label: "Partying Face",
    icon: "🥳"
  },
  {
    icon_id: 58,
    label: "Smiling Face With Sunglasses",
    icon: "😎"
  },
  {
    icon_id: 59,
    label: "Nerd Face",
    icon: "🤓"
  },
  {
    icon_id: 60,
    label: "Face With Monocle",
    icon: "🧐"
  },
  {
    icon_id: 61,
    label: "Confused Face",
    icon: "😕"
  },
  {
    icon_id: 62,
    label: "Worried Face",
    icon: "😟"
  },
  {
    icon_id: 63,
    label: "Slightly Frowning Face",
    icon: "🙁"
  },
  {
    icon_id: 64,
    label: "Frowning Face",
    icon: "☹"
  },
  {
    icon_id: 65,
    label: "Face With Open Mouth",
    icon: "😮"
  },
  {
    icon_id: 66,
    label: "Hushed Face",
    icon: "😯"
  },
  {
    icon_id: 67,
    label: "Astonished Face",
    icon: "😲"
  },
  {
    icon_id: 68,
    label: "Flushed Face",
    icon: "😳"
  },
  {
    icon_id: 69,
    label: "Pleading Face",
    icon: "🥺"
  },
  {
    icon_id: 70,
    label: "Frowning Face With Open Mouth",
    icon: "😦"
  },
  {
    icon_id: 71,
    label: "Anguished Face",
    icon: "😧"
  },
  {
    icon_id: 72,
    label: "Fearful Face",
    icon: "😨"
  },
  {
    icon_id: 73,
    label: "Anxious Face With Sweat",
    icon: "😰"
  },
  {
    icon_id: 74,
    label: "Sad but Relieved Face",
    icon: "😥"
  },
  {
    icon_id: 75,
    label: "Crying Face",
    icon: "😢"
  },
  {
    icon_id: 76,
    label: "Loudly Crying Face",
    icon: "😭"
  },
  {
    icon_id: 77,
    label: "Face Screaming in Fear",
    icon: "😱"
  },
  {
    icon_id: 78,
    label: "Confounded Face",
    icon: "😖"
  },
  {
    icon_id: 79,
    label: "Persevering Face",
    icon: "😣"
  },
  {
    icon_id: 80,
    label: "Disappointed Face",
    icon: "😞"
  },
  {
    icon_id: 81,
    label: "Downcast Face With Sweat",
    icon: "😓"
  },
  {
    icon_id: 82,
    label: "Weary Face",
    icon: "😩"
  },
  {
    icon_id: 83,
    label: "Tired Face",
    icon: "😫"
  },
  {
    icon_id: 84,
    label: "Face With Steam From Nose",
    icon: "😤"
  },
  {
    icon_id: 85,
    label: "Pouting Face",
    icon: "😡"
  },
  {
    icon_id: 86,
    label: "Angry Face",
    icon: "😠"
  },
  {
    icon_id: 87,
    label: "Face With Symbols on Mouth",
    icon: "🤬"
  },
  {
    icon_id: 88,
    label: "Smiling Face With Horns",
    icon: "😈"
  },
  {
    icon_id: 89,
    label: "Angry Face With Horns",
    icon: "👿"
  },
  {
    icon_id: 90,
    label: "Skull",
    icon: "💀"
  },
  {
    icon_id: 91,
    label: "Skull and Crossbones",
    icon: "☠"
  },
  {
    icon_id: 92,
    label: "Pile of Poo",
    icon: "💩"
  },
  {
    icon_id: 93,
    label: "Clown Face",
    icon: "🤡"
  },
  {
    icon_id: 94,
    label: "Ogre",
    icon: "👹"
  },
  {
    icon_id: 95,
    label: "Goblin",
    icon: "👺"
  },
  {
    icon_id: 96,
    label: "Ghost",
    icon: "👻"
  },
  {
    icon_id: 97,
    label: "Alien",
    icon: "👽"
  },
  {
    icon_id: 98,
    label: "Alien Monster",
    icon: "👾"
  },
  {
    icon_id: 99,
    label: "Robot Face",
    icon: "🤖"
  },
  {
    icon_id: 100,
    label: "Grinning Cat Face",
    icon: "😺"
  },
  {
    icon_id: 101,
    label: "Grinning Cat Face With Smiling Eyes",
    icon: "😸"
  },
  {
    icon_id: 102,
    label: "Cat Face With Tears of Joy",
    icon: "😹"
  },
  {
    icon_id: 103,
    label: "Smiling Cat Face With Heart-Eyes",
    icon: "😻"
  },
  {
    icon_id: 104,
    label: "Cat Face With Wry Smile",
    icon: "😼"
  },
  {
    icon_id: 105,
    label: "Kissing Cat Face",
    icon: "😽"
  },
  {
    icon_id: 106,
    label: "Weary Cat Face",
    icon: "🙀"
  },
  {
    icon_id: 107,
    label: "Crying Cat Face",
    icon: "😿"
  },
  {
    icon_id: 108,
    label: "Pouting Cat Face",
    icon: "😾"
  },
  {
    icon_id: 109,
    label: "Kiss Mark",
    icon: "💋"
  },
  {
    icon_id: 110,
    label: "Waving Hand",
    icon: "👋"
  },
  {
    icon_id: 111,
    label: "Raised Back of Hand",
    icon: "🤚"
  },
  {
    icon_id: 112,
    label: "Hand With Fingers Splayed",
    icon: "🖐"
  },
  {
    icon_id: 113,
    label: "Raised Hand",
    icon: "✋"
  },
  {
    icon_id: 114,
    label: "Vulcan Salute",
    icon: "🖖"
  },
  {
    icon_id: 115,
    label: "OK Hand",
    icon: "👌"
  },
  {
    icon_id: 116,
    label: "Victory Hand",
    icon: "✌"
  },
  {
    icon_id: 117,
    label: "Crossed Fingers",
    icon: "🤞"
  },
  {
    icon_id: 118,
    label: "Love-You Gesture",
    icon: "🤟"
  },
  {
    icon_id: 119,
    label: "Sign of the Horns",
    icon: "🤘"
  },
  {
    icon_id: 120,
    label: "Call Me Hand",
    icon: "🤙"
  },
  {
    icon_id: 121,
    label: "Backhand Index Pointing Left",
    icon: "👈"
  },
  {
    icon_id: 122,
    label: "Backhand Index Pointing Right",
    icon: "👉"
  },
  {
    icon_id: 123,
    label: "Backhand Index Pointing Up",
    icon: "👆"
  },
  {
    icon_id: 124,
    label: "Middle Finger",
    icon: "🖕"
  },
  {
    icon_id: 125,
    label: "Backhand Index Pointing Down",
    icon: "👇"
  },
  {
    icon_id: 126,
    label: "Index Pointing Up",
    icon: "☝"
  },
  {
    icon_id: 127,
    label: "Thumbs Up",
    icon: "👍"
  },
  {
    icon_id: 128,
    label: "Thumbs Down",
    icon: "👎"
  },
  {
    icon_id: 129,
    label: "Raised Fist",
    icon: "✊"
  },
  {
    icon_id: 130,
    label: "Oncoming Fist",
    icon: "👊"
  },
  {
    icon_id: 131,
    label: "Left-Facing Fist",
    icon: "🤛"
  },
  {
    icon_id: 132,
    label: "Right-Facing Fist",
    icon: "🤜"
  },
  {
    icon_id: 133,
    label: "Clapping Hands",
    icon: "👏"
  },
  {
    icon_id: 134,
    label: "Raising Hands",
    icon: "🙌"
  },
  {
    icon_id: 135,
    label: "Open Hands",
    icon: "👐"
  },
  {
    icon_id: 136,
    label: "Palms Up Together",
    icon: "🤲"
  },
  {
    icon_id: 137,
    label: "Handshake",
    icon: "🤝"
  },
  {
    icon_id: 138,
    label: "Folded Hands",
    icon: "🙏"
  },
  {
    icon_id: 139,
    label: "Writing Hand",
    icon: "✍"
  },
  {
    icon_id: 140,
    label: "Nail Polish",
    icon: "💅"
  },
  {
    icon_id: 141,
    label: "Selfie",
    icon: "🤳"
  },
  {
    icon_id: 142,
    label: "Flexed Biceps",
    icon: "💪"
  },
  {
    icon_id: 143,
    label: "Leg",
    icon: "🦵"
  },
  {
    icon_id: 144,
    label: "Foot",
    icon: "🦶"
  },
  {
    icon_id: 145,
    label: "Ear",
    icon: "👂"
  },
  {
    icon_id: 146,
    label: "Nose",
    icon: "👃"
  },
  {
    icon_id: 147,
    label: "Brain",
    icon: "🧠"
  },
  {
    icon_id: 148,
    label: "Tooth",
    icon: "🦷"
  },
  {
    icon_id: 149,
    label: "Bone",
    icon: "🦴"
  },
  {
    icon_id: 150,
    label: "Eyes",
    icon: "👀"
  },
  {
    icon_id: 151,
    label: "Eye",
    icon: "👁"
  },
  {
    icon_id: 152,
    label: "Tongue",
    icon: "👅"
  },
  {
    icon_id: 153,
    label: "Mouth",
    icon: "👄"
  },
  {
    icon_id: 154,
    label: "Baby",
    icon: "👶"
  },
  {
    icon_id: 155,
    label: "Child",
    icon: "🧒"
  },
  {
    icon_id: 156,
    label: "Boy",
    icon: "👦"
  },
  {
    icon_id: 157,
    label: "Girl",
    icon: "👧"
  },
  {
    icon_id: 158,
    label: "Person",
    icon: "🧑"
  },
  {
    icon_id: 159,
    label: "Person: Blond Hair",
    icon: "👱"
  },
  {
    icon_id: 160,
    label: "Man",
    icon: "👨"
  },
  {
    icon_id: 161,
    label: "Man: Beard",
    icon: "🧔"
  },
  {
    icon_id: 162,
    label: "Man: Blond Hair",
    icon: "👱‍♂️"
  },
  {
    icon_id: 163,
    label: "Man: Red Hair",
    icon: "👨‍🦰"
  },
  {
    icon_id: 164,
    label: "Man: Curly Hair",
    icon: "👨‍🦱"
  },
  {
    icon_id: 165,
    label: "Man: White Hair",
    icon: "👨‍🦳"
  },
  {
    icon_id: 166,
    label: "Man: Bald",
    icon: "👨‍🦲"
  },
  {
    icon_id: 167,
    label: "Woman",
    icon: "👩"
  },
  {
    icon_id: 168,
    label: "Woman: Blond Hair",
    icon: "👱‍♀️"
  },
  {
    icon_id: 169,
    label: "Woman: Red Hair",
    icon: "👩‍🦰"
  },
  {
    icon_id: 170,
    label: "Woman: Curly Hair",
    icon: "👩‍🦱"
  },
  {
    icon_id: 171,
    label: "Woman: White Hair",
    icon: "👩‍🦳"
  },
  {
    icon_id: 172,
    label: "Woman: Bald",
    icon: "👩‍🦲"
  },
  {
    icon_id: 173,
    label: "Older Person",
    icon: "🧓"
  },
  {
    icon_id: 174,
    label: "Old Man",
    icon: "👴"
  },
  {
    icon_id: 175,
    label: "Old Woman",
    icon: "👵"
  },
  {
    icon_id: 176,
    label: "Person Frowning",
    icon: "🙍"
  },
  {
    icon_id: 177,
    label: "Man Frowning",
    icon: "🙍‍♂️"
  },
  {
    icon_id: 178,
    label: "Woman Frowning",
    icon: "🙍‍♀️"
  },
  {
    icon_id: 179,
    label: "Person Pouting",
    icon: "🙎"
  },
  {
    icon_id: 180,
    label: "Man Pouting",
    icon: "🙎‍♂️"
  },
  {
    icon_id: 181,
    label: "Woman Pouting",
    icon: "🙎‍♀️"
  },
  {
    icon_id: 182,
    label: "Person Gesturing No",
    icon: "🙅"
  },
  {
    icon_id: 183,
    label: "Man Gesturing No",
    icon: "🙅‍♂️"
  },
  {
    icon_id: 184,
    label: "Woman Gesturing No",
    icon: "🙅‍♀️"
  },
  {
    icon_id: 185,
    label: "Person Gesturing OK",
    icon: "🙆"
  },
  {
    icon_id: 186,
    label: "Man Gesturing OK",
    icon: "🙆‍♂️"
  },
  {
    icon_id: 187,
    label: "Woman Gesturing OK",
    icon: "🙆‍♀️"
  },
  {
    icon_id: 188,
    label: "Person Tipping Hand",
    icon: "💁"
  },
  {
    icon_id: 189,
    label: "Man Tipping Hand",
    icon: "💁‍♂️"
  },
  {
    icon_id: 190,
    label: "Woman Tipping Hand",
    icon: "💁‍♀️"
  },
  {
    icon_id: 191,
    label: "Person Raising Hand",
    icon: "🙋"
  },
  {
    icon_id: 192,
    label: "Man Raising Hand",
    icon: "🙋‍♂️"
  },
  {
    icon_id: 193,
    label: "Woman Raising Hand",
    icon: "🙋‍♀️"
  },
  {
    icon_id: 194,
    label: "Person Bowing",
    icon: "🙇"
  },
  {
    icon_id: 195,
    label: "Man Bowing",
    icon: "🙇‍♂️"
  },
  {
    icon_id: 196,
    label: "Woman Bowing",
    icon: "🙇‍♀️"
  },
  {
    icon_id: 197,
    label: "Person Facepalming",
    icon: "🤦"
  },
  {
    icon_id: 198,
    label: "Man Facepalming",
    icon: "🤦‍♂️"
  },
  {
    icon_id: 199,
    label: "Woman Facepalming",
    icon: "🤦‍♀️"
  },
  {
    icon_id: 200,
    label: "Person Shrugging",
    icon: "🤷"
  },
  {
    icon_id: 201,
    label: "Man Shrugging",
    icon: "🤷‍♂️"
  },
  {
    icon_id: 202,
    label: "Woman Shrugging",
    icon: "🤷‍♀️"
  },
  {
    icon_id: 203,
    label: "Man Health Worker",
    icon: "👨‍⚕️"
  },
  {
    icon_id: 204,
    label: "Woman Health Worker",
    icon: "👩‍⚕️"
  },
  {
    icon_id: 205,
    label: "Man Student",
    icon: "👨‍🎓"
  },
  {
    icon_id: 206,
    label: "Woman Student",
    icon: "👩‍🎓"
  },
  {
    icon_id: 207,
    label: "Man Teacher",
    icon: "👨‍🏫"
  },
  {
    icon_id: 208,
    label: "Woman Teacher",
    icon: "👩‍🏫"
  },
  {
    icon_id: 209,
    label: "Man Judge",
    icon: "👨‍⚖️"
  },
  {
    icon_id: 210,
    label: "Woman Judge",
    icon: "👩‍⚖️"
  },
  {
    icon_id: 211,
    label: "Man Farmer",
    icon: "👨‍🌾"
  },
  {
    icon_id: 212,
    label: "Woman Farmer",
    icon: "👩‍🌾"
  },
  {
    icon_id: 213,
    label: "Man Cook",
    icon: "👨‍🍳"
  },
  {
    icon_id: 214,
    label: "Woman Cook",
    icon: "👩‍🍳"
  },
  {
    icon_id: 215,
    label: "Man Mechanic",
    icon: "👨‍🔧"
  },
  {
    icon_id: 216,
    label: "Woman Mechanic",
    icon: "👩‍🔧"
  },
  {
    icon_id: 217,
    label: "Man Factory Worker",
    icon: "👨‍🏭"
  },
  {
    icon_id: 218,
    label: "Woman Factory Worker",
    icon: "👩‍🏭"
  },
  {
    icon_id: 219,
    label: "Man Office Worker",
    icon: "👨‍💼"
  },
  {
    icon_id: 220,
    label: "Woman Office Worker",
    icon: "👩‍💼"
  },
  {
    icon_id: 221,
    label: "Man Scientist",
    icon: "👨‍🔬"
  },
  {
    icon_id: 222,
    label: "Woman Scientist",
    icon: "👩‍🔬"
  },
  {
    icon_id: 223,
    label: "Man Technologist",
    icon: "👨‍💻"
  },
  {
    icon_id: 224,
    label: "Woman Technologist",
    icon: "👩‍💻"
  },
  {
    icon_id: 225,
    label: "Man Singer",
    icon: "👨‍🎤"
  },
  {
    icon_id: 226,
    label: "Woman Singer",
    icon: "👩‍🎤"
  },
  {
    icon_id: 227,
    label: "Man Artist",
    icon: "👨‍🎨"
  },
  {
    icon_id: 228,
    label: "Woman Artist",
    icon: "👩‍🎨"
  },
  {
    icon_id: 229,
    label: "Man Pilot",
    icon: "👨‍✈️"
  },
  {
    icon_id: 230,
    label: "Woman Pilot",
    icon: "👩‍✈️"
  },
  {
    icon_id: 231,
    label: "Man Astronaut",
    icon: "👨‍🚀"
  },
  {
    icon_id: 232,
    label: "Woman Astronaut",
    icon: "👩‍🚀"
  },
  {
    icon_id: 233,
    label: "Man Firefighter",
    icon: "👨‍🚒"
  },
  {
    icon_id: 234,
    label: "Woman Firefighter",
    icon: "👩‍🚒"
  },
  {
    icon_id: 235,
    label: "Police Officer",
    icon: "👮"
  },
  {
    icon_id: 236,
    label: "Man Police Officer",
    icon: "👮‍♂️"
  },
  {
    icon_id: 237,
    label: "Woman Police Officer",
    icon: "👮‍♀️"
  },
  {
    icon_id: 238,
    label: "Detective",
    icon: "🕵"
  },
  {
    icon_id: 239,
    label: "Man Detective",
    icon: "🕵️‍♂️"
  },
  {
    icon_id: 240,
    label: "Woman Detective",
    icon: "🕵️‍♀️"
  },
  {
    icon_id: 241,
    label: "Guard",
    icon: "💂"
  },
  {
    icon_id: 242,
    label: "Man Guard",
    icon: "💂‍♂️"
  },
  {
    icon_id: 243,
    label: "Woman Guard",
    icon: "💂‍♀️"
  },
  {
    icon_id: 244,
    label: "Construction Worker",
    icon: "👷"
  },
  {
    icon_id: 245,
    label: "Man Construction Worker",
    icon: "👷‍♂️"
  },
  {
    icon_id: 246,
    label: "Woman Construction Worker",
    icon: "👷‍♀️"
  },
  {
    icon_id: 247,
    label: "Prince",
    icon: "🤴"
  },
  {
    icon_id: 248,
    label: "Princess",
    icon: "👸"
  },
  {
    icon_id: 249,
    label: "Person Wearing Turban",
    icon: "👳"
  },
  {
    icon_id: 250,
    label: "Man Wearing Turban",
    icon: "👳‍♂️"
  },
  {
    icon_id: 251,
    label: "Woman Wearing Turban",
    icon: "👳‍♀️"
  },
  {
    icon_id: 252,
    label: "Man With Chinese Cap",
    icon: "👲"
  },
  {
    icon_id: 253,
    label: "Woman With Headscarf",
    icon: "🧕"
  },
  {
    icon_id: 254,
    label: "Man in Tuxedo",
    icon: "🤵"
  },
  {
    icon_id: 255,
    label: "Bride With Veil",
    icon: "👰"
  },
  {
    icon_id: 256,
    label: "Pregnant Woman",
    icon: "🤰"
  },
  {
    icon_id: 257,
    label: "Breast-Feeding",
    icon: "🤱"
  },
  {
    icon_id: 258,
    label: "Baby Angel",
    icon: "👼"
  },
  {
    icon_id: 259,
    label: "Santa Claus",
    icon: "🎅"
  },
  {
    icon_id: 260,
    label: "Mrs. Claus",
    icon: "🤶"
  },
  {
    icon_id: 261,
    label: "Superhero",
    icon: "🦸"
  },
  {
    icon_id: 262,
    label: "Man Superhero",
    icon: "🦸‍♂️"
  },
  {
    icon_id: 263,
    label: "Woman Superhero",
    icon: "🦸‍♀️"
  },
  {
    icon_id: 264,
    label: "Supervillain",
    icon: "🦹"
  },
  {
    icon_id: 265,
    label: "Man Supervillain",
    icon: "🦹‍♂️"
  },
  {
    icon_id: 266,
    label: "Woman Supervillain",
    icon: "🦹‍♀️"
  },
  {
    icon_id: 267,
    label: "Mage",
    icon: "🧙"
  },
  {
    icon_id: 268,
    label: "Man Mage",
    icon: "🧙‍♂️"
  },
  {
    icon_id: 269,
    label: "Woman Mage",
    icon: "🧙‍♀️"
  },
  {
    icon_id: 270,
    label: "Fairy",
    icon: "🧚"
  },
  {
    icon_id: 271,
    label: "Man Fairy",
    icon: "🧚‍♂️"
  },
  {
    icon_id: 272,
    label: "Woman Fairy",
    icon: "🧚‍♀️"
  },
  {
    icon_id: 273,
    label: "Vampire",
    icon: "🧛"
  },
  {
    icon_id: 274,
    label: "Man Vampire",
    icon: "🧛‍♂️"
  },
  {
    icon_id: 275,
    label: "Woman Vampire",
    icon: "🧛‍♀️"
  },
  {
    icon_id: 276,
    label: "Merperson",
    icon: "🧜"
  },
  {
    icon_id: 277,
    label: "Merman",
    icon: "🧜‍♂️"
  },
  {
    icon_id: 278,
    label: "Mermaid",
    icon: "🧜‍♀️"
  },
  {
    icon_id: 279,
    label: "Elf",
    icon: "🧝"
  },
  {
    icon_id: 280,
    label: "Man Elf",
    icon: "🧝‍♂️"
  },
  {
    icon_id: 281,
    label: "Woman Elf",
    icon: "🧝‍♀️"
  },
  {
    icon_id: 282,
    label: "Genie",
    icon: "🧞"
  },
  {
    icon_id: 283,
    label: "Man Genie",
    icon: "🧞‍♂️"
  },
  {
    icon_id: 284,
    label: "Woman Genie",
    icon: "🧞‍♀️"
  },
  {
    icon_id: 285,
    label: "Zombie",
    icon: "🧟"
  },
  {
    icon_id: 286,
    label: "Man Zombie",
    icon: "🧟‍♂️"
  },
  {
    icon_id: 287,
    label: "Woman Zombie",
    icon: "🧟‍♀️"
  },
  {
    icon_id: 288,
    label: "Person Getting Massage",
    icon: "💆"
  },
  {
    icon_id: 289,
    label: "Man Getting Massage",
    icon: "💆‍♂️"
  },
  {
    icon_id: 290,
    label: "Woman Getting Massage",
    icon: "💆‍♀️"
  },
  {
    icon_id: 291,
    label: "Person Getting Haircut",
    icon: "💇"
  },
  {
    icon_id: 292,
    label: "Man Getting Haircut",
    icon: "💇‍♂️"
  },
  {
    icon_id: 293,
    label: "Woman Getting Haircut",
    icon: "💇‍♀️"
  },
  {
    icon_id: 294,
    label: "Person Walking",
    icon: "🚶"
  },
  {
    icon_id: 295,
    label: "Man Walking",
    icon: "🚶‍♂️"
  },
  {
    icon_id: 296,
    label: "Woman Walking",
    icon: "🚶‍♀️"
  },
  {
    icon_id: 297,
    label: "Person Running",
    icon: "🏃"
  },
  {
    icon_id: 298,
    label: "Man Running",
    icon: "🏃‍♂️"
  },
  {
    icon_id: 299,
    label: "Woman Running",
    icon: "🏃‍♀️"
  },
  {
    icon_id: 300,
    label: "Woman Dancing",
    icon: "💃"
  },
  {
    icon_id: 301,
    label: "Man Dancing",
    icon: "🕺"
  },
  {
    icon_id: 302,
    label: "Man in Suit Levitating",
    icon: "🕴"
  },
  {
    icon_id: 303,
    label: "People With Bunny Ears",
    icon: "👯"
  },
  {
    icon_id: 304,
    label: "Men With Bunny Ears",
    icon: "👯‍♂️"
  },
  {
    icon_id: 305,
    label: "Women With Bunny Ears",
    icon: "👯‍♀️"
  },
  {
    icon_id: 306,
    label: "Person in Steamy Room",
    icon: "🧖"
  },
  {
    icon_id: 307,
    label: "Man in Steamy Room",
    icon: "🧖‍♂️"
  },
  {
    icon_id: 308,
    label: "Woman in Steamy Room",
    icon: "🧖‍♀️"
  },
  {
    icon_id: 309,
    label: "Person in Lotus Position",
    icon: "🧘"
  },
  {
    icon_id: 310,
    label: "Women Holding Hands",
    icon: "👭"
  },
  {
    icon_id: 311,
    label: "Woman and Man Holding Hands",
    icon: "👫"
  },
  {
    icon_id: 312,
    label: "Men Holding Hands",
    icon: "👬"
  },
  {
    icon_id: 313,
    label: "Kiss",
    icon: "💏"
  },
  {
    icon_id: 314,
    label: "Kiss: Man, Man",
    icon: "👨‍❤️‍💋‍👨"
  },
  {
    icon_id: 315,
    label: "Kiss: Woman, Woman",
    icon: "👩‍❤️‍💋‍👩"
  },
  {
    icon_id: 316,
    label: "Couple With Heart",
    icon: "💑"
  },
  {
    icon_id: 317,
    label: "Couple With Heart: Man, Man",
    icon: "👨‍❤️‍👨"
  },
  {
    icon_id: 318,
    label: "Couple With Heart: Woman, Woman",
    icon: "👩‍❤️‍👩"
  },
  {
    icon_id: 319,
    label: "Family",
    icon: "👪"
  },
  {
    icon_id: 320,
    label: "Family: Man, Woman, Boy",
    icon: "👨‍👩‍👦"
  },
  {
    icon_id: 321,
    label: "Family: Man, Woman, Girl",
    icon: "👨‍👩‍👧"
  },
  {
    icon_id: 322,
    label: "Family: Man, Woman, Girl, Boy",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    icon_id: 323,
    label: "Family: Man, Woman, Boy, Boy",
    icon: "👨‍👩‍👦‍👦"
  },
  {
    icon_id: 324,
    label: "Family: Man, Woman, Girl, Girl",
    icon: "👨‍👩‍👧‍👧"
  },
  {
    icon_id: 325,
    label: "Family: Man, Man, Boy",
    icon: "👨‍👨‍👦"
  },
  {
    icon_id: 326,
    label: "Family: Man, Man, Girl",
    icon: "👨‍👨‍👧"
  },
  {
    icon_id: 327,
    label: "Family: Man, Man, Girl, Boy",
    icon: "👨‍👨‍👧‍👦"
  },
  {
    icon_id: 328,
    label: "Family: Man, Man, Boy, Boy",
    icon: "👨‍👨‍👦‍👦"
  },
  {
    icon_id: 329,
    label: "Family: Man, Man, Girl, Girl",
    icon: "👨‍👨‍👧‍👧"
  },
  {
    icon_id: 330,
    label: "Family: Woman, Woman, Boy",
    icon: "👩‍👩‍👦"
  },
  {
    icon_id: 331,
    label: "Family: Woman, Woman, Girl",
    icon: "👩‍👩‍👧"
  },
  {
    icon_id: 332,
    label: "Family: Woman, Woman, Girl, Boy",
    icon: "👩‍👩‍👧‍👦"
  },
  {
    icon_id: 333,
    label: "Family: Woman, Woman, Boy, Boy",
    icon: "👩‍👩‍👦‍👦"
  },
  {
    icon_id: 334,
    label: "Family: Woman, Woman, Girl, Girl",
    icon: "👩‍👩‍👧‍👧"
  },
  {
    icon_id: 335,
    label: "Family: Man, Boy",
    icon: "👨‍👦"
  },
  {
    icon_id: 336,
    label: "Family: Man, Boy, Boy",
    icon: "👨‍👦‍👦"
  },
  {
    icon_id: 337,
    label: "Family: Man, Girl",
    icon: "👨‍👧"
  },
  {
    icon_id: 338,
    label: "Family: Man, Girl, Boy",
    icon: "👨‍👧‍👦"
  },
  {
    icon_id: 339,
    label: "Family: Man, Girl, Girl",
    icon: "👨‍👧‍👧"
  },
  {
    icon_id: 340,
    label: "Family: Woman, Boy",
    icon: "👩‍👦"
  },
  {
    icon_id: 341,
    label: "Family: Woman, Boy, Boy",
    icon: "👩‍👦‍👦"
  },
  {
    icon_id: 342,
    label: "Family: Woman, Girl",
    icon: "👩‍👧"
  },
  {
    icon_id: 343,
    label: "Family: Woman, Girl, Boy",
    icon: "👩‍👧‍👦"
  },
  {
    icon_id: 344,
    label: "Family: Woman, Girl, Girl",
    icon: "👩‍👧‍👧"
  },
  {
    icon_id: 345,
    label: "Speaking Head",
    icon: "🗣"
  },
  {
    icon_id: 346,
    label: "Bust in Silhouette",
    icon: "👤"
  },
  {
    icon_id: 347,
    label: "Busts in Silhouette",
    icon: "👥"
  },
  {
    icon_id: 348,
    label: "Footprints",
    icon: "👣"
  },
  {
    icon_id: 349,
    label: "Luggage",
    icon: "🧳"
  },
  {
    icon_id: 350,
    label: "Closed Umbrella",
    icon: "🌂"
  },
  {
    icon_id: 351,
    label: "Umbrella",
    icon: "☂"
  },
  {
    icon_id: 352,
    label: "Thread",
    icon: "🧵"
  },
  {
    icon_id: 353,
    label: "Yarn",
    icon: "🧶"
  },
  {
    icon_id: 354,
    label: "Glasses",
    icon: "👓"
  },
  {
    icon_id: 355,
    label: "Sunglasses",
    icon: "🕶"
  },
  {
    icon_id: 356,
    label: "Goggles",
    icon: "🥽"
  },
  {
    icon_id: 357,
    label: "Lab Coat",
    icon: "🥼"
  },
  {
    icon_id: 358,
    label: "Necktie",
    icon: "👔"
  },
  {
    icon_id: 359,
    label: "T-Shirt",
    icon: "👕"
  },
  {
    icon_id: 360,
    label: "Jeans",
    icon: "👖"
  },
  {
    icon_id: 361,
    label: "Scarf",
    icon: "🧣"
  },
  {
    icon_id: 362,
    label: "Gloves",
    icon: "🧤"
  },
  {
    icon_id: 363,
    label: "Coat",
    icon: "🧥"
  },
  {
    icon_id: 364,
    label: "Socks",
    icon: "🧦"
  },
  {
    icon_id: 365,
    label: "Dress",
    icon: "👗"
  },
  {
    icon_id: 366,
    label: "Kimono",
    icon: "👘"
  },
  {
    icon_id: 367,
    label: "Bikini",
    icon: "👙"
  },
  {
    icon_id: 368,
    label: "Woman’s Clothes",
    icon: "👚"
  },
  {
    icon_id: 369,
    label: "Purse",
    icon: "👛"
  },
  {
    icon_id: 370,
    label: "Handbag",
    icon: "👜"
  },
  {
    icon_id: 371,
    label: "Clutch Bag",
    icon: "👝"
  },
  {
    icon_id: 372,
    label: "Backpack",
    icon: "🎒"
  },
  {
    icon_id: 373,
    label: "Man’s Shoe",
    icon: "👞"
  },
  {
    icon_id: 374,
    label: "Running Shoe",
    icon: "👟"
  },
  {
    icon_id: 375,
    label: "Hiking Boot",
    icon: "🥾"
  },
  {
    icon_id: 376,
    label: "Flat Shoe",
    icon: "🥿"
  },
  {
    icon_id: 377,
    label: "High-Heeled Shoe",
    icon: "👠"
  },
  {
    icon_id: 378,
    label: "Woman’s Sandal",
    icon: "👡"
  },
  {
    icon_id: 379,
    label: "Woman’s Boot",
    icon: "👢"
  },
  {
    icon_id: 380,
    label: "Crown",
    icon: "👑"
  },
  {
    icon_id: 381,
    label: "Woman’s Hat",
    icon: "👒"
  },
  {
    icon_id: 382,
    label: "Top Hat",
    icon: "🎩"
  },
  {
    icon_id: 383,
    label: "Graduation Cap",
    icon: "🎓"
  },
  {
    icon_id: 384,
    label: "Billed Cap",
    icon: "🧢"
  },
  {
    icon_id: 385,
    label: "Rescue Worker’s Helmet",
    icon: "⛑"
  },
  {
    icon_id: 386,
    label: "Lipstick",
    icon: "💄"
  },
  {
    icon_id: 387,
    label: "Ring",
    icon: "💍"
  },
  {
    icon_id: 388,
    label: "Briefcase",
    icon: "💼"
  },
  { icon_id: 389, label: "Cartman Being Impolite", icon: eric }
];
export default emojiArray;
