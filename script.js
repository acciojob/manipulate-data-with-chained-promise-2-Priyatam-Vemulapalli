function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Initial 3-second delay
  });
}

getArray()
  .then((arr) => {
    // First step: filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = arr.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 1000); // 1-second 
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent = doubledNumbers.join(", ");
        resolve(doubledNumbers);
      }, 2000); // 2-second delay 
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
