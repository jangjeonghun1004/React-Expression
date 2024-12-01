
function FunctionExpression() {
    const getGreading = (name) => `Hellow~~ ${name}`;
    const formatDate = (date) => { return new Date(date).toLocaleDateString(); };

    const items = [{id:1, price:10}, {id:2, price:20}];
    const calculateTotal = (items) => { return items.reduce((sum, item) => sum + item.price, 0); };

    const elements = (<p>some text elements.</p>);

    return (
        <div>
            <p>greading = {getGreading("james")}</p>
            <p>formatDate = {formatDate("2024-10-10")}</p>

            <p>array of reduce = {calculateTotal(items)}</p>
            <p>Good = {(() => {
                const hours = new Date().getHours;
                return hours < 12 ? "morning" : "afternoot";
            })()}</p>

            {elements}
        </div>
    );
}

export default FunctionExpression;