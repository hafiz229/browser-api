console.log("I am here");
// alert("Someone is coming");
const rockComing = () => {
  alert("The Rock is here");
};

const askPicnic = () => {
  const response = confirm("Are you going to picnic?");
  console.log(response);
  if (response === true) {
    alert("Send me the fee");
  } else {
    console.log("Better luck next time");
  }
};

const askName = () => {
  const name = prompt("What is your name?");
  if (name) {
    console.log(name);
  }
};
