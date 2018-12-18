import React from 'react'

function Icon(props) {
	const {
		color,
		size,
		view
	} = props
	return(
		<svg
		fill={color}
		width={size}
		height={size}
		viewBox={view}
		>
		{props.children}
		</svg>
		)
}
export default Icon;