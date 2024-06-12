// Task I

array = [
    {
      title: "BMW",
      price: 40000,
      count: "15",
    },
    {
      title: "Toyota",
      price: 20000,
      count: "13",
    },
    {
      title: "Ford",
      price: 30000,
      count: "20",
    },
    {
      title: "Chevrolet",
      price: 60000,
      count: "9",
    },
    {
      title: "Volkswagen",
      price: 30000,
      count: "13",
    },
  ];

const body = document.querySelector("body");
const ol = document.createElement("ol");
let totalSum = 0;
let totalTovar = 0;
body.appendChild(ol);
for(let i = 0; i < array.length; i++){
  const li = document.createElement("li");
  let totalTovarSum = array[i].price * +array[i].count;
  totalSum += totalTovarSum;
  totalTovar += +array[i].count;
  if(i != array.length -1){
    li.innerHTML = array[i].title + "<br>" + totalTovarSum;
  }else{
    li.innerHTML = array[i].title + "<br>" + totalTovarSum + "<br>" + "итоговая сумма: " + totalSum + " количество всех товаров: " + totalTovar;
  }
  ol.appendChild(li);
};


// Task II

array1 = [
  {
    breed: "golden retriever",
    age: 7,
  },
  {
    breed: "labrador retriever",
    age: 4,
  },
  {
    breed: "french bulldog",
    age: 12,
  },
  {
    breed: "beagle",
    age: 6,
  },
  {
    breed: "german shepherd dog",
    age: 2,
  },
  {
    breed: "poodle",
    age: 3,
  },
  {
    breed: "bulldog",
    age: 4,
  },
];

for(let i = 0; i < array1.length; i++){
  const p = document.createElement("p");
  p.innerText = array1[i].breed + "'s age is " + array1[i].age;
  body.appendChild(p);
};

// Task III

array2 = [
  {
    name: "Shutter Island",
    year: 2010,
  },
  {
    name: "Fight Club",
    year: 1999,
  },
];
