const users = [
    {id: '1', name: 'Paulina', age: 22, email: 'pau@.com'},
    {id: '2', name: 'Caleb', age: 23, email: 'caleb@.com'}
]

function getAllUsers(){
    return users;
}

function getUserByID(){
    return users.find(user => user.id === id) || null;
}

function create(name, email,age){
    const newUser = {
        id: (users.length +1).toString(),
        name,
        email,
        age
    }
    users.push(newUser);
    return users;
}

module.exports = {
    getAllUsers,
    getUserByID, 
    create
}