import project1 from "../pictures/project/project1.jpg";
import project2 from "../pictures/project/test2.jpg";
import project3 from "../pictures/project/test3.jpg";

export const ProjectData = [
  {
    id: 1,
    title: "Simple Dashboard",
    description: `This is a simple dashboard I created with ReactJS and mostly styled with
        TailwindCSS. I implemented a few API's such as a weather API and a random quote
        generator. My favorite feature is the drag and drop functionality. The tasks are saved
        using local storage.
        `,
    picture: project1,
    liveLink: "https://simple-dashboard.herokuapp.com/",
    codeLink: "https://github.com/mdmoren/simple-dashboard",
    stack: ["ReactJS", "Javascript", "TailwindCSS", "HTML", "CSS"],
    style: "",
  },
  {
    id: 2,
    title: "project2",
    description: `in progress
        `,
    picture: project2,
    liveLink: "",
    codeLink: "",
    stack: [],
    style: "",
  },
  {
    id: 3,
    title: "project3",
    description: `in progress
        `,
    picture: project3,
    liveLink: "",
    codeLink: "",
    stack: [],
    style: "sm:col-span-2 md:col-auto",
  },
];
