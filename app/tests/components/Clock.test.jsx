const React = require('react')
const ReactDOM = require('react-dom')
const expect = require('expect')
const $ = require('jquery')
const TestUtils = require('react-addons-test-utils')

const Clock = require('Clock')

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist()
  })

  describe('render', () => {
    it('should render clock to output', () => {
      const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
      const $el = $(ReactDOM.findDOMNode(clock))
      const actualText = $el.find('.clock-text').text()

      expect(actualText).toBe('01:02')
    })
  })

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />)
      let seconds = 615
      let expected = '10:15'
      let actual = clock.formatSeconds(seconds)
      expect(actual).toBe(expected)
    })

    it('should format seconds when min/sec less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />)
      let seconds = 61
      let expected = '01:01'
      let actual = clock.formatSeconds(seconds)
      expect(actual).toBe(expected)
    })
  })
})
