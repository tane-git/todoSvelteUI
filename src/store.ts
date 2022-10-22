import { writable } from 'svelte/store';

export type Todo = {
	text: string;
	done: boolean;
};

export const todos = writable([] as Todo[]);
