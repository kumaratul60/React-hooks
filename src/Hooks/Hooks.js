import React, { useState } from 'react'

function Hooks() {
const [randomNo, setRandomNo] = useState(Math.floor(Math.random()*101)); // random Number between 0 and 100

// RULES OF HOOKS
// 1) Only call hooks at the TOP level
//      - This means don't call hooks inside loops,conditions or nested fuctions
//      - Always use Hooks at the top level pf your react functional
//      - By following this rule, you ensure hooks are called in the same order each time a componenet renders
//      - This allowsreact to correctly preserve yhe state of hooks betwwn useState / useEffect calls

// TOP level =>  If we call hooks from any other level raither then top level OR call from inside loop or conditons or nested functions in that case 
//               it would be break in CALL ORDER. 
// CALL ORDER -> The CALL ORDER is ESSENTIAL for hooks to work correctly or An ORDER which CALL the HOOKS

// 2)  Don't call hooks from  regular JS functions
//      - Call hooks from REACT FC'S
//      - Call hooks from custom hooks


//  BAD -  breaks the call order 
// if(randomNo>50) {
//     const [test,setTest] = useState("Whoops")
}

// BAD - conditional must go inside the useEffect
    // if(randomNo>50) {
    //     useEffect(() => {
    //         console.log("random")
    //     })
    // }

//  BAD - no nested functions 
    // const testing = ()=>{
    //     useEffect(() => {
    //         console.log("random")
    //     })
    // };

// 🚀
    // useEffect(() =>{
        
    // })



    return (
        <div>
            
        </div>
    )
    // }

export default Hooks
