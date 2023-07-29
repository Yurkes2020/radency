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

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const list = document.querySelector('tbody'),
  newNote = document.querySelector('.add'),
  modal = document.querySelector('.modal-box'),
  close = document.querySelector('.close'),
  addNote = document.querySelector('.addNote'),
  input = document.querySelector('input'),
  select = document.querySelector('select'),
  textArea = document.querySelector('textarea');

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

newNote.addEventListener('click', () => {
  modal.classList.add('show');
});

close.addEventListener('click', () => {
  modal.classList.remove('show');
});

addNote.addEventListener('click', (e) => {
  e.preventDefault();
  let noteName = input.value,
    noteCategory = select.value,
    noteContent = textArea.value,
    regExp = new RegExp(
      /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-](\d{4}$)/g
    ),
    parseDate = noteContent.match(regExp);

  if (noteName || noteContent) {
    let newDate = new Date(),
      month = months[newDate.getMonth()],
      day = newDate.getDate(),
      year = newDate.getFullYear();

    let noteInfo = {
      name: noteName,
      created: `${month} ${day}, ${year}`,
      category: noteCategory,
      content: noteContent,
      dates: parseDate || '',
    };
    console.log(parseDate);
  }
});
