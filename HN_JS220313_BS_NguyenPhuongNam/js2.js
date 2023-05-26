let string = " heLlo riKkei academy ";
let newString = string.trim().split(" ");
for (let i = 0; i < newString.length; i++) {
  newString[i] =
    newString[i].charAt(0).toUpperCase() + newString[i].slice(1).toLowerCase();
}

console.log(newString.join(" "));
