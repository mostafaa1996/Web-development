'use client';

import { useFormStatus } from "react-dom";

export default function MealFormSubmitButton() {
    const status = useFormStatus();
    return (
        <button
            type="submit"
            disabled={status.pending}
        >
            {status.pending ? "Saving..." : "Share Meal"}
        </button>
    );
}