import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Rellax from 'rellax'

export default class Parallax extends PureComponent {
	componentDidMount() {
		if (this.el) {
			const { center, horizontal, onMove } = this.props
			const config = {}

			if (center) {
				config.center = true
			}

			if (horizontal) {
				config.horizontal = true
			}

			if (typeof onMove === 'function') {
				config.callback = onMove.bind(this)
			}

			this.rellax = new Rellax(this.el, config)
		}
	}

	componentWillUnmount() {
		if (this.rellax) {
			this.rellax.destroy()
		}
	}

	render() {
		const {
			as,
			center,
			horizontal,
			onMove,
			percentage,
			speed,
			zIndex,
			..props
	} = this.props
const CustomComponent = as

return (
	<CustomComponent
		ref={el => { this.el = el }}
		data-rellax-percentage={percentage}
		data-rellax-speed={speed}
		data-rellax-zindex={zIndex}
		{...props}
	/>
)
	}
}

Parallax.propTypes = {
	as: PropTypes.string,
	center: PropTypes.bool,
	horizontal: PropTypes.bool,
	onMove: PropTypes.func,
	percentage: PropTypes.number,
	speed: PropTypes.number,
	zIndex: PropTypes.number
}

Parallax.defaultProps = {
	as: 'div'
}
