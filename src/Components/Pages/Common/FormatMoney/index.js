function FormatMoney({price , suffixes}){
    const formatMoney = (n, currency) => {
        return (
        n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
        }) + currency
        );
    };

    return formatMoney(price , suffixes)
}

export default FormatMoney;