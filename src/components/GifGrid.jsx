import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hook/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <p>Cargando...</p>
      }
      <div className="card-grid">
          {
            images.map((image) => (
              <GifItem 
              key={image.id}
               {...image}
              />
            ))
          }

      </div>
      <p>hola mundo</p>
    </>
  );
};

//oQ0tIR6s2RDJvuLhSOkQvc0eIrviIxJw
