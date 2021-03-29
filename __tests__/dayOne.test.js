const {createObject, _calcAge} = require('../dayOne')

describe('Testing object user creation', () => {
  it('create object with name', () => {
    const response = createObject({name: 'Renan'})
    expect(response.name).toBe('Renan')
  })
  it('create object with yearOfBirth', () => {
    const response = createObject({name: 'Renan', yearOfBirth: 1996})
    expect(response.yearOfBirth).toBe(1996)
  })
  it('should return the age of person', () => {
    const response = createObject({name: 'Renan', yearOfBirth: 1996})
    expect(response.age).toBe(25)
  })
})

describe('Testing calc age function', () => {
  it('cal age', () => {
    const response = _calcAge({yearOfBirth: 1996})
    expect(response).toBe(25)
  })
})