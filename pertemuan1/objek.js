const user = {
    name : "Ucup",
    age : 20,
    major : "Web Developer"
};

console.log(user.name); // in php = user->name
console.log(user["name"]);

// Looping object dengan for in.
for (const key in user) console.log(user[key]);