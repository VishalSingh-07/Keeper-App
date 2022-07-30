import React from "react"
import AddBoxIcon from "@mui/icons-material/AddBox"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props) {
	const [isExpanded, setExpanded] = React.useState(false)
	const [note, setNote] = React.useState({
		title: "",
		content: "",
	})
	function handleChange(event) {
		const { name, value } = event.target
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			}
		})
	}
	function submitNote(event) {
		props.onAdd(note)
		setNote({
			title: "",
			content: "",
		})
		event.preventDefault()
	}
	function expand() {
		setExpanded(true)
	}
	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						className="titleinput"
						onChange={handleChange}
						name="title"
						placeholder="Title"
						value={note.title}
					/>
				)}
				<textarea
					onClick={expand}
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows={isExpanded ? 3 : 1}
					value={note.content}
				/>
				<Zoom in={isExpanded}>
					<Fab onClick={submitNote}>
						<AddBoxIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	)
}

export default CreateArea
