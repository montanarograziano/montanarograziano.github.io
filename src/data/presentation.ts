type Social = {
  label: string;
  link: string;
  packName: string;
};

type Presentation = {
  mail: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "graziano.montanaro98@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/graziano-montanaro/",
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
