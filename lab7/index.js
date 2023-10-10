/**
 * 1.
 */

/**
 * 'this' object is lost because it is invoked from askPassword function
 * without specifying calling object. Then calling object will be window object.
 * Window object has no property called 'name'
 */
function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") 
        ok();
    else 
        fail();
}
let user = { 
    name: 'John',
    loginOk() {
        console.log(this);
        alert(`${this.name} logged in`);
    },
    loginFail() { 
        alert(`${this.name} failed to log in`);
    }
}

// wrapper
// askPassword(() => user.loginOk(), () => user.loginFail());

// call 
// askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));

// apply
// askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));

// bind
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

/**
 * 2.
 * Using bind
 */
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        const log = (student) => {
            console.log(this.title + ": " + student)
        }
        log.bind(this);
        this.students.forEach(log); 
    }
};
group.showList();

