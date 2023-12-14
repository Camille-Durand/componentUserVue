<template>
    <div class="container">
        <ul class="list-group">
            <h2 class="list-group-item">Nom: {{ nom }}</h2>
            <h3 class="list-group-item">Age: {{ age }} ans</h3>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        nom: {
            type:String
        },
        age: {
            type:Number
        },
    },
    emits: ['data-user']
}

</script>