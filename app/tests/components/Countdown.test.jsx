const React = require('react')
const ReactDOM = require('react-dom')
const expect = require('expect')
const $ = require('jquery')
const TestUtils = require('react-addons-test-utils')

const Countdown = require('Countdown')

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist()
  })

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountdown(10)

      expect(countdown.state.count).toBe(10)
      expect(countdown.state.countdownStatus).toBe('started')

      setTimeout(() => {
        expect(countdown.state.count).toBe(9)
        done()
      }, 1001)
    })

    it('should never set count less than zero', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountdown(1)

      setTimeout(() => {
        expect(countdown.state.count).toBe(0)
        done()
      }, 2001)
    })
  })
})
