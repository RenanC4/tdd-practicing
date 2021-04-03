const {_calculateDiference} = require('../mathCalcs')
describe('Function that calculate the diference between two values', () => {

  it('should return loss when d2 is greather than d1', () => {
    const finalBalanceD2InitilBalanceD1 = 100;
    const finalBalanceD1 = -1
    const result = _calculateDiference({
      d2: finalBalanceD2InitilBalanceD1, 
      d1: finalBalanceD1
    })
    expect(result).toEqual(-101)
  })

  
  it('should return gain when d1 is greather than d2', () => {
    const finalBalanceD2InitilBalanceD1 = -100;
    const finalBalanceD1 = 1
    const result = _calculateDiference({
      d2: finalBalanceD2InitilBalanceD1, 
      d1: finalBalanceD1
    })
    expect(result).toEqual(101)
  })

  it('should return gain when d1 is greather than d1, still negative', () => {
    const finalBalanceD2InitilBalanceD1 = -100;
    const finalBalanceD1 = -80
    const result = _calculateDiference({
      d2: finalBalanceD2InitilBalanceD1, 
      d1: finalBalanceD1
    })
    expect(result).toEqual(20)
  })

  it('should return zero when d1 is equal than d1, still negative', () => {
    const finalBalanceD2InitilBalanceD1 = -100;
    const finalBalanceD1 = -100
    const result = _calculateDiference({
      d2: finalBalanceD2InitilBalanceD1, 
      d1: finalBalanceD1
    })
    expect(result).toEqual(0)
  })

})