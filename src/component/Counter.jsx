const Counter=({count,increment})=>
{
    return(
        <>
        <h2>count:{count}</h2>
        <button onClick={increment}>Button</button>
        </>
    );
}
export default Counter;