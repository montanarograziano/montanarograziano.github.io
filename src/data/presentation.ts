type Social = {
  label: string;
  link: string;
  packName: string;
};

type Presentation = {
  mail: string;
  title: string;
  fullName: string;
  description: string;
  socials: Social[];
  picture: string;
};

const presentation: Presentation = {
  mail: "graziano.montanaro98@gmail.com",
  fullName: "Graziano Montanaro",
  title: "Hi, I’m Graziano 👋",
  picture: "../assets/images/profile.jpg",
  description:
    "I'm a passionate *Python developer* and *Machine Learning Engineer* from Italy. I'm always eager to learn and try new things. I'm a supporter of the FOSS philosophy and I'm willing to contribute to interesting projects in the open source community. Currently, I'm working as a Machine Learning Engineer at *<a title='Tuidi', href='https://www.tuidi.ai/' target='_blank'>Tuidi</a>*.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/graziano-montanaro-05255317a/?original_referer=https%3A%2F%2Fgithub.com%2F",
      packName: "mdi:linkedin",
    },
    {
      label: "Scholar",
      link: "https://scholar.google.com/citations?hl=it&authuser=2&user=lpNu0JwAAAAJ",
      packName: "simple-icons:googlescholar",
    },
    {
      label: "Github",
      link: "https://github.com/montanarograziano",
      packName: "mdi:github",
    },
  ],
};

export default presentation;
