const Counter=({count,increment})=>
{
    return(
        <>
        <h2>counter:{count}</h2>
        <button onClick={increment}>increment</button>
        </>
    );
}
export default Counter;