import React from 'react';

const Image = ({ src, className, alt }) => (
  <img src={src} className={className} alt={alt} />
);

const NavBar = () => {
  const logoSrc = 'https://www.phoenixs.co.uk/wp-content/themes/phoenix/_/images/logo.png'; // Replace with your logo source
  const bellSrc = 'https://cdn.builder.io/api/v1/image/assets/TEMP/1897bc6f8509aea1813e73e14d033a824cb99a968df766bbb37fd8d01b7a3ad7?'; // Replace with your bell icon source
  const userSrc = 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=512'; // Replace with your user icon source

  const handleSearch = (event) => {
    // Handle search input
    console.log(event.target.value);
  };

  const handleLanguageChange = (event) => {
    // Handle language change
    console.log(event.target.value);
  };

  return (
    <div className="navbar">
      <Image src={logoSrc} className="logo" alt="Logo" />
      <input type="text" className="search-bar" onChange={handleSearch} placeholder="Search here..." />
      <select className="language-select" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        {/* Add more options as needed */}
      </select>
      <Image src={bellSrc} className="notification-bell" alt="Notification Bell" />
      <Image src={userSrc} className="user-icon" alt="User Icon" />
    </div>
  );
};

export default NavBar;