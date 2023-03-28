// const books = [{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Fiction' }, { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' }, { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'Science Fiction' }, { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Fiction' }, { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasy' }, ];

// // const rendered = books.year.sort((element) => {


// //     return `
// //     <div class="col-lg-5">
// //                 <div class="card " style="width: 18rem;">
// //                     <div class="card-body">
// //                         <h2 class="card-title2">${element.id}</h2>
// //                         <h3 class="card-title3">${element.title}</h3>
// //                         <h5 class="card-title">${element.author}</h5>
// //                         <p>Quantity: ${element.year}</p>

// //                         <span>Quantity: ${element.genre}</span>
// //                     </div>
// //                 </div>
// //     </div>
// //     `

// // });


// const row = document.querySelector('.row')

// const renderedCars = books.map((element) => {


//     return `
//     <div class="col-lg-5">
//                 <div class="card " style="width: 18rem;">
//                     <div class="card-body">
//                         <h2 class="card-title2">${element.id}</h2>
//                         <h3 class="card-title3">${element.title}</h3>
//                         <h5 class="card-title">${element.author}</h5>
//                         <p>Quantity: ${element.year}</p>

//                         <span>Quantity: ${element.genre}</span>
//                     </div>
//                 </div>
//     </div>
//     `

// });


// row.innerHTML = renderedCars.join('');


// ikkinch uy ishi

const students = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'C' },
    { id: 3, name: 'Charlie', grade: 'B' },
    { id: 4, name: 'Dave', grade: 'A' },
    { id: 5, name: 'Eve', grade: 'B' },
];

const input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    box = document.querySelector('.studentInfo');

btn.addEventListener('click', () => {
    const id = input.value;

    const checkStudent = students.find((student) => student.id == id);
    if (checkStudent) {
        box.innerHTML = `<h2> Name  ${checkStudent.name}, Grade  ${checkStudent.grade}, Id   ${checkStudent.id} </h2>`
    } else {
        box.innerHTML = `<h2>bunday id yoq</h2>`
    }

})