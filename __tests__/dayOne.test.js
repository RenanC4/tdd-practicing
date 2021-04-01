const {createObject, _calcAge, _getAddress, _sum} = require('../dayOne')

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

describe('Testing get address function', () => {
  it('getAddress', () => {
    const response = _getAddress({cep: 13187682})
    expect(typeof response).toBe('object')
  })
  
  it('getAddress must return lat long', () => {
    const response = _getAddress({cep: 13187682})
    expect(response.lat).toBe(123321)
    expect(response.long).toBe(-123321)
  })
})

describe('Testing sum object values', () => {
  it('sum', () => {
    const std = [
      {value: 10},
      {value: -10}
    ]
    const response = _sum({std})
    expect(response).toBe(0)
  })
  
})