 module.exports = {createObject, _calcAge, _getAddress}
 
 function createObject({name, yearOfBirth}) {
  const Person = {}
  Person.name = name
  Person.yearOfBirth = yearOfBirth
  Person.age = _calcAge({yearOfBirth})
  return Person
}


function _calcAge({yearOfBirth}) {
  let age = new Date()
  age = age.getFullYear() - yearOfBirth
  return age
}

function _getAddress({cep}) {
  return {
    lat: 123321,
    long: -123321
  }
}