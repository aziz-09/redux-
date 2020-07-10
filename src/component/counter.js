import React from 'react';
import {connect} from 'react-redux';
import { increment, decrement } from '../actions/actions';



//react
 function counter(props) {
     console.log(props)
    return (
        <div>
         <h1 className='txt'> Counter</h1>
        <button className='edit' onClick={props.increment}>+</button>
            <span className='hi'>{props.count}</span>
        <button className='edit' onClick={props.decrement}>-</button>
    
        </div>
    
    )
}


//redux
//1 
const mapStateToProps=(state)=>{
    return {
        count : state.count
    };
}
//2
const mapDispatchToProps=dispatch=>{
    return {
        increment:()=>{dispatch(increment())},
        decrement:()=>{dispatch(decrement())}
    }
}



//connect redux to react 
export default connect (mapStateToProps,mapDispatchToProps)(counter);