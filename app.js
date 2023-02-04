const uesr = {}
const nameSetter = setterGenerator('name')
nameSetter('jack')
console.log(uesr) // {name: ‘jack’}
