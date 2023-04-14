
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Data from './data.json';
import Home from './Home'
import './Styles/StartScreen.css'
import headerImage from './Images/headerImage.png'
import background from './Images/Background.png'
function StartScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory) {
      Cookies.set('selectedCategory', JSON.stringify(selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    const savedCategory = Cookies.get('selectedCategory');
    if (savedCategory) {
      setSelectedCategory(JSON.parse(savedCategory));
    }
  }, []);

  const handleHomeRedirect = () => {
    Cookies.remove('selectedCategory');
    window.location.href = './Home'; 
  };

  if (!selectedCategory) {
    return (
      <div className='container' style={{ backgroundImage: `url(${background})` }}>
        <div className='startImage'>
          <img  src={headerImage} alt="Start Screen" />
        </div>
        <div className='buttonContainer'>
          {Data.data.map((category) => (
            <div className='button'>
            <button 
            key={category.id}
            onClick={() => handleCategorySelect(category)}
            className={`categoryButton categoryButton-${category.category}`}
          > Category &nbsp; 
            {category.category}
          </button>
          </div>
          ))}
        </div>
        
      </div>
    );
  }

  const category = Data.data.find((c) => c.id === selectedCategory.id);
  return (
    <div>

      <ul>
    <Home selectedCategory={selectedCategory} />
      </ul>
      <button className='homepageButton' onClick={handleHomeRedirect}>Go to Home Page</button>
    </div>
  );
}

export default StartScreen;
