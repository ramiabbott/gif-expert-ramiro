import { useState } from "react";
import { AddCategory, GifGrid, GifItem } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    categories.includes(newCategory)
      ? null
      : setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <button onClick={() => onAddCategory()}>Agregar</button>
      
        {categories.map((category) => (
          <GifGrid 
          key={category} 
          category={category}
          
          />
        ))}
    
    </>
  );
};
