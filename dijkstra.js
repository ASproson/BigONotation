function dijkstra(startingCity, otherCities) {
  // Create a dictionary to store the distances from the starting city to each other city
  const distances = {};
  for (const city of otherCities) {
    distances[city.name] = Infinity;
  }
  distances[startingCity] = 0;

  // Create a set to store the unvisited cities
  const unvisitedCities = new Set(otherCities.map((city) => city.name));

  // Create a dictionary to store the previous city for each city
  const previousCities = {};

  // While there are unvisited cities
  while (unvisitedCities.size > 0) {
    // Find the city with the smallest distance from the starting city
    let currentCity = null;
    let currentDistance = Infinity;
    for (const city of unvisitedCities) {
      if (distances[city] < currentDistance) {
        currentCity = city;
        currentDistance = distances[city];
      }
    }

    // If there is no reachable city, break out of the loop
    if (currentCity == null) {
      break;
    }

    // Remove the current city from the unvisited set
    unvisitedCities.delete(currentCity);

    // Update the distances to the neighboring cities
    const currentCityIndex = otherCities.findIndex(
      (city) => city.name === currentCity
    );
    const currentCityNeighbors = otherCities[currentCityIndex].neighbors;
    for (const neighbor of currentCityNeighbors) {
      const distance = currentDistance + neighbor.distance;
      if (distance < distances[neighbor.city]) {
        distances[neighbor.city] = distance;
        previousCities[neighbor.city] = currentCity;
      }
    }
  }

  return { distances, previousCities };
}

const cities = [
  {
    name: "A",
    neighbors: [
      { city: "B", distance: 7 },
      { city: "C", distance: 9 },
      { city: "F", distance: 14 },
    ],
  },
  {
    name: "B",
    neighbors: [
      { city: "A", distance: 7 },
      { city: "C", distance: 10 },
      { city: "D", distance: 15 },
    ],
  },
  {
    name: "C",
    neighbors: [
      { city: "A", distance: 9 },
      { city: "B", distance: 10 },
      { city: "D", distance: 11 },
      { city: "F", distance: 2 },
    ],
  },
  {
    name: "D",
    neighbors: [
      { city: "B", distance: 15 },
      { city: "C", distance: 11 },
      { city: "E", distance: 6 },
    ],
  },
  {
    name: "E",
    neighbors: [{ city: "D", distance: 6 }],
  },
  {
    name: "F",
    neighbors: [
      { city: "A", distance: 14 },
      { city: "C", distance: 2 },
    ],
  },
];

const result = dijkstra("A", cities);
console.log(result.distances); // { A: 0, B: 7, C: 9, D: 20, E: 20, F: 11 }
console.log(result.previousCities); // { B: "A", C: "A", D: "B", E: "D", F: "C" }
