export const createShows = (show) => {
  fetch('http://localhost:3000/shows', {
    method: 'POST',
    data: shows
  });
};
