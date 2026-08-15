exports.calcular = (req, res) => {
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
    } 
};