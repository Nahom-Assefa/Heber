// Import the Sanity client
import client from './api/sanityClient';

// Define a test query function
const fetchTestData = async () => {
  try {
    // Example query: Fetch all documents of type 'post'
    const testData = await client.fetch('*[_type == "post"]');
    console.log('Fetched test data:', testData);
  } catch (error) {
    console.error('Error fetching test data:', error);
  }
};

// Call the fetchTestData function
fetchTestData();
