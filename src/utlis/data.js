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
        assets -> {
            url
        }
    },
    categories[] -> {
        title, 
    },
    publishedAt,

    
}`;
