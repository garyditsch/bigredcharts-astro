// Function to get the logo file based on the school name

const getLogoSrc = (school: string) => {
  const logoMapping: { [key: string]: string } = {
    'UCLA': '26.png',
    'USC': '30.png',
    'Northwestern': '77.png',
    'Indiana': '84.png',
    'Maryland': '120.png', 
    'Michigan State': '127.png',
    'Michigan': '130.png',
    'Minnesota': '135.png',
    'Nebraska': '158.png',
    'Rutgers': '164.png',
    'Ohio State': '194.png',
    'Penn State': '213.png',
    'Washington': '264.png',
    'Illinois': '356.png',
    'Iowa': '2294.png',
    'Oregon': '2483.png',
    'Purdue': '2509.png',
    'Wisconsin': '275.png'
  };

  // Return the correct logo path or a default if not found
  return `/icons/${logoMapping[school] || 'default.png'}`;
};

export default getLogoSrc;