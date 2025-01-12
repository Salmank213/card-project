// src/components/CardSection.tsx
import Image from 'next/image';  // Import the Next.js Image component
import '../styles/CardSection.css';  // Import the CSS file

const CardSection = () => {
  return (
    <div>
      {/* Three cards section */}
      <div className="card-container">
        <div className="card">
          <Image 
            src="/civic.jpg"  // Path to the image in the public directory
            alt="Card 1" 
            width={300} 
            height={200} 
            className="card-image" // Optional class for styling
          />
          <h2>Card 1</h2>
          <p>This is the content of card 1</p>
        </div>
        <div className="card">
          <Image 
            src="/civic2.jpg" 
            alt="Card 2" 
            width={300} 
            height={200} 
            className="card-image" 
          />
          <h2>Card 2</h2>
          <p>This is the content of card 2</p>
        </div>
        <div className="card">
          <Image 
            src="/civic3.jpg" 
            alt="Card 3" 
            width={300} 
            height={200} 
            className="card-image" 
          />
          <h2>Card 3</h2>
          <p>This is the content of card 3</p>
        </div>
      </div>

      {/* Two cards section */}
      <div className="card-container">
        <div className="card">
          <Image 
            src="/civic.jpg" 
            alt="Card 4" 
            width={300} 
            height={200} 
            className="card-image" 
          />
          <h2>Card 4</h2>
          <p>This is the content of card 4</p>
        </div>
        <div className="card">
          <Image 
            src="/civic2.jpg" 
            alt="Card 5" 
            width={300} 
            height={200} 
            className="card-image" 
          />
          <h2>Card 5</h2>
          <p>This is the content of card 5</p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
