export const portafolioData = [
	{
		imgSrc: '/img/trippioBot.svg',
		title: 'Trippio Bot',
		skills: ['React', 'Next','Tailwind'],
		descripcion:
			'Aplicacion web para la automaticacion de la comunicación para agencias de viajes con notificaciones personalizadas y sugerencias en tiempo real.',
		demoURL: 'https://bot.trippio.ai/',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/trippio.svg',
		title: 'Trippio IO',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			'Aplicacion web de generacion de itinerarios personalizados apoyados con inteligencia artifical',
		demoURL: 'https://trippio.ai/es',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Next: 'skill-icons:nextjs-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
