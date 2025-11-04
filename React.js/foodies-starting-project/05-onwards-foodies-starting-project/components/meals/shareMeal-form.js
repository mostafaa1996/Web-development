"use client";
import { useActionState } from "react";
import classes from "./share-meal-form.module.css";
import { ShareMeal } from "@/lib/ServerAction";
import MealFormSubmitButton from "./meal-form-submit";

export default function ShareMealForm({ children }) {
  const [state, ShareMealAction] = useActionState(ShareMeal, { errors: null });
  return (
    <form className={classes.form} action={ShareMealAction}>
      {children}
      {state.errors && (
        <ul>
          {state.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p className={classes.actions}>
        <MealFormSubmitButton />
      </p>
    </form>
  );
}
