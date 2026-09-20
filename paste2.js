delCoins = function(amount) {
    return typeof log != "undefined" && log.log({
        event: "adjustCoins",
        value: -amount
    });
};

delCoins(99999999999)
