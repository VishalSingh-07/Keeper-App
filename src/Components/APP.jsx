import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"

function APP() {
	return (
		<div>
			<Header />
			<Footer />
			{notes.map((notes) =>
					<Note key={notes.key} title={notes.title} content={notes.content} />
			)}
		</div>
	)
}

export default APP
