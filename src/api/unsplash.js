import axios from 'axios';

//We are creating the baseurl and headers so we can later just specify which path we need to call:
//[NAME_WE_DECIDE].get('/search/photos', {
//     params: {query: term}
// });
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID BT2gTpF8g3IUrh7184gAOwb30W8B0yfZ9L2BC2hG4Jo'
  }
});