"use client";

const ContactPage = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <header className="bg-red-500 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Contactez-nous</h1>
      </header>
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-red-500">Rejoignez Fight Factory</h2>
        <p className="mt-4 text-gray-300">
          Pour toute question ou réservation, contactez-nous !
        </p>
        <p className="mt-4 text-gray-300">📧 Email : contact@fightfactory.com</p>
        <p className="mt-4 text-gray-300">📞 Téléphone : +33 6 12 34 56 78</p>
        <form className="mt-8 max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full border border-red-500 rounded-lg px-4 py-3 bg-black text-white"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full border border-red-500 rounded-lg px-4 py-3 bg-black text-white"
          />
          <textarea
            placeholder="Votre message"
            className="w-full border border-red-500 rounded-lg px-4 py-3 bg-black text-white h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-full"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
