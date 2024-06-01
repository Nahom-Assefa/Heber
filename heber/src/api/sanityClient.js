import {createClient} from '@sanity/client';

const client = createClient({
  projectId: 'fu26dzrt',
  dataset: 'heber_general_dataset', // Use the default dataset or specify a custom dataset
  apiVersion: '2024-03-31', // use a UTC date string
  useCdn: true, // Enable CDN for faster response times (optional)
});

export default client;
