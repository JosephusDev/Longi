import { useAuth } from '@/context/AuthContext'
import { Redirect } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { Feather } from '@expo/vector-icons'
import { colors, fontFamily } from '@/styles/theme'

export default function PrivateLayout() {
	const { isAuthenticated } = useAuth()
	if (!isAuthenticated) {
		return <Redirect href='/(auth)' />
	}

	return (
		<Drawer
			screenOptions={{
				headerShown: false,
				drawerActiveBackgroundColor: 'transparent',
				drawerInactiveBackgroundColor: 'transparent',
				drawerInactiveTintColor: colors.gray[400],
				drawerActiveTintColor: colors.red.base,
				drawerLabelStyle: {
					fontFamily: fontFamily.bold,
					fontSize: 15,
				},
				drawerHideStatusBarOnOpen: true,
				drawerStyle: {
					width: '55%',
					backgroundColor: colors.light,
				},
				sceneStyle: {
					backgroundColor: colors.gray[100],
				},
			}}
			initialRouteName='home'
		>
			<Drawer.Screen
				name='home'
				options={{
					drawerLabel: 'Início',
					drawerIcon: ({ color }) => <Feather name='home' size={20} color={color} />,
				}}
			/>
			<Drawer.Screen
				name='alunos'
				options={{
					drawerLabel: 'Alunos',
					drawerIcon: ({ color }) => <Feather name='users' size={20} color={color} />,
				}}
			/>
			<Drawer.Screen
				name='turmas'
				options={{
					drawerLabel: 'Turmas',
					drawerIcon: ({ color }) => <Feather name='book-open' size={20} color={color} />,
				}}
			/>
			<Drawer.Screen
				name='disciplinas'
				options={{
					drawerLabel: 'Disciplinas',
					drawerIcon: ({ color }) => <Feather name='book' size={20} color={color} />,
				}}
			/>
			<Drawer.Screen
				name='notas'
				options={{
					drawerLabel: 'Notas',
					drawerIcon: ({ color }) => <Feather name='edit' size={20} color={color} />,
				}}
			/>
			<Drawer.Screen
				name='profile'
				options={{
					drawerLabel: 'Meu Perfil',
					drawerIcon: ({ color }) => <Feather name='user' size={20} color={color} />,
				}}
			/>
		</Drawer>
	)
}
