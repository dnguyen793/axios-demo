// const BASE_URL = 'http://api.reactprototypes.com';
// const API_KEY = '?key=testuser1234';
//
// axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
//     const { todos } = resp.data;
//     const table = $('table tbody');
//
//     addToDom(todos, table);
// });
//
// const addToDom = (list, container) => {
//     const tableRows = list.map((item, index) => {
//
//         const tableData = [
//             $(`<td>${index + 1}</td>`),
//             $(`<td>${item.title}</td>`),
//             item.complete ? $(`<td class="text-success">Yes</td>`) : $(`<td class="text-danger">No</td>`)
//         ];
//
//         return $('<tr>').append(tableData);
//     });
//
//     container.append(tableRows);
// };


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    console.log('server response', resp);
}).catch(err => {
    console.log("error", err.message);
})

const newItem = {
    title: 'iamunique',
    details: 'this is a todo list'
};

//post data via another argument
//if there's a promises then use .then
//status 201 = success = true
// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then( resp => {
//     console.log('Add Response:', resp);
// })

const itemId = "5ac27896329150131fbbff60";
axios.get(`${BASE_URL}/todos/${itemId}${API_KEY}`).then( resp => {
    console.log('server resp:', resp);
});




















