const PixabayAPI = {
  getGallery: async (query, page = 1) => {
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=35634022-bf1e5c73f0d8d8be28294a426&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const gallery = await response.json();

    return gallery;
  },
};

export default PixabayAPI;