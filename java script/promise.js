const getAllProduct = () => {
    const response = fetch("https://dummyjson.com/products/1");
    
    response
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Data:', data);
      })
      .catch((error) => {
        console.error('Fetch Error:', error);
      });
  }
  
  getAllProduct();
  
