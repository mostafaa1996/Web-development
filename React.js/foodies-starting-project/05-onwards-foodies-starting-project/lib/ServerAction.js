"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meal";
import { revalidatePath } from "next/cache";

function IsInvalid(text) {
  return !text || text.trim() === "";
}
export async function ShareMeal(prevState , formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  let error = [];

  if(IsInvalid(meal.creator)) error.push("you must enter creator");
  if(IsInvalid(meal.creator_email)) error.push("you must enter creator_email");
  if(IsInvalid(meal.title)) error.push("you must enter title");
  if(IsInvalid(meal.summary)) error.push("you must enter summary");
  if(IsInvalid(meal.instructions)) error.push("you must enter instructions");
  if(!meal.creator_email.includes("@")) error.push("Invalid email");
  if(meal.image.size === 0) error.push("you must add image");

  if (error.length > 0) {
    return {errors : error};
  }

  error = null;
  await saveMeal(meal);
  revalidatePath("/meals" , 'layout');
  redirect("/meals");
}
