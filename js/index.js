// array of projects
const projects = [
    {
        title : 'Carpoint',
        description : 'Carpoint website showcase',
        url : 'https://github.com/temborichman/carpoint.git',
    },
    {
        title : 'Shoptacle',
        description : 'Shoptacle website showcase',
        url : 'https://github.com/temborichman/shoptacle.git',
    },
    {
        title : 'SFS trucks',
        description : 'SFS truck website showcase',
        url : 'https://github.com/temborichman/truck.git',
    },
    {
        title : 'real estate',
        description : 'Real Estate website showcase',
        url : 'https://www.figma.com/proto/mOhoOQWp69YjTNuJNnPGcN/Watches?node-id=2032-34&node-type=canvas&t=IA9wKtkg1Yn62WLP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    },
    {
        title : 'real estate',
        description : 'Real Estate website showcase',
        url : 'https://www.figma.com/proto/mOhoOQWp69YjTNuJNnPGcN/Watches?node-id=2032-34&node-type=canvas&t=IA9wKtkg1Yn62WLP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    },
];

// function to load projects

function loadProjects() {
    const projectList = document.getElementById('project-list');

    projects.forEach((project) => {
       const projectCard = document.createElement('div');
       projectCard.className = 'project-card';

       projectCard.innerHTML = `
       <h2>${project.title}</h2>
       <p>${project.description}</p>
       <iframe src="${project.url}" title= "${project.title}" class="project-iframe"></iframe>
       `;

       projectList.appendChild(projectCard);
    });
}

// Load projects when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadProjects);