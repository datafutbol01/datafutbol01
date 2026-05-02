import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from './useAppStore';

describe('useAppStore', () => {
  beforeEach(() => {
    // Limpiar el estado antes de cada prueba
    useAppStore.setState({
      leagueDataCache: {},
      clubDataCache: {},
      activeLeagueTab: 'posiciones'
    });
  });

  it('debería guardar y recuperar datos de la liga', () => {
    const { setLeagueData } = useAppStore.getState();
    setLeagueData('espana', { name: 'La Liga' });
    
    const state = useAppStore.getState();
    expect(state.leagueDataCache['espana']).toEqual({ name: 'La Liga' });
  });

  it('debería actualizar la pestaña activa', () => {
    const { setActiveLeagueTab } = useAppStore.getState();
    setActiveLeagueTab('fixture');
    
    const state = useAppStore.getState();
    expect(state.activeLeagueTab).toBe('fixture');
  });
});
