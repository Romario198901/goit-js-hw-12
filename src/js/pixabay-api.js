import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,
});
export async function getImagesByQuery(query, page) {
  try {
    const response = await instance.get('/', {
      params: {
        key: '53360432-3950dd890aa8264617696b589',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });
    const { hits, totalHits } = response.data;
    return { hits, totalHits };
  } catch (error) {
    console.error(error);
  }
}
