exports.calcular = async (req, res) => {
    const body = req.body;

    const { num1, num2, operation } = body;

    if (!num1 || !num2 || !operation) {
        res.status(400).json({
            error: "Insira os parametros: num1, num2 e operation"
        })
    };

    if (operation === "+") {
        res.status(200).json({result: num1 + num2});
    } else if (operation === "-") {
        res.status(200).json({result: num1 - num2});
    } else if (operation === "*") {
        res.status(200).json({result: num1 * num2});
    } else if (operation === "/") {
        res.status(200).json({result: num1 / num2});
    } else if (operation === "sqrt") {
        const sqrtResult = calcSqrt(num1);
        res.status(200).json({result: sqrtResult});
    };
};

function calcSqrt(num) {
    let result;
    let foundSqrt = false;
    let i = 1;

    while (!foundSqrt) {
        if (i * i == num) {
            foundSqrt = true;
            result = i;
        } else if (i * i < num) {
            i += 1;
        } else if (i * i > num) {
            result = "Raiz não exata.";
            break;
        };
    };

    return result;
}