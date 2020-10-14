const textArray = 
["Hello World!", "I'm a programmer!", "L.F.I. (Looking for Internship)", ]

const typingIntv = 130;
const erasingIntv= 50;
const newTextIntv = 4000;
let textIdx = 0;
let charIdx = 0;

const typedTextSpan = document.querySelector(".typing-text");

function type()
{
    if (charIdx < textArray[textIdx].length)
    {
        // Typing
        typedTextSpan.textContent += textArray[textIdx].charAt(charIdx);
        charIdx++;
        setTimeout(type, typingIntv);
    }
    else
    {
        // Go to erasing
        setTimeout(erase, newTextIntv)

    }
}

function erase()
{
    if (charIdx > 0)
    {
        // Erasing
        typedTextSpan.textContent = textArray[textIdx].substring(0, charIdx - 1);
        charIdx--;
        setTimeout(erase, erasingIntv);
    }
    else
    {
        // next text:
        textIdx++;
        if (textIdx >= textArray.length) textIdx = 0;

        // Goto typing
        setTimeout(type, typingIntv + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() 
{
    setTimeout(type, 250);
});

