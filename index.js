const data = [
  {
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, Bread',
    dates: '',
    icon: './icons/basket.svg',
  },
  {
    name: 'The teory of evolution',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content: 'The evolution',
    dates: '',
    icon: './icons/brain.svg',
  },
  {
    name: 'New fuature',
    created: 'May 05, 2021',
    category: 'Idea',
    content: 'Implement new',
    dates: '',
    icon: './icons/lightbulbon.svg',
  },
  {
    name: 'Willam Gaddis',
    created: 'May 07, 2021',
    category: 'Qote',
    content: 'Power does not',
    dates: '',
    icon: './icons/quote.svg',
  },
  {
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, Bread',
    dates: '',
    icon: './icons/basket.svg',
  },
  {
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, Bread',
    dates: '',
    icon: './icons/basket.svg',
  },
  {
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, Bread',
    dates: '',
    icon: './icons/basket.svg',
  },
];

const list = document.querySelector('tbody');

console.log(list);

const markup = data
  .map(
    (item) => `  <tr>
        <td><img
              width="20"
              height="20"
              src=${item.icon}
              alt="edit"
            /></td>
        <td>${item.name}</td>
        <td>${item.created}</td>
        <td>${item.category}</td>
        <td>${item.content}</td>
        <td>${item.dates}</td>
        <td>
          <button>
            <img
              width="20"
              height="20"
              src="./icons/edit_icon_251020.svg"
              alt="edit"
            />
          </button>
          <button>
            <img
              width="20"
              height="20"
              src="./icons/archive_icon_125380.svg"
              alt="edit"
            />
          </button>
          <button>
            <img
              width="20"
              height="20"
              src="./icons/seo-social-web-network-internet_262_icon-icons.com_61518.svg"
              alt="edit"
            />
          </button>
        </td>
      </tr>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);
