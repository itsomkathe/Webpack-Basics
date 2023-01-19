// import 'core-js';
// import 'regenerator-runtime/runtime';

const obj = {
    a: 10,
    b: 25,
    c: "Hey"
}

const myObj = {
    ...obj, d: "There"
}

console.log('%c ES7 Object Spread ', 'color: #0099ff', myObj);
console.log('%c ES8 Object Values ', 'color: #03fce3', Object.values(myObj));

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('%c Resolved 🎉', 'color: #39de02');
      }, 2000);
    });
  }
  
async function asyncCall() {
  console.log('%c Calling 📞', 'color: #bdde02');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
  
asyncCall();