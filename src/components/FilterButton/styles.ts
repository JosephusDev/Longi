import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
	searchButton: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
		padding: 10,
		borderRadius: 8,
		marginVertical: 10,
		backgroundColor: '#FFFFFF',
		borderWidth: 0.5,
		borderColor: colors.gray[500],
	},
	searchLabel: {
		fontFamily: fontFamily.bold,
		fontSize: 15,
		color: colors.gray[100],
	},
})
