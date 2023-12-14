<template>
    <div class="container">
        <div class="list-group">
            <h3>Formulaire:</h3>
            <input class="form-control form-control-sm" type="text" 
            placeholder="Nom" aria-label=".form-control-sm example"
            v-model="nom">
            <input class="form-control form-control-sm" type="number" 
            placeholder="Age" aria-label=".form-control-sm example"
            v-model="age">
            <button @click="submitData" type="button" class=" m-1 btn btn-outline-success">MAJ des Data</button>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['data-user'],
    data() {
        return {
            nom: '',
            age: ''
        }
    },
    methods: {
            submitData() {
                this.$emit('data-user',this.nom,this.age);
            }
        }
}

</script>