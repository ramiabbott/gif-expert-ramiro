import React, { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeAdd = (event) => {
    //console.log(event.target.value);
    //setea el valor del input
    //event.target.value es el valor del input y es lo que se va a setear en el estado
    setInputValue(event.target.value);
  };

const onSubmit = (event) => {   
    //el preventDefault evita que se recargue la pagina
    event.preventDefault();
    console.log(inputValue);
    //setea el valor del input
    inputValue.trim().length > 2 &&
    onNewCategory(inputValue.trim()); 
    setInputValue('');

}
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        //placeholder muestra un texto en el input que aparece cuando no hay nada escrito
        placeholder="Buscar gifs"
        value={inputValue}
        //onChange se ejecuta cada vez que el valor del input cambia
        //onChange es un evento que se dispara cuando el valor del input cambia
        onChange={onChangeAdd}
      />
    </form>
  );
};
