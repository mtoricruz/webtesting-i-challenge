module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if(item.durability < 100 && item.durability >=0){
    return {...item, durability: 100}
  } else {
    return ('nope you failed')
  }
  // const values = Array.isArray(item) ? numbers : Array.from(arguments)
  // return values.reduce((sum, value) => {
  //   console.log(value)
  //   return sum + value;
  // }, 0)
}

function get(item) {
  return { ...item };
}
