<script lang="ts">
  import { onMount } from "svelte"
  import { browser } from "$app/environment"
  import "@unocss/reset/tailwind-compat.css"
  import "uno.css"

  onMount(() => {
    if (browser) {
      console.log("in client")
    }
  })
</script>

<span>test</span>
