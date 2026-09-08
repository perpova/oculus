import { useEffect, useState } from "react";

export default function TrustedBy() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Failed to load clients:", err));
  }, []);

  // Don't render the marquee until clients have loaded
  if (clients.length === 0) {
    return null;
  }

  return (
    <section className="bg-(--color-bg-nav) py-20">
      <div className="text-center px-[30px]">
        <h2 className="font-body text-gold text-lg md:text-xl mb-15">
          Trusted by 50+ organizations across Sri Lanka
        </h2>

        <div className="overflow-hidden">
          <div className="logo-slider">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.id}-${index}`} className="logo-card">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-[60px] max-w-[80%] object-contain transition-all duration-300 hover:scale-105 grayscale brightness-0 invert hover:grayscale-0 hover:brightness-100 hover:invert-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}