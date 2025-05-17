const accountId = 123466
let accountEmail = "hitesh@gmail.com"
var accountPassword = "1123"
accountCity = "jaipur"
let accountState;

//accountId = 3
accountEmail = "hc@hotmail.com"
accountPassword = "666"
accountCity = "Mithi"
/*
Prefer not to user var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])