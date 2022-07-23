const data = [
  {
    id: 1,
    name: "Verma",
    age: 28,
  },
  {
    id: 2,
    name: "Mukumbuta",
    age: 29,
  },
  {
    id: 3,
    name: "Kibirige",
    age: 30
  }
]

const ul = document.querySelector('.unorderList');

for( const each in data) {
  const li = document.createElement('li');
  li.className='list';

  const name = document.createElement('p');
  name.className='name';
  name.textContent=each.name;
  
  const age = document.createElement('p');
  age.className='age';
  age.textContent=each.age;

  li.appendChild(name);
  li.appendChild(age);

  ul.appendChild(li)
}
