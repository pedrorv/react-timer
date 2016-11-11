const React = require('react')
const ReactDOM = require('react-dom')
const expect = require('expect')
const $ = require('jquery')
const TestUtils = require('react-addons-test-utils')

const Timer = require('Timer')

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist()
  })

  it('should start counting on status change to started', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer />)
    timer.handleStatusChange('started')

    setTimeout(() => {
      timer.handleStatusChange('paused')
      expect(timer.state.count).toBe(1)
      done()
    }, 1100)
  })

  it('should clear counter when status change to stopped', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer />)
    timer.handleStatusChange('started')

    setTimeout(() => {
      timer.handleStatusChange('stopped')
      expect(timer.state.count).toBe(0)
      expect(timer.state.timerStatus).toBe('paused')
      done()
    }, 2100)
  })
})
