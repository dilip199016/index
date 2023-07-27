let employee1 = {
    name: "Vishal",
    college: "LPU",
    city: {
      name: "Kanpur",
      state: "UP",
      locality: "Vishnupuri",
      pincode: "208002",
      info: {
        id: "1234",
        dm: "Rajesh mittal",
      },
    },
  };
  console.log(employee1);
  employee1 = {
    ...employee1,
    college: "Newton",
    city: {
      ...employee1.city,
      locality: "Nawabganj",
      info: {
        ...employee1.city.info,
        dm: "Rimo",
      },
    },
  };
  console.log(employee1);