import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-opacity-90 bg-yellow-800 py-20 text-center shadow-inner"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-yellow-100">
          ¡Bienvenido, viajero!
        </h2>
        <p className="mt-4 text-lg text-yellow-300">
          Reúnete con aventureros, disfruta nuestras delicias medievales y
          prepara tus historias en nuestra encantadora taberna.
        </p>
        <button className="mt-6 rounded bg-yellow-600 px-10 py-3 font-bold text-gray-900 transition hover:bg-yellow-700">
          ¡Entra a la taberna!
        </button>
      </div>
    </section>
  );
};

export default Hero;
