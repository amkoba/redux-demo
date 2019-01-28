import axios from 'axios';
import store from '../stores/store';

const result = (res) => ({
    type: 'USERS', data: res
  })

const getUsers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);        
        dispatch(result(res.data));
    })
}
}

export default getUsers;

// export const fetchTreeData = () => {
//     return dispatch => {
//       axios.get(config.endpoint + 'tree')
//         .then(res => dispatch(receiveTreeData(res.data)))
//         .catch(err => dispatch(treeRequestFailed(err)))
//     }
// }