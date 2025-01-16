"use client";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Tournoi Amical",
      date: "15 mars 2025",
      time: "10h",
      location: "Fight Factory Arena",
      price: "20€",
    },
    {
      id: 2,
      title: "Workshop : Techniques de Combat",
      date: "22 mars 2025",
      time: "14h",
      location: "Studio 2",
      price: "Gratuit",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <header className="bg-red-500 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Événements</h1>
      </header>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-500 text-center">
            Événements à venir
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-900 border border-red-500 shadow-lg rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <p className="text-gray-300 mt-2">📅 {event.date} à {event.time}</p>
                <p className="text-gray-300">📍 {event.location}</p>
                <p className="text-gray-300">💰 {event.price}</p>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Inscription
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
