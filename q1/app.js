const user = {};
function setterGenerator(key) {
  return function name(value) {
    return this[key] = value;
  };
}
const nameSetter = setterGenerator("name");
nameSetter.call(user,"jack");
console.log(user); // {name: ‘jack’}
