const authors = [{
    id: "1",
    name: "Albert",
    surname: "Camus",
    age: "41",
    },
    {
        id: "2",
        name: "Robert",
        surname: "Cervantes",
        age: "33",
        books: []
    }
]

const books = [
    {
        id: "1",
        title: "Yabancı",
        author_id: "1",
        score: 3.4,
        isPublished: true,
    },
    {
        id: "2",
        title: "Hırsız",
        author_id: "2",
        score: 7.1,
        isPublished: false,
    },
    {
        id: "3",
        title: "Düzenbaz",
        author_id: "1",
        score: 8.4,
        isPublished: true,
    },
    {
        id: "4",
        title: "Denemeler",
        author_id: "2",
        score: 5.9,
        isPublished: false,
    },
]

module.exports = {
    authors,
    books
}