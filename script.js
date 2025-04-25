// 1) Create a countdown bomb:
// bombTimer(seconds) logs each second until it hits 0 and then logs "💥 Boom!".
// Add a defuse() function that can be called anytime before 0 to cancel the countdown. If successful, log “🧯 Defused!”.
console.log("კოდში ფუნქციები მაქვს დაკომენტარებული და განბლოკე :D ");

function bombTimer(seconds) {
  const timer = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds === 0) {
      console.log("💥 Boom!");
      clearInterval(timer);
    } else if (seconds === 2) {
      console.log("🧯 Defused!");
      defuse(timer);
    }
  }, 1000);
}

// bombTimer(4);

function defuse(timer) {
  clearInterval(timer);
}

// 2) Create a function that takes a string and logs each character one by one every 200ms — like a typewriter effect.
// Example:
// typeText("Hello world");
// Should log:
// H (0.2s)...e...l...

function logCharacters(index) {
  const text = "Hello world";

  const interval = setInterval(() => {
    console.log(text.charAt(index));
    index++;

    if (text.charAt(index) === "") {
      clearInterval(interval);
    }
  }, 200);
}

// logCharacters(0);
// 3) Create a function that takes a random special number like 11, 22, 33, 44 ... 99, this function randomly should log random 2 digit special number 11, 22, 33... 99 and stops when argument and random number are same.
// Example: randomNum(22)
// should log:
// 22 11,
// 22, 77
// 22, 22 //should stop.

const specNum = [11, 22, 33, 44, 55, 66, 77, 88, 99];

function RandomNumber(num) {
  const int = setInterval(() => {
    const randomNum = Math.floor(Math.random() * specNum.length);
    console.log(num, specNum[randomNum]);
    if (num === specNum[randomNum]) {
      console.log("Boom!");
      clearInterval(int);
    }
  }, 500);
}

// RandomNumber(33);

// 4)Create a function that imitates to return fake data, use setTimeout. make both async/await and .then.catch methods.

async function ReturnFakeData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userId: 1, user: "Andria" });
      reject("Data not found");
    }, 1000);
  });
  //   let data = await promise; ეს await
  //   console.log("User Data", data);

  //   promise.then((res) => console.log("User Data", res)).cath(res => console.log(res));
}

ReturnFakeData();
// 5) Create a sleep function. make a function that takes a ms as an argument and when you call this function waits untill this function resolved. use setTimeout and promises.
// eg: console.log('first')
// await sleep(2000)
// console.log('second')
// second should sleep after 2 seconds

function sleep(ms) {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, ms);
  //   });
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sleep2() {
  console.log("first");
  await sleep(2000);
  console.log("second");
}
// sleep2();
