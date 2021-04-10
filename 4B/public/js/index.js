import DataSource from './data-source.js'

const dataSource = new DataSource();

const main = () => {
    loadData();

    document.querySelector('#add-writer').addEventListener('click', onAddWriterClick);
    document.querySelector('#update-writer').addEventListener('click', onUpdateWriterClick);
    document.querySelector('#add-category').addEventListener('click', onAddCategoryClick);
    document.querySelector('#update-category').addEventListener('click', onUpdateCategoryClick);
    document.querySelector('#add-book').addEventListener('click', onAddBookClick);
    document.querySelector('#update-book').addEventListener('click', onUpdateBookClick);
}

const loadData = async () => {
    const categories = await dataSource.categories();
    const writers = await dataSource.writers();
    const books = await dataSource.books();
    console.log('categories: ', categories);
    console.log('writers: ', writers);
    console.log('books: ', books);
    renderCategoryElement(categories);
    renderWriterElement(writers);
    renderBookElement(books);
}

const renderWriterElement = (list) => {
    const writerContentElement = document.querySelector('#writer-content');
    let writerListHtml = '<h2>Writer List</h2>';
    list.forEach(writer => {
        writerListHtml += `
        <div class="item">
            <h3>(${writer.id}) ${writer.name}</h3>
            <p>Alamat: ${writer.alamat}</p>
            <button class="btn-delete-writer" id="${writer.id}">Hapus</button>
        </div>`;
    });
    writerContentElement.innerHTML = writerListHtml;
    const buttons = document.querySelectorAll(`.btn-delete-writer`);
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const condition = {id: event.target.id};
            dataSource.deleteWriter(condition);
            loadData();
        });
    });
}

const renderCategoryElement = (list) => {
    const categoryContentElement = document.querySelector('#category-content');
    let categoryListHtml = '<h2>Category List</h2>';
    list.forEach(category => {
        categoryListHtml += `
        <div class="item">
            <h3>(${category.id}) ${category.name}</h3>
            <button class="btn-delete-category" id="${category.id}">Hapus</button>
        </div>`;
    });
    categoryContentElement.innerHTML = categoryListHtml;
    const buttons = document.querySelectorAll(`.btn-delete-category`);
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const condition = {id: event.target.id};
            dataSource.deleteCategory(condition);
            loadData();
        });
    });
}

const renderBookElement = (list) => {
    const bookContentElement = document.querySelector('#book-content');
    let bookListHtml = '<h2>Book List</h2>';
    list.forEach(book => {
        bookListHtml += `
        <div class="item">
            <h3>(${book.id}) ${book.name}</h3>
            <img src="${book.img}" alt="image">
            <p>Category: ${book.category_id}</p>
            <p>Writer: ${book.writer_id}</p>
            <p>Publication Year: ${book.publication_year}</p>
            <button class="btn-delete-book" id="${book.id}">Hapus</button>
        </div>`;
    });
    bookContentElement.innerHTML = bookListHtml;
    const buttons = document.querySelectorAll(`.btn-delete-book`);
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const condition = {id: event.target.id};
            dataSource.deleteBook(condition);
            loadData();
        });
    });
}

const onAddWriterClick = async () => {
    const name = document.querySelector('#writer-name').value;
    const alamat = document.querySelector('#writer-address').value;
    const newWriter = {
        name: name,
        alamat: alamat
    }
    await dataSource.insertWriter(newWriter);
    loadData();
}

const onUpdateWriterClick = async () => {
    const id = document.querySelector('#writer-id').value;
    const name = document.querySelector('#writer-name').value;
    const alamat = document.querySelector('#writer-address').value;
    const newWriter = {
        id: id,
        name: name,
        alamat: alamat
    }
    await dataSource.updateWriter(newWriter);
    loadData();
}

const onAddCategoryClick = async () => {
    const name = document.querySelector('#category-name').value;
    const newCategory = {
        name: name
    }
    await dataSource.insertCategory(newCategory);
    loadData();
}

const onUpdateCategoryClick = async () => {
    const id = document.querySelector('#category-id').value;
    const name = document.querySelector('#category-name').value;
    const newCategory = {
        id: id,
        name: name
    }
    await dataSource.updateCategory(newCategory);
    loadData();
}

const onAddBookClick = async () => {
    const name = document.querySelector('#book-name').value;
    const categoryId = document.querySelector('#book-category').value;
    const writerId = document.querySelector('#book-writer').value;
    const bookYear = document.querySelector('#book-year').value;
    const bookImg = document.querySelector('#book-img').value;
    const newBook = {
        name: name,
        category_id: categoryId,
        writer_id: writerId,
        publication_year: bookYear,
        img: bookImg
    }
    const state = await dataSource.insertBook(newBook);
    console.log("add book state: ", state);
    loadData();
}

const onUpdateBookClick = async () => {
    const id = document.querySelector('#book-id').value;
    const name = document.querySelector('#book-name').value;
    const categoryId = document.querySelector('#book-category').value;
    const writerId = document.querySelector('#book-writer').value;
    const bookYear = document.querySelector('#book-year').value;
    const bookImg = document.querySelector('#book-img').value;
    const newBook = {
        id: id,
        name: name,
        category_id: categoryId,
        writer_id: writerId,
        publication_year: bookYear,
        img: bookImg
    }
    await dataSource.updateBook(newBook);
    loadData();
}

main();