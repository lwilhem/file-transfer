<script setup lang="ts">
const { data, status, error, execute } = await useFetch("/api/warframes", {
  method: "get",
  immediate: false,
})

async function fetchWarframes(_e: Event) {
  await execute()

  if (status.value === "success") {
    console.log(data.value?.warframes)
  }
}
</script>

<template>
  <section>
    <span v-if="error">Error</span>
    <span v-else class="uppercase text-red-400 underline">Hello World !</span>
    <button @click="fetchWarframes">
      Clieck Me
    </button>
  </section>
</template>
