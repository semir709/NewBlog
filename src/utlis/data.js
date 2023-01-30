const pageSize = 4;
// const currentPage = 0;

export const takeArticles = (currentPage = 0) => `*[_type == "article"] {
    _id,
    title,
    slug,
    author -> {
        _id,
        name,
        slug,
        image,
    },
    mainImage {
        asset -> {
            url
        }
    },
    categories[] -> {
        title, 
    },
    publishedAt,

    
}[${currentPage * pageSize} ... ${(currentPage + 1) * pageSize}]`;

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "article" && (title match '${searchTerm}*' || categories[]->title match '${searchTerm}*' || author->name match '${searchTerm}*')]{
    _id,
    title,
    slug,
    author -> {
        _id,
        name,
        slug,
        image,
    },
    mainImage {
        asset -> {
            url
        }
    },
    categories[] -> {
        title, 
    },
    publishedAt,
            } [0 ... 5]`;
  return query;
};
