import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const assignments = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
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
  topic:sample([
    "Algebraic Equations",
    "Essay Writing",
    "Chemical Reactions",
    "The history of ancient Rome",
    "The effects of climate change on the environment",
    "The rise of social media and its impact on society",
    "The benefits and drawbacks of remote work",
    "The ethics of artificial intelligence",
    "The role of women in politics",
    "The psychology of addiction",
    "The future of space exploration",
    "The impact of globalization on culture",
    "The history and culture of indigenous peoples",
  ]),
  body:sample([
    "Please solve the following equations: x + 2 = 7, 3x - 5 = 10",
    "Please write a 500-word essay on the importance of education in today's society.",
    "Please balance the following chemical equations: H2 + O2 = H2O, NaCl + AgNO3 = AgCl + NaNO3",
  ])
}));

export default assignments;
