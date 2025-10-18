import { useActionState, useRef, useImperativeHandle } from "react";

const SignupAction = () => {};

export default function Signup({ ref }) {
  const DialogRef = useRef();

  const [formSatate, formAction] = useActionState(SignupAction, {
    errors: null,
  });

  useImperativeHandle(ref, () => ({
    open: () => {
      DialogRef.current.showModal();
    },
    close: () => {
      DialogRef.current.close();
    },
  }));

  return (
    <dialog
      ref={DialogRef}
      className="p-6 rounded-xl shadow-lg md:w-[30%] w-[60%] bg-[#E6DAC9]"
    >
      <form action={formAction}>
        <h2 className="text-xl md:text-2xl font-bold my-2">checkout</h2>
        <p className="mb-2 text-sm">Total Amount:${formSatate.totalAmount}</p>

        <div className="control">
          <label htmlFor="email">Full Name</label>
          <input
            id="Full-Name"
            type="text"
            name="FullName"
            defaultValue={formSatate.enteredData?.fullName}
          />
        </div>

        <div className="control">
          <label htmlFor="password">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            defaultValue={formSatate.enteredData?.email}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            defaultValue={formSatate.enteredData?.street}
          />
        </div>

        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">Telephone</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              defaultValue={formSatate.enteredData?.phone}
            />
          </div>

          <div className="control">
            <label htmlFor="last-name">City</label>
            <input
              type="text"
              id="City"
              name="City"
              defaultValue={formSatate.enteredData?.City}
            />
          </div>
        </div>

        <div className="flex flex-row justify-end gap-6 items-center">
          <button type="cancel">Cancel</button>
          <button
            type="submit"
            className="bg-yellow-400 px-5 py-2 rounded-md mt-2 text-[#110F0D] mb-2"
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
}
