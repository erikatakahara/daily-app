import color from '../../settings/colors';
import spacing from '../../settings/spacing';

export default {
	list: {
	},

	tr: {
		flexDirection: 'row',
		paddingTop: spacing.small
	},

	line: {
		paddingBottom: spacing.small,
		borderBottomWidth: 1,
		borderBottomColor: color.listSeparator
	},

	th: {
		flex: 1,
		color: color.listHeader
	},

	td: {
		flexDirection: 'row',
	},

	value: {
		marginRight: spacing.smallest,
		color: color.listText
	},

	positive: {
		color: color.positive
	},

	negative: {
		color: color.negative
	}
}