import React from 'react';


const Description = () => {
  return (
    <div className="landing-container">
    
      <header className="header">
        <div className="logo">
          <span className="circle-icon"></span> simple <span className="pill-icon"></span>
        </div>
        <nav className="nav-menu">
          <a href="#products">Продукция</a>
          <a href="#materials">Материалы</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="header-icons">
          <button className="icon-btn search-icon">🔍</button>
          <button className="icon-btn login-icon">🚪</button>
        </div>
      </header>

    
      <main className="main-content">
        <div className="text-section">
          <h1 className="title">
            Простые вещи.<br />
            Из бумаги
          </h1>
          <p className="description-text">
            Бумага (предположительно от итал. bombagia, 
            первоисточником же считается иранский) — 
            волокнистый материал с минеральными добавками.
          </p>
          <button className="catalog-btn">Каталог</button>
        </div>

        <div className="image-section">
          <div className="paper-roll-mockup">
            
            <div className="paper-roll"></div>
            
         
            <div className="pin pin-a1"></div>
            <div className="pin pin-a2"></div>
            <div className="avatar-group">
              <div className="avatar blue"></div>
              <div className="avatar purple"></div>
              <div className="avatar teal"></div>
              <div className="avatar-img"></div>
            </div>
          </div>
        </div>
      </main>

     
      <div className="top-user-badge">
        <span className="badge-letter"></span>
        <div className="badge-avatar"></div>
        <span className="badge-count"></span>
      </div>
    </div>
  );
};

export default Description;