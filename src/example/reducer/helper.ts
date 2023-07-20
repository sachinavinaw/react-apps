export function getRandomNumber(min: number, max: number): number {
  // Make sure min is smaller than max
  if (min > max) {
    [min, max] = [max, min];
  }

  // Calculate the range of the random number
  const range = max - min;

  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const random = Math.random();

  // Scale and shift the random number to fit the desired range
  const result = Math.floor(random * range + min);

  return result;
}

export function getRandomIndianName(): string {
  const indianNames: string[] = [
    'Aarav',
    'Aarya',
    'Aditi',
    'Akriti',
    'Amit',
    'Ananya',
    'Anika',
    'Arjun',
    'Avni',
    'Ayush',
    'Dev',
    'Diya',
    'Divya',
    'Gauri',
    'Ishaan',
    'Kavya',
    'Krishna',
    'Mira',
    'Mohit',
    'Neha',
    'Nikhil',
    'Pooja',
    'Pranav',
    'Radha',
    'Rahul',
    'Riya',
    'Rohan',
    'Sagar',
    'Sachin',
    'Sakshi',
    'Siddharth',
    'Tanvi',
    'Varun',
    'Ved',
    'Vidya',
    'Yash',
    'Zara',
    // Add more names as needed
  ];

  const randomIndex = Math.floor(Math.random() * indianNames.length);
  return indianNames[randomIndex];
}
