import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSaveProject , onCancellation }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  const [ModalParagragh, setModalParagragh] = useState("");

  function UpdatingProjectDetails() {
    const titleVal = title.current.value;
    const descriptionVal = description.current.value;
    const dueDateVal = dueDate.current.value;

    if (titleVal.trim() === "") {
      setModalParagragh("Title cannot be empty.");
      modal.current.open();
      return;
    } else if (descriptionVal.trim() === "") {
      setModalParagragh("Description cannot be empty.");
      modal.current.open();
      return;
    } else if (dueDateVal.trim() === "") {
      setModalParagragh("Due Date cannot be empty.");
      modal.current.open();
      return;
    }

    return {
      title: titleVal,
      description: descriptionVal,
      dueDate: dueDateVal,
      id: Math.floor(Math.random() * 1000001), //id range: 0 to 1000000
      tasks: [],
    };
  }

  return (
    <>
      <Modal
        ref={modal}
        ButtonCaption="OK"
        ButtonAction={() => modal.current.close()}
      >
        <h2 className="text-3xl font-bold text-stone-700 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">{ModalParagragh}</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick = {onCancellation} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={() => onSaveProject(UpdatingProjectDetails)}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="w-2/3">
          <Input type="text" ref={title} Label="Title" InputType="input" />
          <Input ref={description} Label="Description" InputType="textarea" />
          <Input type="date" ref={dueDate} Label="Due Date" InputType="input" />
        </div>
      </div>
    </>
  );
}
