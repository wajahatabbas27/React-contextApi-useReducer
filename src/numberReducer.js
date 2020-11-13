const numberReducer = (state,action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + action.aa
        case 'DECREMENT':
            return state - action.aa   
    }
}
export default numberReducer;