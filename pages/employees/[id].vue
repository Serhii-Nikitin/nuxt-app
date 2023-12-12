<template>
  <div>Employee {{ id }}</div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  validate: ({ params }) => {
    console.log(params);
    return true;
  },
});
</script>

<style scoped></style>
