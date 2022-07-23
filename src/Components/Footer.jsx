import React from "react"

function Footer() {
	var currentTime = new Date()
      const year = currentTime.getFullYear();
	return (
		<footer>
			<p> Copyright &#169; {year}</p>
		</footer>
	)
}
export default Footer
