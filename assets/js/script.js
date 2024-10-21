const $ = document

let navbarItems = $.querySelector('.nav-items')

let idProdcut = [
  {id: 'Nladkop21it', title: 'About Me'},
  {id: 'Lfasdiontr52', title: 'Skils'},
  {id: '8fsfKlTofaB1', title: 'Example of work'},
  {id: 'MoTy5fladf', title: 'Contact Us'},
]

idProdcut.forEach(Items => {
  navbarItems.insertAdjacentHTML('beforeend', `<li class="nav-item">
                <a class="nav-link active text-light text-bold" aria-current="page" href="About.html?id=${Items.id}">${Items.title}</a>
              </li>`)
})