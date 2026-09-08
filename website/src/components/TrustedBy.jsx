const clients = [
  { name: "Client One", logo: "/logos/logo-1.2.svg", logoWhite: "/logos/logo-1.2-white.svg" },
  { name: "Client Two", logo: "/logos/logo-2.2.svg", logoWhite: "/logos/logo-2.2-white.svg" },
  { name: "Client Three", logo: "/logos/logo-3.2.svg", logoWhite: "/logos/logo-3.2-white.svg" },
  { name: "Client Four", logo: "/logos/logo-4.2.svg", logoWhite: "/logos/logo-4.2-white.svg" },
  { name: "Client Five", logo: "/logos/logo-5.1.svg", logoWhite: "/logos/logo-5.1-white.svg" },
  { name: "Client Six", logo: "/logos/logo-6.5.svg", logoWhite: "/logos/logo-6.5-white.svg" },
  { name: "Client Seven", logo: "/logos/logo-7.svg", logoWhite: "/logos/logo-7-white.svg" },
  { name: "Client Eight", logo: "/logos/logo-8.2.svg", logoWhite: "/logos/logo-8.2-white.svg" },
  { name: "Client Nine", logo: "/logos/logo-9.1.svg", logoWhite: "/logos/logo-9.1-white.svg" },
  { name: "Client Ten", logo: "/logos/logo-010.3.svg", logoWhite: "/logos/logo-010.3-white.svg" },
  { name: "Client Eleven", logo: "/logos/logo-011.3.1.svg", logoWhite: "/logos/logo-011.3.1-white.svg" },
  { name: "Client Twelve", logo: "/logos/logo-012.2.1.svg", logoWhite: "/logos/logo-012.2.1-white.svg" },
  { name: "Client Thirteen", logo: "/logos/logo-13.svg", logoWhite: "/logos/logo-13-white.svg" },
  { name: "Client Fourteen", logo: "/logos/logo-014.svg", logoWhite: "/logos/logo-014-white.svg" },
  { name: "Client Fifteen", logo: "/logos/logo-015.svg", logoWhite: "/logos/logo-015-white.svg" },
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
                <div className="group relative">
                  {/*White version of the logo/ default state*/}
                <img
                  src={client.logoWhite}
                  alt={client.name}
                  className="h-[60px] w-auto object-contain transition-all duration-300 hover:scale-105 block group-hover:hidden"
                />
                {/*Colour version of the logo/ hover state*/}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-[60px] w-auto object-contain transition-all duration-300 hover:scale-105 hidden group-hover:block"
                />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}