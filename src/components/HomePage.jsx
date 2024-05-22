import React from 'react';

function HomePage() {
  const navigateToProductPage = () => {
    window.location.href = "/Product"; // Redirect to the Product page
  };

  const Card = ({ href, imgSrc, altText, caption, className }) => (
    <a href={href} className={`card ${className}`}>
      <figure className="visual">
        <img className="card-img" src={imgSrc} alt={altText} />
        <figcaption className="figcaption">{caption}</figcaption>
      </figure>
      
    </a>
    
  );

  return (
    <>
      <section className="section relative">
        <div className="cards relative">
          <Card
            href="/Product"
            imgSrc="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            altText="Person with a game controller in hand"
            caption="Early Access"
            className="card-1"
          />
          <Card
            href="/Product"
            imgSrc="https://images.unsplash.com/photo-1533680937690-d59ab2543468?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            altText="Person with curly hair in neon lighting"
            caption="Top Sellers"
            className="card-2"
          />
          <Card
            href="/Product"
            imgSrc="https://images.unsplash.com/photo-1650036881216-8ce57f417e27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            altText="Person in vibrant neon lighting with abstract shapes"
            caption="New Releases"
            className="card-3"
          />
          <Card
            href="/Product"
            imgSrc="https://images.unsplash.com/photo-1696979862075-3f244bed91cd?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            altText="Person wearing a virtual reality headset in a blue-lit room"
            caption="Upcoming"
            className="card-4"
          />
        </div>
        <button
          onClick={navigateToProductPage}
          className="absolute  left-1/2 transform -translate-x-1/2 bg-black text-white text-2xl font-bold py-2 px-4 rounded-mid hover:bg-white hover:text-black transition-colors duration-300 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Explore
        </button>
       
      </section>
    </>
  );
}

export default HomePage;
