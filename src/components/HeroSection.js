import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(query);
    } else {
      console.error('onSearch prop is not a function');
    }
  };

  return (
    <div className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="search-overlay">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default HeroSection;








// import React, { useState } from 'react';
// import './HeroSection.css';

// const HeroSection = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="hero-section">
//       <video autoPlay muted loop className="hero-video">
//         <source src="your-video-url.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="search-overlay">
//         <input
//           type="text"
//           placeholder="Search for recipes..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
