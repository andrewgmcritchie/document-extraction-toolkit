import {
	Archive,
	Chemistry,
	SettingsAdjust,
	ShareKnowledge,
	Document,
	BatchJob,
	Security,
	Translate,
	WatsonxAi
} from '@carbon/icons-react'



const CarbonMenuList = {
	Menu: [
		{
			title: 'Surveys',
			titleTranslate: 'Surveys',
			icon: WatsonxAi,
			menuItem: [
				{
					title: 'Codes',
					titleTranslate: 'Codes',
					link: '/surveys'
				},
			]
		},
		// {
		// 	title: 'Administration',
		// 	titleTranslate: 'menu.sections.admin',
		// 	icon: Security,
		// 	menuItem: [
		// 		{
		// 			title: 'Users',
		// 			titleTranslate: 'menu.users',
		// 			link: '/users'
		// 		},
		// 		{
		// 			title: 'Roles',
		// 			titleTranslate: 'menu.roles',
		// 			link: '/roles'
		// 		},
		// 	]
		// },
	]
}


export default CarbonMenuList;