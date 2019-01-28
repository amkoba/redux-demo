const getUsers = (state = {users: []}, action) => {
    if(action.type == 'USERS'){
        return {users: action.data};
    }else{
        return state;
    }
}

export default getUsers;