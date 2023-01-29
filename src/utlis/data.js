export const takeArticles = `*[_type == "article"] {
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

    
}`;

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
            }`;
  return query;
};
