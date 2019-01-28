const add = (state = {count: 0}, action) => {
    if(action.type == 'ADD'){
        return {
            count: state.count + 1
        }
    }else{
        return state;
    }
}

export default add;