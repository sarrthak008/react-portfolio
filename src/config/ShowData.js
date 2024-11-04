import PORJECT1 from '../assets/project1.jpg'
import PORJECT2 from '../assets/project2.jpg'

const FILES_DATA = [
   {
      type: 'file',
      name: 'My Story',
      fildData: [

         {
            title: "My Story",
            discription: 'Hii 👋 , My name is sarthak Navale . I m fullStack webdeveloper from India . I enjoy learning new skills and keeping up with the latest trends in technology to deliver great projects.',
            Image: false
         },
         {
            title: 'My Interest',
            discription: 'I started my web development journey in 12th using just my mobile phone. I learned the basics of coding with HTML, CSS, and JavaScript. Now, I am comfortable working with Node.js, React, and MongoDB, allowing me to build dynamic and responsive applications. I enjoy tackling new challenges and continuing to grow as a developer.',
            Image: false
         },
         {
            title: 'My Projects',
            discription: 'In my journey i learn lot of things. I create lot of project there i share some between them.',
            Image: [PORJECT1, PORJECT2]
         }

      ]
   },
   {
      type: 'contact',
      name: ''
   }, {
      type: 'folder',
      name: 'projects',
      content: [
         {
            type: "folder",
            name: 'Durvas Travels',
            inner_data: [
               { type: "file",
                  title: 'about',
                  heading:'Duravs Travels',
                  discription:'This project is my first paid assignment, where I developed a website to showcase various tour packages. Throughout this experience, I learned a lot, especially about how to communicate effectively with clients and understand their requirements. The website was built using HTML, CSS, and JavaScript, which helped me create an engaging and user-friendly interface. I also developed APIs using Node.js to manage the backend functionality, allowing the site to handle tour package data and facilitate bookings smoothly. This blend of front-end and back-end development not only enhanced the interactivity of the site but also gave me a deeper understanding of full-stack development. Overall, this project has been a significant learning opportunity, helping me grow both technically and professionally as I prepare for future projects in web development.'},
               { type: "photo", title: 'screenshot', url: PORJECT2 },
               { type: "htmlDoc", title: 'website', url: 'https://durvas-world-travels.netlify.app/' }, 
               { type: "gitdoc", title: 'github repo.' },
            ]
         },
         {
            type: "folder",
            name: 'workZone',
            inner_data: [
               { type: "file", title: 'note' ,heading:'workZone' ,discription:'I’m creating a job portal where users can search for jobs using the Adzure API, apply for positions, and interact with other users, who are fake users generated by an API. The platform includes features for users to log in and log out securely, change their passwords, and maintain their accounts. Users can also chat with the fake users, powered by the ChatGPT API. This project is a great way for me to learn about local storage, as I’m effectively managing user data and interactions, ensuring a smooth and secure experience for everyone.'}, 
               { type: "photo", title: 'scrrenshot', url: PORJECT1 }, 
               { type: "htmlDoc", title: 'website', url: 'https://work-zzone.netlify.app' }, 
               { type: "gitdoc", title: 'github repo.' }]
         },
      ]
   }
]

export { FILES_DATA }