import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meal";
import { Suspense } from "react";

async function GetMeals() {
  const meals = await getAllMeals();
  return <MealsGrid  meals={meals}/> ;
}
export default async function MealsPage() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p> Join our community and share your favorite recipes!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<h2 className={classes.loading}>Loading meals...</h2>}>
          <GetMeals />
        </Suspense>
      </main>
    </>
  );
}
