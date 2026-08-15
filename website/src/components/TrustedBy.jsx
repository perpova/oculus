const clients = [
  { name: "Client One", logo: "/logos/logo-1.2.png" },
  { name: "Client Two", logo: "/logos/logo-2.2.png" },
  { name: "Client Three", logo: "/logos/logo-3.2.png" },
  { name: "Client Four", logo: "/logos/logo-4.2.png" },
  { name: "Client Five", logo: "/logos/logo-5.1.png" },
  { name: "Client Six", logo: "/logos/logo-6.5.png" },
  { name: "Client Seven", logo: "/logos/logo-7.png" },
  { name: "Client Eight", logo: "/logos/logo-8.2.png" },
  { name: "Client Nine", logo: "/logos/logo-9.1.png" },
  { name: "Client Ten", logo: "/logos/logo-010.3.png" },
  { name: "Client Eleven", logo: "/logos/logo-011.3.1.png" },
  { name: "Client Twelve", logo: "/logos/logo-012.2.1.png" },
  { name: "Client Twelve", logo: "/logos/logo-13.png" },
  { name: "Client Twelve", logo: "/logos/logo-014.png" },
  { name: "Client Twelve", logo: "/logos/logo-015.png" },
];

export default function TrustedBy() {
  return (
    <section className="bg-(--color-bg-nav) py-20">
      <div className="text-center px-[30px]">
        <h2 className="font-body text-gold text-lg md:text-xl mb-15">
          Trusted by 50+ organizations across Sri Lanka
        </h2>

        <div className="overflow-hidden">
          <div className="logo-slider">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="logo-card">
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