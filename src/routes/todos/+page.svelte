<script>
    import { todos } from '../../store'

	// let todos = [
	// 	{ done: false, text: 'finish Svelte tutorial' },
	// 	{ done: false, text: 'build an app' },
	// 	{ done: false, text: 'world domination' }
	// ];

	function add() {
		// todos = todos.concat({ done: false, text: '' });
		todos.update(store => [...store, { done: false, text: '' }]);
	}

	// function clear() {
		// todos = todos.filter(t => !t.done);
	// }

	// $: remaining = todos.filter(t => !t.done).length;

    // function handleSubmit(stuff) {
    //     console.log(stuff)
    // }

</script>

<h1>Todos</h1>

<form>
    {#each $todos as todo}
        <div class:done={todo.done}>
            <input
                type=checkbox
                bind:checked={todo.done}
            >

            <input
                placeholder="What needs to be done?"
                bind:value={todo.text}
                name='text'
            >

        </div>
    {/each}

    <!-- <button type='submit'>
    <button on:click|preventDefault={handleSubmit}>
        Submit
    </button>
    -->

</form>

<!-- <p>{remaining} remaining</p> -->

<button on:click={add}>
	Add new
</button>

<!-- <button on:click={clear}>
	Clear completed
</button>
 -->
<style>
	.done {
		opacity: 0.4;
	}
</style>