 module.exports = {createObject, _calcAge}
 
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