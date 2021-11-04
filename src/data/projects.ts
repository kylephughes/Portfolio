type Project = {
  title: string
  description: string
  tech: string
  link: string
}
export const projects: Array<Project> = [
  {
    title: 'COVID-19 Global Hackathon: Discount Mappers',
    description:
      'Developed a progressive web application to track discounts being offered to first responders along with my team at DSS. The app was integrated with Google Maps to accurately display discounts based on the devices current location https://github.com/discountmappers',
    tech: "React/Typescript, Material, Google API's, AWS Dynamo/Lambda/API Gateway",
    link: 'https://github.com/discountmappers',
  },
  {
    title: 'Happy Hour Finder',
    description:
      'Hobby project started to learn Angular. This project is designed to solve the -- Its 4:30pm, which bars/resturants around me have good specials? ',
    tech: 'Angular, Typescript, FlexLayout, Material, Node, Express, MongoDB',
    link: 'https://github.com/hughes72/PhillyFun',
  },
  {
    title: 'Penn State Science Olympiad Web Application',
    description:
      'Web application built to handle all tasks related to a Science Olympiad competition. As part of my masters capstone experience, our team achieved our goal of delivering a high quality system by the end of the semester while at the same time learning new technologies.',
    tech: 'React, Java, Spring, MongoDB, Material UI',
    link: 'https://github.com/sweng500-g5-spring2018',
  },
]
