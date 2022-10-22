<script>
    import { todos } from '../../store'
</script>

{#each $todos as todo}
    <div class="todo">
        <h2>{todo.text}</h2>

        {#if todo.done}
           done 
        {/if}
    </div>
{/each}