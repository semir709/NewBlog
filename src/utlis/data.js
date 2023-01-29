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
