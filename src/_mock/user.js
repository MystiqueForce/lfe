import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(15)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample([
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
   ]),
  city: sample([
    'Bangalore',
    'Delhi',
    'Gurgaon',
    'Kochi',
    'Chennai',
    'Hyderabad',
    'Ahmedabad',
    'Mumbai',
    'Goa',
    'Bhopal',
    'Kolkata',
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['Approved', 'denied']),
  subject: sample([
    'Physics',
    'Mathematics',
    'Chemistry',
    'Economics',
    'Video-Editing',
    'Biology',
    'English',
    'Java',
    'Accounting',
    'Python',
  ]),
}));

export default users;
