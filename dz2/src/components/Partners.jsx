import React from 'react';


const Partners = () => {
  const partners = [
    { id: 1, name: 'Hahnemühle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Hahnemuehle_logo.svg/1200px-Hahnemuehle_logo.svg.png' },
    { id: 2, name: 'Canson', logo: 'https://logos-world.net/wp-content/uploads/2023/12/Canson-Logo.png' },
    { id: 3, name: 'Royal Talens', logo: 'https://www.royaltalens.com/siteassets/icons/royal-talens-logo.png' },
    { id: 4, name: 'Fabriano', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Fabriano_logo.svg/2560px-Fabriano_logo.svg.png' }
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