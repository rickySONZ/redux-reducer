export function manageFriends(state, action){

    let existingFriends = {friends: []}
    let friend = action.friend
    state.friends.map ( friend => existingFriends.friends.push(Object.assign({}, friend)))
    switch(action.type){
    case 'ADD_FRIEND':
        existingFriends.friends.push(Object.assign({}, friend))
        return existingFriends
    case 'REMOVE_FRIEND':
        existingFriends.friends = existingFriends.friends.filter(friend => friend.id !== action.id)
        return existingFriends
    default:
        return state;
    }
}