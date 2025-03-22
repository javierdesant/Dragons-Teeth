import React from "react";

const Events: React.FC = () => {
  return (
    <section id="events">
      <h2 className="text-4xl font-bold">
        ¡Organiza tu próxima campaña en nuestras mesas!
      </h2>
      <p className="mx-auto mt-6 max-w-2xl">
        Te ofrecemos un espacio perfecto para tus aventuras, ya sea Dungeons &
        Dragons, Pathfinder u otros. ¡Reserva una mesa para tu grupo de
        compañeros hoy mismo!
      </p>
      <button className="mt-8 rounded bg-yellow-500 px-8 py-3 font-bold text-gray-900 hover:bg-yellow-600">
        Reserva tu mesa
      </button>
    </section>
  );
};

export default Events;
