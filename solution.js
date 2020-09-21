
    //3.  Destructure this object literal so that each value can be called by its key. Re-name the array values for the 'names' key of the ocean object to AT, PA, IN, and AR
    const water = {
    lake: {
    description: 'surrounded by land',
    popular: { state: 'Michigan', name: 'Lake Michigan' },
    },
    river: {
    definition: 'flows towards ocean',
    known: { place: 'New York', label: 'Hudson River' },
    },
    ocean: {
    context: 'body of water that composes much of a planet hydrosphere',
    names: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    },
    };
    
   Object.keys(water).toString()
   
    const { lake, river, ocean } = water
    ocean.names.map(x => x[0] + x[1].toUpperCase())
    //ocean.map(x => x)
    
    //4.  Using destructuring create a new array that maps through the items array and from each item in the loop, a string of the color and shape values should be logged. for example one loop should return 'blue circle' from the items array. This is not a function. you will just map and use the items array as the only array.
    let items = [
    { color: 'blue', shape: 'circle' },
    { color: 'orange', shape: 'triangle' },
    { color: 'red', shape: 'square' },
    ];
    
    const colorShape = items.map( function ({color, shape}) {return `${color} ${shape}`})
    
    colorShape
    
    
    //5.  Deconstruct the complete car object literal
    //Find a way to call just one variable name for each of the carTypes
    //rename the array values inside the otherShops array to third, fourth, and for the last two values they should be in an array called fifth
    const car = {
    carTypes: {
    one: { make: 'Mercedes', model: 'Meybach', year: 2020 },
    two: {
    make: 'toyota',
    model: 'Landcruiser',
    year: 2018,
    },
    },
    numWheels: 4,
    gps: true,
    autoSteer: true,
    repairPlaces: {
    main: 'Dealership',
    second: 'Roe Park Car Shop',
    otherShops: [
    'Bozo Repair',
    'Johnson Body',
    'Fixer Upper Central',
    'Last Chance Repairs',
    ],
    },
    };
    
    Object.keys(car).toString()
     
     const { carTypes,numWheels,gps,autoSteer,repairPlaces } = car
     // carTypes.one
     // repairPlaces
     
     //const { third = 'food' } = repairPlaces
     
     //create
     repairPlaces.third = repairPlaces.otherShops[0]
     repairPlaces.fourth = repairPlaces.otherShops[1]
          repairPlaces.fifth = [repairPlaces.otherShops[2], repairPlaces.otherShops[3]]

     repairPlaces
     
     
      //7. Using destructuring, choose all the schools with a gpa higher than 3.5,
      //and list the chosen object ascending by major and log the average gpa,
      //use method chaining if you can

let schoolArray = [
  { school: 'Pataway', major: 'comp sci', year: 'sophomore', gpa: 3.2 },
  { school: 'Bronxville', major: 'medicine', year: 'junior', gpa: 4.0 },
  { school: 'Scarsdale', major: 'accounting', year: 'freshman', gpa: 2.6 },
  { school: 'Peekskill', major: 'liberal arts', year: 'freshman', gpa: 4.0 },
  { school: 'Anopram', major: 'accounting', year: 'senior', gpa: 3.7 },
];

 const { school } = schoolArray
 
const gpa = schoolArray.map( function ({ gpa, school }) {

return gpa > 3.5 ? school: ''}

)
