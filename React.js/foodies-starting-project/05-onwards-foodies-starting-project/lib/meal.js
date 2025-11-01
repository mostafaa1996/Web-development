import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';
const db = sql('meals.db');

export async function getAllMeals() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    //throw new Error('Something went wrong');
    const stmt = db.prepare('SELECT * FROM meals');
    return stmt.all(); //all used to get all the data .... but get() used to get single data
}

export function getMeal(slug) {
    const stmt = db.prepare('SELECT * FROM meals WHERE slug = @slug');
    return stmt.get({ slug }); 
}

export async function saveMeal(meal){
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extentions = meal.image.name.split('.').pop();
  const FileName = `${meal.slug}.${extentions}`;
  const bufferedName = await meal.image.arrayBuffer();

  const stream = fs.createWriteStream(`public/images/${FileName}`);
  stream.write(Buffer.from(bufferedName) , (error)=>{
      if(error){
        throw new Error("Something went wrong");
      }
  });
  meal.image = `/images/${FileName}`;
  const stmt = db.prepare('INSERT INTO meals VALUES (null, @slug, @title, @image, @summary, @instructions, @creator, @creator_email)');
  stmt.run(meal);
}