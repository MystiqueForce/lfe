import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const TUTORS_NAME = [
 "Aakash Sharma",
  "Aditi Verma",
  "Ajay Patel",
  "Amit Singhania",
  "Anjali Gupta",
  "Anu Nair",
  "Arun Kumar",
  "Deepa Iyer",
  "Gaurav Mehta",
  "Kavita Singh",
  "Manish Shah",
  "Megha Jain",
  "Neha Chopra",
  "Nikhil Bhatia",
  "Pallavi Desai",
  "Pradeep Kumar",
  "Ravi Shukla",
  "Ritu Sood",
  "Rohit Mishr",
  "Sangeeta Banerjee",
  "Sanjay Sharma",
  "Shalini Chakraborty",
  "Sudhir Nair",
  "Swati Sharma",
];
// const tutors_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const tutors = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;
  console.log('index',index);
  return ({
    id: faker.datatype.uuid(),
    cover: `/assets/images/tutors/tutor_${setIndex}.jpg`,
    name: TUTORS_NAME[index],
    // price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    // priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    // colors:
    //   (setIndex === 1 && TUTORS_COLOR.slice(0, 2)) ||
    //   (setIndex === 2 && TUTORS_COLOR.slice(1, 3)) ||
    //   (setIndex === 3 && TUTORS_COLOR.slice(2, 4)) ||
    //   (setIndex === 4 && TUTORS_COLOR.slice(3, 6)) ||
    //   (setIndex === 23 && TUTORS_COLOR.slice(4, 6)) ||
    //   (setIndex === 24 && TUTORS_COLOR.slice(5, 6)) ||
    //   TUTORS_COLOR,
    status: sample(['new', '', '']),
  });
});

export default tutors;
