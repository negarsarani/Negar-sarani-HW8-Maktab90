const user = {};
function setterGenerator(key) {
  return function name(value) {
    return user[key] = value;
  };
}
const nameSetter = setterGenerator("name");
nameSetter("jack");
console.log(user); // {name: ‘jack’}
