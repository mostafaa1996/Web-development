import { useActionState, useRef, useImperativeHandle } from "react";
import { useOrderList } from "../orderListProvider";

const SubmitFormAction =
  (registerThecustomer, successDialogRef, DialogRef) =>
  (prevFormState, formState) => {
    const fullName = formState.get("FullName");
    const email = formState.get("email");
    const address = formState.get("street");
    const city = formState.get("City");
    const phone = formState.get("phone");

    console.log(fullName, email, address, city, phone);

    let errors = [];

    if (fullName.trim() === "") errors.push("Full Name is required");
    if (email.trim() === "") errors.push("Email is required");
    else if (email.includes("@") === false) errors.push("Email is not valid");
    if (address.trim() === "") errors.push("Address is required");
    if (city.trim() === "") errors.push("City is required");
    if (phone.trim() === "") errors.push("Phone is required");
    else if (phone.length !== 11 || !phone.startsWith("01"))
      errors.push("Phone number is not valid");

    if (errors.length > 0)
      return {
        errors,
        enteredData: {
          fullName,
          email,
          address,
          city,
          phone,
        },
      };

    registerThecustomer({ fullName, email, address, city, phone });
    DialogRef.current?.close();
    console.log("form submitted");
    successDialogRef.current?.openDig();

    return { errors: null };
  };

export default function SubmitForm({ ref, successDialogRef }) {
  const DialogRef = useRef();
  const { registerThecustomer } = useOrderList();

  const [formSatate, formAction] = useActionState(
    SubmitFormAction(registerThecustomer, successDialogRef, DialogRef),
    {
      errors: null,
    }
  );

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
            defaultValue={formSatate.enteredData?.address}
          />
        </div>

        <div className="control-row">
          <div className="control">
            <label>Telephone</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              defaultValue={formSatate.enteredData?.phone}
            />
          </div>

          <div className="control">
            <label>City</label>
            <input
              type="text"
              id="City"
              name="City"
              defaultValue={formSatate.enteredData?.city}
            />
          </div>
        </div>

        {formSatate.errors && formSatate.errors.length > 0 && (
          <ul>
            {formSatate.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-row justify-end gap-6 items-center">
          <button type="button" onClick={() => DialogRef.current.close()}>
            Cancel
          </button>
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
