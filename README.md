# anton-coins-hack
Use on anton.app

Hey there, you want to get unlimited coins on Anton (anton.app)? No worries, just execute the paste.js file in the browser console (PC needed).
You may have to type `allow pasting` to paste the content in paste.js, but that shouldn't be an issue.
I advise you to not use your main account on this, since you may get banned doing that.
<br>As you can see here, it works! (Tested at September 20, 2026)<br>
<img width="266" height="161" alt="Screenshot 2026-09-20 at 16 37 56" src="https://github.com/user-attachments/assets/c69aaaa1-2b4b-45c0-808c-c91d62fed34c" />
<br><br>
If this gets patched, i'll might update it.

Funnily enough, that is only 9 lines of code. Paste this:

```
addCoins = function(amount) {
    return typeof log != "undefined" && log.log({
        event: "adjustCoins",
        value: amount
    });
};

addCoins(99999999999)
console.log("Enjoy your coins!")
```

Have fun!
~ louisfs
