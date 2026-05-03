import { create } from 'zustand';

export const useAppStore = create((set) => ({
  // Caché de Ligas y Clubes
  leagueDataCache: {},
  clubDataCache: {},
  
  // Estado de navegación
  activeLeagueTab: 'clubes', // o 'actualidad', 'temporadas', etc.
  
  // Acciones
  setLeagueData: (leagueId, data) => set((state) => ({
    leagueDataCache: { ...state.leagueDataCache, [leagueId]: data }
  })),
  
  setClubData: (clubId, data) => set((state) => ({
    clubDataCache: { ...state.clubDataCache, [clubId]: data }
  })),
  
  setActiveLeagueTab: (tab) => set({ activeLeagueTab: tab }),
}));
