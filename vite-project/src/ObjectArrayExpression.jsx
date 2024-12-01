
function ObjectArrayExpression() {
    const user = {
        name: "james",
        email: "james@test.com"
    };
    const color = ["red", "blue", "white"];
    const number = [1,2,3,4];

    return (
        <div>
            <p>user info = {`name=${user.name}, email=${user.email}`}</p>
            <p>color of red = {color[0]}</p>
            <p>count of colors = {color.length}</p>

            <p>number value change = {number.map(n => n * 2).join(",")}</p>
            <p>filter test = {number.filter(n => n % 2 === 0).join(",")}</p>
        </div>
    )
}

export default ObjectArrayExpression