import React from "react";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  }); /* le damos por defecto la info  */

  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";
  /*  decide si el contacto es favorito, devuelve la estrella llena de lo contrario devuelve la vacia */

  function toggleFavorite() {
    console.log("Toggle Favorite");
    /* en la funcion callback */
    /* devolvemos el spread de precContact, que seria el valor previo de Contact */
    /* donde reemplazamos , isFavorite por el negativo que ya tiene */

    setContact((prevContact) => {
      return { ...prevContact, isFavorite: !prevContact.isFavorite };
    });
    console.log(contact);
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" alt="user" />
        <div className="card--info">
          <img
            src={`../images/${starIcon}`}
            /* mostramos el valor definido  */
            className="card--favorite"
            alt="star"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>{" "}
          {/* ponemos el valor telefono, que esta por defecto */}
          <p className="card--contact">{contact.email}</p>{" "}
          {/* ponemos el valor email */}
        </div>
      </article>
    </main>
  );
}
