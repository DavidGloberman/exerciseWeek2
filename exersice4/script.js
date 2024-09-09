const cars = [
  {
    model: "Toyota Corolla",
    year: 2022,
    color: "White",
  },
  {
    model: "Honda Civic",
    year: 2021,
    color: "Black",
  },
  {
    model: "Ford Mustang",
    year: 2023,
    color: "Red",
  },
  {
    model: "Chevrolet Camaro",
    year: 2020,
    color: "Blue",
  },
  {
    model: "Tesla Model 3",
    year: 2024,
    color: "Silver",
  },
  {
    model: "Toyota Corolla",
    year: 2022,
    color: "White",
  },
  {
    model: "Honda Civic",
    year: 2021,
    color: "Black",
  },
  {
    model: "Ford Mustang",
    year: 2023,
    color: "Red",
  },
  {
    model: "Chevrolet Camaro",
    year: 2020,
    color: "Blue",
  },
  {
    model: "Tesla Model 3",
    year: 2024,
    color: "Silver",
  },
  {
    model: "BMW 3 Series",
    year: 2022,
    color: "Gray",
  },
  {
    model: "Audi A4",
    year: 2021,
    color: "Black",
  },
  {
    model: "Mercedes-Benz C-Class",
    year: 2023,
    color: "White",
  },
  {
    model: "Mazda 6",
    year: 2020,
    color: "Blue",
  },
  {
    model: "Volkswagen Passat",
    year: 2022,
    color: "Red",
  },
  {
    model: "Subaru Impreza",
    year: 2021,
    color: "Green",
  },
  {
    model: "Hyundai Elantra",
    year: 2020,
    color: "Silver",
  },
];

const searchInput = document.querySelector("input");
console.log(searchInput);

searchInput.addEventListener("input", (enent) => {
    console.log(enent.target.value)
})

// const div = document.getElementById("car");

// search.addEventListener("oninput", function () {
//   let a = search.value;
//   let b = cars.filter((car) => {
//     car.model.includes(a);
//     div.innerText(b);
//   });
// });
