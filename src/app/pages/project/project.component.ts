import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Overview',
      description: [
				'The initial idea for this platform was continuously evolving with how we wanted to reward users. We started to think from a user\'s perspective of the process they needed to go through to perform acts of kindness and how those acts empower the brands behind them.',
				'I was asked to take on a creative role for this project. I was responsible for leading all of the design efforts which included building a meaningful brand, designing the user interface/experience, and being a part of the development by coding and managing a team of developers.'
			],
      // tools: ['Sketch', 'InVision'],
      isImgRight: true
    },
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Problem',
			description: [
				'The problem was clear. How many people actively do kind and meaningful acts out of the goodness of their hearts? How can companies give back to great causes besides just writing a check? The solution was simple. Partner with exciting brands who donate products or experiences, incentivize people to do acts of kindness and reward them for doing so.',
				'Users complete an act by taking a picture or video proof then submit through our platform that shares to their Facebook profile. For each act that is verified, users receive a percentage discount towards a product or points on a leaderboard and compete for a grand prize.'
		],
      // tools: ['Sketch', 'InVision'],
      isImgRight: false
    },
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Approach',
      description: [
				'I was brought out to L.A. with the rest of the team to have a collaborative jam session filled with a long week of initial design sprints. While there, we really fine-tuned what the platform was going to do and how it will serve our users and brands. Some notable brands that joined first were Rockstar Energy and Casamigos Tequila.',
				'Additionally, I began white-boarding UI solutions for the different pages and interactions users will go through. This step really helped our team chisel at the concept and allowed us to simplify and fine tune the whole platform.'
			],
      // tools: ['Sketch', 'InVision'],
      isImgRight: true
    },
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Branding',
      description: [
				'At the jam session, I started forming an identifiable brand that could easily be distinguished among other charitable organizations. We decided to choose a deep purple to be our primary color due to the similar overuse of greens, reds, and pink in other brands.',
				'The \'K\' symbol and letter mark are very straightforward with the characters representing the name of the organization. It was decided at the final steps of branding to add the lesser and greater than signs to be used as an additional symbolic feature for future marketing plans.'
			],
      tools: ['Pen & Paper', 'Illustrator'],
      isImgRight: false
    },
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'User Interface',
      description: [
				'While my team and I were completing the white-boarding, I decided to start sketching essential screens we needed to launch a successful platform. Once we added and removed certain features and were happy with what we had, it was time to transition into wireframing these designs.',
				'Laying out the low-fidelity mockups allowed my development team to get a head start on constructing the back and front end skeleton of the platform. Following that, I filled in the high-fidelity mockups with necessary details and branding assets forming a fully designed platform'
			],
      tools: ['Pen & Paper', 'Sketch'],
      isImgRight: true
    },
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Prototyping',
      description: [
				'Prototyping was a vital part of building the project. We needed to see how different user flows worked and which were best. Once we had a solid overall design that was established and consistent, we needed something to show to potential investors and brand partners while the platform was being worked on.',
				'We decided that the quickest way to build an easily shareable prototype was through InVision. Building it was easy as we just exported the screens, mapped the hot-spots and sent it off. The prototype was used in a TEDx Talk by one of my friends and business partners, Teague.'
			],
      tools: ['Sketch', 'InVision'],
      isImgRight: false
    },
    {
      image: 'https://ross.so/static/images/projects/kic/final/final1.png',
      title: 'Website',
      description: [
				'The website is the product that users will be interacting with throughout the whole life process of being kind and being rewarded. Users will use the site to view the different campaigns and products that are provided by their favorite brands. Upon selecting a cause through a brand to support, users have a list of acts they need to complete in order to receive their discount or spot on the leaderboard.',
				'The site is built using the React Javascript framework, along with accompanying web technologies to be light, fast, and responsive.'
			],
      tools: ['Sketch', 'Atom', 'Node', 'HTML', 'SASS', 'Javascript', 'React', 'Google Cloud', 'Heroku', 'GitHub'],
      isImgRight: true
    },
  ];

  information = {
    title: 'KINDNESS IS COOL',
    description: 'A message that promotes kindness through social well-being is difficult to communicate to people, especially younger ones. A solution is to provide an incentive based platform that rewards those for their acts of kindness.',
    lists:[
      {
        title: 'ROLE',
        data: ['Lead Designer', 'Developer']
      },
      {
        title: 'ROLE',
        data: ['Lead Designer', 'Developer']
      },
      {
        title: 'ROLE',
        data: ['Lead Designer', 'Developer']
      },
      {
        title: 'ROLE',
        data: ['Lead Designer', 'Developer']
      }
    ],
    link: 'http://www.google.com.eg'
  }
  constructor() {}

  ngOnInit() {}

}
