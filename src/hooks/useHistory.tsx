import {useEffect, useReducer} from 'react';

const MAX_HISTORY_ENTRY = 10;

type History = {
  data: string;
  id: string;
};

type HistoryAction = {
  type: 'add' | 'setUp';
  newHistoryEntry?: string;
  savedHistory?: History[];
};

const getHistoryFromStorage = () => {
  const savedHistory = localStorage.getItem('calculation-history');
  if (!savedHistory) return [];
  return JSON.parse(savedHistory);
};

const saveHistoryToStorage = (history: History[]) => {
  localStorage.setItem('calculation-history', JSON.stringify(history));
};

const setHistoryReducer = (currentHistory: History[], { type, newHistoryEntry, savedHistory }: HistoryAction) => {
  const newHistory = [...currentHistory];
  switch (type) {
    case 'add': {
      if (!newHistoryEntry) return currentHistory;
      newHistory.unshift({ data: newHistoryEntry, id: `${Date.now()}` });
      if (currentHistory.length > MAX_HISTORY_ENTRY) {
        newHistory.pop();
      }
      saveHistoryToStorage(newHistory);
      return newHistory;
    }
    case 'setUp': {
      if (!savedHistory) return currentHistory;
      return savedHistory;
    }
    default: {
      throw Error('Error while setting up useHistory hook');
    }
  }
};

export const useHistory = (): [History[], any] => {
  const [history, setHistory] = useReducer(setHistoryReducer, [] as History[]);

  useEffect(() => {
    setHistory({ type: 'setUp', savedHistory: getHistoryFromStorage() });
  }, []);

  return [history, setHistory];
};
