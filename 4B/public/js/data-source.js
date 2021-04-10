class DataSource {
    async writers() {
        const result = await fetch('http://localhost:8080/api/writers');
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json){
                resolve(json);
            } else {
                reject('No data found');
            }
        });
    }

    async books() {
        const result = await fetch('http://localhost:8080/api/books');
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json){
                resolve(json);
            } else {
                reject('No data found');
            }
        });
    }

    async categories() {
        const result = await fetch('http://localhost:8080/api/categories');
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json){
                resolve(json);
            } else {
                reject('No data found');
            }
        });
    }

    async insertWriter(writer) {
        const result = await fetch('http://localhost:8080/api/writers/add/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(writer)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Insert Succeed');
            } else {
                reject('Insert Failed');
            }
        });
    }

    async insertCategory(category) {
        const result = await fetch('http://localhost:8080/api/categories/add/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Insert Succeed');
            } else {
                reject('Insert Failed');
            }
        });
    }
    
    async insertBook(book) {
        const result = await fetch('http://localhost:8080/api/books/add/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Insert Succeed');
            } else {
                reject('Insert Failed');
            }
        });
    }

    async updateWriter(writer) {
        const result = await fetch('http://localhost:8080/api/writers/update/', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(writer)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Update Succeed');
            } else {
                reject('Update Failed');
            }
        });
    }

    async updateCategory(category) {
        const result = await fetch('http://localhost:8080/api/categories/update/', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Update Succeed');
            } else {
                reject('Update Failed');
            }
        });
    }

    async updateBook(book) {
        const result = await fetch('http://localhost:8080/api/books/update/', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Update Succeed');
            } else {
                reject('Update Failed');
            }
        });
    }

    async deleteWriter(condition) {
        const result = await fetch('http://localhost:8080/api/writers/delete/', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(condition)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Delete Succeed');
            } else {
                reject('Delete Failed');
            }
        });
    }

    async deleteCategory(condition) {
        const result = await fetch('http://localhost:8080/api/categories/delete/', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(condition)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Delete Succeed');
            } else {
                reject('Delete Failed');
            }
        });
    }

    async deleteBook(condition) {
        const result = await fetch('http://localhost:8080/api/books/delete/', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(condition)
        });
        const json = await result.json();
        return new Promise((resolve, reject) => {
            if (json.success === 'OK'){
                resolve('Delete Succeed');
            } else {
                reject('Delete Failed');
            }
        });
    }
}

export default DataSource;