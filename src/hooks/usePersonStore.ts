import { create } from 'zustand'

type State = {
	isLogged: boolean
}

type Action = {
	setIsLogged: (isLogged: State['isLogged']) => void
}

// Create your store, which includes both state and (optionally) actions
export const usePersonStore = create<State & Action>(set => ({
	isLogged: false,
	setIsLogged: isLogged => set(() => ({ isLogged })),
}))
