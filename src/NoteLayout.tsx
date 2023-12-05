import { Note } from "./App"
import { Navigate, useParams, Outlet, useOutletContext} from 'react-router-dom'

type NoteLayoutProps = {
    notes: Note[]
}

export function NoteLayout({notes}: NoteLayoutProps){
    const {id} = useParams()
    const note = notes.find(n => n.id === id)

    if(note == null) return <Navigate to="/" replace ></Navigate>

    return <Outlet context={note}></Outlet>
}

export function useNote() {
    return useOutletContext<Note>()
}