<script>
    // import todos from "/src/store.ts"
    import { todos } from "../../store";

	// let todos = [
	// 	{ done: false, text: 'finish Svelte tutorial' },
	// 	{ done: false, text: 'build an app' },
	// 	{ done: false, text: 'world domination' }
	// ];

	function add() {
		$todos.concat({ done: false, text: '' });
	}

	function clear() {
		$todos.filter(t => !t.done);
	}

	$: remaining = $todos.filter(t => !t.done).length;
</script>

<h1>Todos</h1>

{#each $todos as todo}
	<div class:done={todo.done}>
		<input
			type=checkbox
			checked={todo.done}
		>

		<input
			placeholder="What needs to be done?"
			value={todo.text}
		>
	</div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add}>
	Add new
</button>

<button on:click={clear}>
	Clear completed
</button>

<style>
	.done {
		opacity: 0.4;
	}
</style>