import isRn from '../src'

test('should be defined', () => {
  expect(isRn).toBeDefined()
})

test('should return bool', () => {
  expect(typeof isRn()).toBe('boolean')
})
