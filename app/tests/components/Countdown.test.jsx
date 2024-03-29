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

    it('should pause countdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountdown(3)
      countdown.handleStatusChange('paused')

      setTimeout(() => {
        expect(countdown.state.count).toBe(3)
        expect(countdown.state.countdownStatus).toBe('paused')
        done()
      }, 1001)
    })

    it('should change status to stopped when countdown reaches zero', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountdown(3)

      setTimeout(() => {
        expect(countdown.state.count).toBe(0)
        expect(countdown.state.countdownStatus).toBe('stopped')
        done()
      }, 3100)
    })

    it('should reset count when status is changed to stopped', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountdown(3)
      countdown.handleStatusChange('stopped')

      setTimeout(() => {
        expect(countdown.state.count).toBe(0)
        expect(countdown.state.countdownStatus).toBe('stopped')
        done()
      }, 1100)
    })
  })
})
