import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

type newNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function NewNote({onSubmit, onAddTag, availableTags}: newNoteProps){
    return(
        <div>
        <h1 className="mb-4">NewNote</h1>
        <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
        ></NoteForm>
        
        </div>
    )
}