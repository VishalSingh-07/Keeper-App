import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
// import notes from "../notes"
import CreateArea from "./CreateArea"
import Navbar from "./Navbar"
function APP() {
	const [notes, setNotes] = React.useState([])

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote]
		})
	}
	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id
			})
		})
	}
	return (
		<div>
			{/* <Header /> */}
			<Navbar/>
			<CreateArea onAdd={addNote} />

			{notes.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
					/>
				)
			})}
			<Footer />
			{/* {notes.map((noteItem) => (
				<Note key={notes.key} title={notes.title} content={notes.content} />
			))} */}
			{/* <Note key={1} title="Note title" content="Note Content" /> */}
		</div>
	)
}

export default APP
