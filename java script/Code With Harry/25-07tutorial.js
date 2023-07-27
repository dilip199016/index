const obj1 = {
    city: "Kanpur",
    locality: "Vishnupuri",
    pincode: 208002,
    landmark: "Emerland",
    flatNo: "4/278B-1",
    college: {
      college: "Newton School",
      mode: "Online",
      degree: "FSD",
      city: "Bangalore",
    },
  };
  
  const obj2 = {
    city: "Mumbai",
    pincode: 400001,
    phone: "1234567890",
  };
  
  const mergedObj = {
    ...obj1,
    ...obj2,
  };
  
  console.log(mergedObj);