export const blog = {
  articleUrl: ({ slug }) => `/blog/article/${slug}`,
  categoryUrl: slug => `/blog/category/${slug}`,
};

export default {
  blog,
};
