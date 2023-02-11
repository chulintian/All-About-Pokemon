<template>
    <div>
        <div style="background-color:#3B4CCA;">
            <div class="d-flex justify-content-center pt-5 text-white p-4">
                <h2>Want to find out more about Pokemon?</h2>
            </div>
            <div class="p-4 text-white">
                <div class="mb-3">
                    <!-- dropdown with categories -->
                    <label for="categoriesDropdown" class="form-label">Select a category</label>
                    <select v-model="selectedCategoryURL" class="form-control" id="categoriesDropdown">
                        <option v-for="(value, key, index) in categories" :key="index" :value="value">
                            {{ key }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <!-- search field for users to search within the chosen category-->
                    <label for="searchBar" class="form-label">Search something</label>
                    <input type="text" v-model="searchInput" class="form-control" id="SearchBar">
                </div>
                <div class="mb-3 d-flex justify-content-center">
                    <button type="submit" class="btn btn-warning text-white" @click="search()">Search</button>
                </div>
            </div>

            <!--if there is any error-->
            <div class="text-center" v-if="errorMsg != ''" style="color: red">
                {{ errorMsg }}
            </div>
        </div>

        <!--RESULTS-->
        <div class="p-3">

            <!--if user selected a category-->
            <div v-if="selectedCategoryURL != ''">
                <!-- display result in a list-->
                
                    <div v-if="buttonClicked">
                    
                        <!--if user did NOT indicate a specific search item in search bar -->
                        <div v-if="searchInput ==''">
                            <p>
                                <b>Number of items in this category: </b>{{ count }}
                            </p>
                            
                            <p>
                                <b>Here are the items (showing a maximum of 20): </b>
                                <ul>
                                    <li v-for="(value, key, index) in items" :key="index">
                                        {{ value}}
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                
                <!--if user selected a category and typed in something in search bar-->
                <div v-else>
                    <p v-for="(value1, key1, index1) in results" :key="index1">
                        <b>{{ key1 }}</b>
                        <ul>
                            <li v-if="typeof value1 != 'object'">
                                {{ value1 }}
                            </li>
                            <li v-else v-for="(value2, key2, index2) in value1" :key="index2">
                                {{ key2 }}
                                <ul>
                                    <li v-if="typeof value2 != 'object'">
                                        {{ value2 }}
                                    </li>
                                    <li v-else v-for="(value3, key3, index3) in value2" :key="index3">
                                        {{ key3 }}
                                        <ul>
                                            <li v-if="typeof value3 !='object'">
                                                {{ value3 }}
                                            </li>
                                            <li v-else v-for="(value4, key4, index4) in value3" :key="index4">
                                                {{ key4 }}
                                                <ul>
                                                    <li v-if="typeof value4 !='object'">
                                                        {{ value4 }}
                                                    </li>
                                                    <li v-else v-for="(value5, key5, index5) in value4" :key="index5">
                                                        <ul>
                                                            {{ key5 }}
                                                            <li v-if="(typeof value5 !='object')">
                                                                {{ value5 }}
                                                            </li>
                                                            <li v-else v-for="(value6, key6, index6) in value5" :key="index6">
                                                                {{ key6 }}
                                                                <ul>
                                                                    <li>{{ value6 }}</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'FindPokemon',
    components: {
    },

    data(){
        return {
            searchInput: "",
            count: 0,
            items:[],
            categories: {},
            selectedCategoryURL: "",
            buttonClicked: false,
            errorMsg: "",
            results:{}

        }
    },

    created() { 
        //get categories
        axios.get('https://pokeapi.co/api/v2', {
        })
        .then(
            response => { 
                this.categories = response.data;
        })
        .catch(
            error => { 
                console.log(error.message) 
        })
    },

    methods: {

        search(){
            if (this.selectedCategoryURL ==""){
                this.errorMsg = "You have not selected a category. Please select one."
            }
            if(this.searchInput == "" && this.selectedCategoryURL !=""){
                this.getResults1();
            }
            if(this.searchInput != "" && this.selectedCategoryURL !=""){
                this.getResults2()
            }
        },
        
        //get information based on user inputs
        async getResults1() {
            try {
                const response = await axios.get(this.selectedCategoryURL);
                this.buttonClicked = true;
                this.count = response.data.count;
                for (let i = 0; i < this.count; i++) {
                this.items.push(response.data.results[i]["name"]);
                }
            } catch (error) {
                console.log(error.message);
            }
        },

        async getResults2() {
            try {
                this.searchInput = this.searchInput.replace(" ", "-");
                var url = this.selectedCategoryURL + this.searchInput;
                const response = await axios.get(url);
                    console.log(response.data);
                    this.results = response.data;
                    console.log(this.results);
            } catch (error) {
                console.log(error.message);
                this.errorMsg = "No results found. Please search again.";
            }
        }

    }
}
</script>

<style scoped>
</style>
