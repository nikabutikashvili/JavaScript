class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
export const userData = (function() {
    let user1 = new User("John2233@mail.com","1234" );
    let user2 = new User("Bob443@yahoo.com", "2356");
    let user3 = new User("Kate776@email.com","Geolab12#$");
    let user4 = new User("Jack665@mail.com", "7788");
    let user5 = new User("Nick887@mail.com", "6644");
    let users = [user1, user2, user3, user4, user5];
    return {
        getUsers() {
            return users;
        }
    }
})();


