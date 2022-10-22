<script>
    const links = [
        'todos',
        'calender'
    ]
</script>

{#each links as link}
    <a href={link}>{link.toUpperCase()}</a>
{/each}

<slot />