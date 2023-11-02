import { CreateNoteApi, GetAllNotesApi, ResponseGetAllNotes, RestCreateNote } from '@utils/api';
import { userInfoAtom } from '@utils/jotai';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import NoteForm from './components/NoteForm';
import NoteTable from './components/NoteTable';

const HomeContainer: React.FC = () => {
  const { register: createNoteRegister, handleSubmit: createNewNote } = useForm<RestCreateNote>();
  const [userInfo] = useAtom(userInfoAtom);
  const [note, setNote] = useState<ResponseGetAllNotes>();

  const createNoteFormClick: SubmitHandler<RestCreateNote> = (data) => {
    const note: RestCreateNote = { ...data, userId: userInfo.id };
    new CreateNoteApi().createNote(note).then((res) => {
      if (res.status == 201) {
        new GetAllNotesApi().getAllNotes(userInfo.id).then((res) => {
          if (res.data.data) {
            setNote(res.data);
          }
        });
      }
    });
  };

  useEffect(() => {
    new GetAllNotesApi().getAllNotes(userInfo.id).then((res) => {
      if (res.data.data) {
        setNote(res.data);
      }
    });
  }, [setNote, userInfo.id]);

  return (
    <div className="h-screen w-screen grid grid-cols-4 grid-rows-1">
      <NoteTable note={note} />
      <NoteForm
        register={createNoteRegister}
        handleSubmit={createNewNote}
        formClick={createNoteFormClick}
      />
    </div>
  );
};
export default HomeContainer;
