<script lang="ts">
  import { onMount } from "svelte"
  import { invalidate } from "$app/navigation"
  import "@unocss/reset/tailwind.css"
  import "uno.css"

  export let data

  let { supabase, session } = data
  $: ({ supabase, session } = data)

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth")
      }
    })

    return () => data.subscription.unsubscribe()
  })

</script>

<svelte:head>
  <title>Fileshare - Web RTC or long term</title>
</svelte:head>

<main class="min-h-screen w-full flex flex-col">
  <slot />
</main>
