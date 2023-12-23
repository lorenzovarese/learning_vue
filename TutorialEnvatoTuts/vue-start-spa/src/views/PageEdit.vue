<template>
    <!-- edit {{ props.index  }} -->
    edit {{ route.params.index  }}
</template>

<script setup>
// Option 1
//const props = defineProps(['index']);

//Option 2
import { useRoute } from 'vue-router';
const route = useRoute();

</script>