import Counter from '../component/Counter';
const  CountDisplay=({ count, increment }) => {
    return(
        <>
        <Counter count={count} increment={increment}/>
        </>
    );
};
export default CountDisplay;