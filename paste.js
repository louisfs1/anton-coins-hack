addCoins = function(amount) {
    return typeof log != "undefined" && log.log({
        event: "adjustCoins",
        value: amount
    });
};

addCoins(99999999999)
