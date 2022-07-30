import React from "react"
import DeleteIcon from "@mui/icons-material/Delete"
function Note(props) {
	function handleClick() {
		props.onDelete(props.id);
	}
	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button className="deletebutton"onClick={handleClick}><DeleteIcon/></button>
		</div>
	)
}

export default Note

// "@mui/material": "^5.9.2",
// 		"@mui/styled-engine-sc": "^5.8.0",
// "@emotion/react": "^11.9.3",
// 		"@emotion/styled": "^11.9.3",
