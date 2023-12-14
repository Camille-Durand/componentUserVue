<template>
    <div class="container">
        <h1 class="text-center">componentUserVue</h1>
        <ul class="list-group">
            <active-user :nom="nom" :age="age"></active-user>
            <user-data @data-user="majData"></user-data>
        </ul>
    </div>
</template>

<script>
export default{
  data(){
    return {
            nom: 'Hello World',
            age: 0
    }
  },
    methods: {
        majData(nom, age) {
                this.nom = nom;
                this.age = age;
        },
    }
}

</script>