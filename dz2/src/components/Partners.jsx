import React from 'react';


const Partners = () => {
  const partners = [
    { id: 1, name: 'Hahnemühle', logo: 'ЛОГОТИП' },
    { id: 2, name: 'Canson', logo: 'ЛОГОТИП' },
    { id: 3, name: 'Royal Talens', logo: 'ЛОГОТИП' },
    { id: 4, name: 'Fabriano', logo: 'ЛОГОТИП' }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;