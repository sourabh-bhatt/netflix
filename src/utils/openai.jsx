// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'],
// });

// export default openai;

import OpenAI from 'openai';
import { OPENAI_API_KEY } from './contansts';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export default openai;
