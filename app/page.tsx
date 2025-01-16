"use client";
import { useState } from "react";

const HomePage = () => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);

  const handleTariffClick = () => {
    const isMember = confirm("Êtes-vous déjà membre ?");
    if (isMember) {
      setLoginVisible(true);
    } else {
      setRegisterVisible(true);
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Bannière */}
      <section className="relative bg-[url('/path-to-image.jpg')] bg-cover bg-center h-[80vh] flex items-center">
        <div className="bg-black bg-opacity-60 text-white w-full h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-extrabold mb-4 text-red-500">
            Bienvenue à Fight Factory
          </h1>
          <p className="text-lg italic text-gray-300">
            "Le feu de votre transformation commence ici."
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 text-center px-6 bg-black">
        <h2 className="text-3xl font-bold text-red-500">À propos</h2>
        <p className="mt-4 text-gray-400">
          Fight Factory est un gym unique en son genre. Avec des coachs
          expérimentés et une communauté passionnée, nous sommes là pour vous
          aider à atteindre vos objectifs, que ce soit la compétition, la remise
          en forme ou simplement une nouvelle passion.
        </p>
      </section>

      {/* Tarifs */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500">Nos Tarifs</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                plan: "Mensuel",
                price: "60€",
                perks: "Accès libre à la salle, 1 cours/semaine.",
              },
              {
                plan: "Trimestriel",
                price: "150€",
                perks: "3 cours/semaine, réductions événements.",
              },
              {
                plan: "Annuel",
                price: "500€",
                perks: "Illimité, 50% réduction événements.",
              },
            ].map((tariff, index) => (
              <div
                key={index}
                className="bg-black border border-red-500 shadow-lg rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white">{tariff.plan}</h3>
                <p className="mt-4 text-4xl font-bold text-red-500">
                  {tariff.price}
                </p>
                <p className="mt-2 text-gray-300">{tariff.perks}</p>
                <button
                  onClick={handleTariffClick}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Choisir ce tarif
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaires */}
      {isLoginVisible && (
        <section id="login-form" className="py-12 text-center px-6">
          <h2 className="text-3xl font-bold text-red-500">Connexion</h2>
          <form className="mt-8 max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-red-500 rounded-lg px-4 py-3 bg-black text-white"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full border border-red-500 rounded-lg px-4 py-3 bg-black text-white"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-full"
            >
              Se connecter
            </button>
          </form>
        </section>
      )}

      {isRegisterVisible && (
        <section id="register-form" className="py-12 text-center px-6">
          <h2 className="text-3xl font-bold text-red-500">Inscription</h2>
          <form className="mt-8 max-w-md mx-auto space-y-4">
            {[
              "Nom",
              "Prénom",
              "Email",
              "Numéro de téléphone",
              "Genre",
              "Âge",
            ].map((field, index) => (
              <input
                key={index}
                type={field === "Email" ? "email" : field === "Âge" ? "number" : "text"}
                placeholder={field}
                className="w-full border border-red-500 rounded-lg px-4 py-3 bg-black text-white"
              />
            ))}
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-full"
            >
              S'inscrire
            </button>
          </form>
        </section>
      )}
    </main>
  );
};

export default HomePage;
