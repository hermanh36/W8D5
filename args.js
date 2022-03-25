function sum(args1,args2) {
  let sum = 0;
  for(let i = 0; i< arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

function newSum(...args) {
  let sum = 0;
  args.forEach((arg) => {
    sum+=arg;
  });
  return sum;
}

// console.log(newSum(1,2,3,4));

Function.prototype.myBind = function(ctx,...args) {
  let that = this;

  return function(...args2) {
    all_args = args.concat(args2);
    return that.apply(ctx,all_args);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(counter) {
  let sum = 0;
  return function summation(num) {
    if(counter > 1){
      sum += num;
      counter --;
      return summation;
    }
    else{
      sum += num;
      return sum;
    }
  };
}

// const sums = curriedSum(4);
// console.log(sums(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs){
  let that = this;
  args = [];
  return function currying(num){
    if (numArgs > 1) {
      args.push(num);
      numArgs--;
      return currying;
    } else {
      args.push(num);
      return that.apply(null,args);
    }
  };
};

Function.prototype.curry2 = function (numArgs) {
  let that = this;
  args = [];
  return function currying(num) {
    if (numArgs > 1) {
      args.push(num);
      numArgs--;
      return currying;
    } else {
      args.push(num);
      return that(...args);
    }
  };
};