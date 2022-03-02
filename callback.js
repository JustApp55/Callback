function add(a,b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function compute(a, b, op) {
    return op(a, b);
}

let result1 = compute(10, 5, add);
let result2 = compute(10, 5, subtract);

console.log(result1)
console.log(result2)

const flowers = ['rose', 'archid', 'daisy']
flowers.forEach(function(flower, idx) {
    console.log(`${idx + 1}) ${flower}`)
})

const colors = ['red', 'green', 'blue'];
console.log('BEFORE the forEach...');
colors.forEach(function(color, idx) {
    console.log(`${idx + 1}) - ${color}`)
})
    console.log('AFTER the forEach...');

    console.log('Code before the asynchronous function call');

setTimeout(function() {
  console.log('setTimeout code')
});

console.log('Code after the asynchronous function call');

// Synchronous function
function getFriends() {
    return ['Fred', 'Barney'];
  }
  
  // Get the friends
  let friends = getFriends();
  
  // The friends array is ready to work with because getFriends
  // is synchronous and returned the array of friends we wanted
  friends.forEach(function(friend) {
    console.log(friend);
  });

  // Refactor to accept a callback function
// to be called when the data is ready
function getFriendsAsync(cb) {
    setTimeout(function() {
      // pass the results to the provided callback
      cb(['Fred', 'Barney']);
    }, 0);
  }
  
  // Execute and provide it with an anonymous callback function
  // to be called by the getFriendsAsync function
  getFriendsAsync(function(friends) {
    friends.forEach(function(friend) {
      console.log(friend);
    });
  });

  let todos = ['Buy milk', 'Mow lawn'];

// Below line of code won't work - looks like a statement block
// let todoObjects = todos.map(todo => {todo: todo, done: false});

// Wrap the implicit returned object in parens
let todoObjects = todos.map(todo => ({todo: todo, done: false}));
console.log(todoObjects)
  
