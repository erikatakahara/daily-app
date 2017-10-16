import color from '../../settings/colors';
import spacing from '../../settings/spacing';
import fonts from '../../settings/fonts';

export default {
	header: {
		backgroundColor: color.primary,
		paddingTop: 24,
	},

	title: {
		padding: spacing.normal,
		color: color.white,
		fontSize: fonts.large
	},

	menu: {
		backgroundColor: color.primaryLight,
		flexDirection: 'row',
		flexWrap: 'nowrap'
	},

	menuItem: {
		paddingLeft: spacing.normal,
		paddingRight: spacing.normal,
		padding: spacing.small,
		color: color.primaryDark,
		fontSize: fonts.small
	},

	activeMenuItem: {
		backgroundColor: color.primaryDark,
		color: color.primaryLight
	}
}