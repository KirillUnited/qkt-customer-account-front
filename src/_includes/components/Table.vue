<template>
    <div class="table">
        <h1>{{title}}</h1>
        <table class="styled-table">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>

            <tr class="active-row" v-for="(listItem, index) in listItems" :key="index">
                <td>{{index}}</td>
                <td>{{listItem}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "My Subscriptions",
                listItems: [
                    "This is the first item",
                    "This is the second",
                    "This is perhaps the third, though who could truly say.",
                ],
            }
        },
    };
</script>
