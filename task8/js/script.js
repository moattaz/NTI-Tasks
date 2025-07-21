function add(name, id, balance, users) {
    var user = {
        Name: name,
        Id: id,
        Balance: balance
    }
    users.push(user)
}

function edit(users) {
    do {
        var id = prompt("Enter id you want edit")
        var ubalance = prompt("enter balance to edit")
        var index = users.findIndex((item) => item.id == id)
    }
    while (index == -1)
    users[index].Balance = ubalance
}

function deleteuser(users) {
    do {
        var id = prompt("enter id that you want delete")
        var index = users.findIndex((item) => item.Id == id)
    }
    while (index == -1)
    users.splice(index, 1)
}
var userNumber = prompt("enter user number")
var users = []
for (var i = 0; i < userNumber; i++) {
    var name = prompt("enter name")
    var id = prompt("enter id")
    var balance = prompt("enter balance")
    add(name, id, balance, users)
}

console.table(users)
edit(users)
console.table(users)
deleteuser(users)
console.table(users)
