import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const STUDENTS_NAME = [
  "Yash Pal",
  "Alok Sharma",
  "Amit Singh",
  "Anjali Bhatia",
  "Arjun Rao",
  "Deepak Mehta",
  "Hema Patil",
  "Ishita Shah",
  "Kartik Nair",
  "Manish Jain",
  "Megha Chopra",
  "Neha Sharma",
  "Nikita Kumar",
  "Nisha Mishra",
  "Prakash Singh",
  "Priya Iyer",
  "Rajesh Pillai",
  "Rashi Shah",
  "Rohan Nair",
  "Sanjay Sharma",
  "Sarika Desai",
  "Shalini Verma",
  "Uday Singh",
  "Vaishali Shah",
];
// const STUDENTS_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const students = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;
  console.log('index',index);
  return ({
    id: faker.datatype.uuid(),
    cover: `/assets/images/students/student_${setIndex}.jpg`,
    name: STUDENTS_NAME[index],
    // price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    // priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    // colors:
    //   (setIndex === 1 && STUDENTS_COLOR.slice(0, 2)) ||
    //   (setIndex === 2 && STUDENTS_COLOR.slice(1, 3)) ||
    //   (setIndex === 3 && STUDENTS_COLOR.slice(2, 4)) ||
    //   (setIndex === 4 && STUDENTS_COLOR.slice(3, 6)) ||
    //   (setIndex === 23 && STUDENTS_COLOR.slice(4, 6)) ||
    //   (setIndex === 24 && STUDENTS_COLOR.slice(5, 6)) ||
    //   STUDENTS_COLOR,
    status: sample(['new', '', '']),
  });
});

export default students;
