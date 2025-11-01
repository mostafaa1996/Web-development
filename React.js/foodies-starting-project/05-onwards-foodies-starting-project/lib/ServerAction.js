'use server';

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meal";

export async function ShareMeal(formData) {
    'use server';
    const meal = {
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
    }
    
    await saveMeal(meal);
    redirect('http://localhost:3000/meals');
  } 