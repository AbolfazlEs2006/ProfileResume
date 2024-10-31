const $ = document

let h2 = document.querySelector('.h2')

let idProdcut = [
    {id: 'Nladkop21it'},
    {id: 'Lfasdiontr52'},
    {id: '8fsfKlTofaB1'},
    {id: 'MoTy5fladf'},
]

let locationParams = new URLSearchParams(location.search)
let mainProductID = locationParams.get('id')

if (mainProductID === 'Nladkop21it') {
    h2.insertAdjacentHTML('beforeend', `<h2>این صفحه توسط مدیر پروژه در حال آپدیت است...</h2>`)
} else if (mainProductID === 'Lfasdiontr52') {
    h2.insertAdjacentHTML('beforeend', `<h2>این صفحه توسط مدیر پروژه در حال آپدیت است...</h2>`)
} else if (mainProductID === '8fsfKlTofaB1') {
    h2.insertAdjacentHTML('beforeend', `<h2>این صفحه توسط مدیر پروژه در حال آپدیت است...</h2>`)
}
