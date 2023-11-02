import { Button, TextFieldInput } from '@radix-ui/themes';
import { NoteFormProps } from '@utils/models';
const NoteForm: React.FC<NoteFormProps> = (props) => {
  const { register, handleSubmit, formClick } = props;
  return (
    <div className="col-start-4 flex justify-center items-center">
      <form
        className="w-[80%] [&>*]:w-full [&>*]:my-4 [&>*]:p-2"
        onSubmit={handleSubmit(formClick)}
      >
        <TextFieldInput placeholder="title" {...register('title', { required: true })} />
        <TextFieldInput placeholder="content" {...register('content', { required: true })} />
        <Button>New Note</Button>
      </form>
    </div>
  );
};
export default NoteForm;
