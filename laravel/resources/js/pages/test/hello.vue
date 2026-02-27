<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

defineProps<{ user: { name: string } }>();
</script>

<template>
    <div>
        <Head title="hola" />
        <h1>Welcome</h1>
        <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>
    </div>
</template>
