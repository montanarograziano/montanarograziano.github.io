export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Multimodal Dementia Detection (MSc Thesis)",
    techs: ["Python, Keras, Pandas, MLFlow, SHAP, Grad-CAM"],
    link: "https://github.com/montanarograziano/Multimodal-approach-for-Dementia-Detection"
  },
  {
    title: "Dementia Detection",
    techs: ["Python, Keras, Pandas, Docker, DVC, MLFlow"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Cicerone",
    techs: ["Java, Android"],
    link: "https://f-s-c.github.io/Cicerone/",
  },
  {
    title: "Emotionally",
    techs: ["HTML, CSS, JavaScript, Laravel"],
    link: "https://github.com/emotionally-fsc",
  },
];

export default projects;
