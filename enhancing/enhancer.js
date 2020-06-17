module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    return { ...item }
  } else if(item.enhancement < 20 && item.enhancement >=0) {
    return { ...item, enhancement: item.enhancement + 1 }
  }
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
