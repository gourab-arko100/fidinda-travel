// Free photos from Unsplash (https://unsplash.com/license).
// Replace any of these IDs (or swap for your own files in /public) whenever you like.

export const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  heroAngkor: "1566706546199-a93ba33ce9f7", // Angkor Wat, Cambodia
  angkorPath: "1599283787923-51b965a58b05", // People walking toward Angkor Wat
  templeJungle: "1571844088753-73ca0880bcd9", // Temple entrance in the jungle
  stoneFace: "1457352783650-10f0291c6278", // Buddha face on stone
  phnomPenh: "1707912258863-2c8082b0316f", // Rooftop, Phnom Penh
  sunsetWater: "1653959864991-c828b72c82a8", // Sunset over water
  singapore: "1525625293386-3f8f99389edd", // Marina Bay Sands, Singapore
  beach: "1752508665260-2de33d429e5c", // Tropical beach, aerial
  airliner: "1436491865332-7a61a109cc05", // Aerial view of an airliner
  windowGolden: "1488085061387-422e29b40080", // Plane window, golden hour
  windowSunset: "1507812984078-917a274065be", // Plane window, golden hour
  passport: "1578894381163-e72c17f2d45f", // Camera next to passport
  mapPointing: "1524850011238-e3d235c7d4c9", // Person pointing at a map
  flatLay: "1488646953014-85cb44e25828", // Camera, book and bag
  airportLuggage: "1530521954074-e64f6810b32d", // Traveller with luggage watching plane
  airportSilhouette: "1504150558240-0b4fd8946624", // Silhouette with luggage in airport
  mapHands: "1504598318550-17eba1008a68", // Person holding a map
} as const;
