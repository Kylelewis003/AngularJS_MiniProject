const projects = [
  {
    id: 1,
    name: 'Akio Ecommerce Project',
    description:
      "Akio is an innovative e-commerce platform designed to promote eco-friendly and sustainable products. Built using Angular, this website aims to provide a seamless and user-friendly shopping experience while prioritizing environmental sustainability. From organic clothing to eco-friendly home goods, GreenCart offers a wide range of products that are both stylish and environmentally responsible.",
    featured_image: 'ECOM.png',
    technologies: ['HTML/CSS', 'Angular', 'Javascript'],
    live_link: '#',
    source_link: 'https://github.com/Kylelewis003/EcommerceWebsite',
  },
  {
    id: 2,
    name: 'User Information Application',
    description:
      'The User Management System is a robust CRUD (Create, Read, Update, Delete) application designed to efficiently manage user information within an organization or any system requiring user data management. Built using Angular, this application offers a seamless and intuitive interface for administrators to perform CRUD operations on user data, facilitating easy management and maintenance of user records.',
    featured_image: 'user.png',
    technologies: ['HTML/CSS', 'Angular', 'MySql'],
    live_link: '#',
    source_link: 'https://github.com/Kylelewis003/DBMS_MINI_PROJECT',
  },
  {
    id: 3,
    name: 'Project Three',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    featured_image: 'Rectangle_21.jpg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    live_link: '#',
    source_link: '#',
  },
  {
    id: 4,
    name: 'Project Four',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    featured_image: 'Rectangle_21.jpg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    live_link: '#',
    source_link: '#',
  },
];

const projectContainer = document.getElementById('projects-container');
const popupContainer = document.getElementById('project-detail');
const wrapper = document.querySelector('.wrapper');

const renderedProjects = projects
  .map(
    (element) => `<div class="project-item" id=${element.id}>
              <img src="./img/projects/${element.featured_image}" alt="${element.name}" />
              <div class="project-description">
                <h3>${element.name}</h3>
                <div class="project-actions">
                  <button type="button">${element.technologies[0]}</button>
                  <button type="button">${element.technologies[1]}</button>
                  <button type="button">${element.technologies[2]}</button>
                </div>
                <button type="button" id="${element.name}" onclick="showPopup('${element.id}')" class="see-project-btn">
                  See this project &#10132;
                </button>
              </div>
            </div>
          `,
  ).join('');

projectContainer.innerHTML += renderedProjects;

const popupContent = (project) => `
        <div class="project-details-container" id="${project.id}">
        <button class="modal-close-btn" onclick="hidePopup()">&times;</button>
        <h2>${project.name}</h2>
        <ul class="modal-technologies">
          ${project.technologies.map((technology) => `
                <li class="single-technology">
                  <a href="#">${technology}</a>
                </li>`).join('')}
        </ul>
        <div class="caroussel">
          <img src="img/projects/${project.featured_image}" />
        </div>
        <div class="project-details">
          <p>${project.description}</p>
          <div class="project-buttons">
            <a href="${project.live_link}"
              ><span>See live</span>
              <img class="white-icon" src="img/Union.svg"/>
              <img class="black-icon" src="img/ic_link.svg"/>
            </a>
            <a href="${project.source_link}"
              ><span>See source</span>
              <img class="white-icon" src="img/ic_github.svg"/>
              <img class="black-icon" src="img/ic_github_white.svg"/>
            </a>
          </div>
        </div>
        <div class="next-previous">
          <a href="#" class="previous arrows"
            ><img src="" /><span>Previous project</span></a
          >
          <a href="#" class="next arrows"
            ><span>Next project</span><img src=""
          /></a>
        </div>
      </div>
  `;

/* eslint-disable no-unused-vars */

const showPopup = (pid) => {
  const popupProject = projects.find((item) => {
    if (Number(pid) === Number(item.id)) {
      return item;
    }
    return undefined;
  });
  popupContainer.innerHTML = popupContent(popupProject);
  wrapper.classList.add('hidden');
  window.scrollTo(0, 0);
};

function hidePopup() {
  popupContainer.innerHTML = '';
  wrapper.classList.remove('hidden');
}

/* eslint-enable no-unused-vars */
