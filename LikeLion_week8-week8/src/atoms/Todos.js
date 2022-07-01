import { atom, selector } from 'recoil';

export const toDos = atom({
  key: 'toDoList',
  default: [],
});

export const toDoCounter = selector({
  key: 'toDoCounter',
  get: ({get}) =>{
  const counts = get(toDos);
  return counts.length;
  }
});