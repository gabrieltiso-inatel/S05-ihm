export let resumes = JSON.parse(localStorage.getItem('resumes')) || [
    { id: 1, name: 'Resume 1', content: 'Content of Resume 1' },
    { id: 2, name: 'Resume 2', content: 'Content of Resume 2' },
    { id: 3, name: 'Resume 3', content: 'Content of Resume 3' }
]

export let positions = [
    { id: 1, company: 'Company A', title: 'Frontend Developer', description: 'Develop modern interfaces.', details: 'More details about the position.' },
    { id: 2, company: 'Company B', title: 'Software Engineer', description: 'Work with distributed systems.', details: 'More details about the position.' },
    { id: 3, company: 'Company C', title: 'Data Analyst', description: 'Analyze large volumes of data.', details: 'More details about the position.' }
]; 

export let applications = JSON.parse(localStorage.getItem('applications')) || [];