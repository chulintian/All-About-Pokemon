import { shallowMount } from '@vue/test-utils'
import FindPokemon from '../../src/views/FindPokemon.vue'
const axios = require('axios');

describe('FindPokemon', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(FindPokemon)
    })

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('has a categories dropdown', () => {
        const dropdown = wrapper.find('#categoriesDropdown')
        expect(dropdown.exists()).toBe(true)
    })

    it('updates selectedCategoryURL when a category is selected', () => {
        const dropdown = wrapper.find('#categoriesDropdown')
        dropdown.setValue('value')
        expect(wrapper.vm.selectedCategoryURL).toBe('value')
    })

    it('has a search bar', () => {
        const searchBar = wrapper.find('#SearchBar')
        expect(searchBar.exists()).toBe(true)
    })

    it('updates searchInput when text is entered in the search bar', () => {
        const searchBar = wrapper.find('#SearchBar')
        searchBar.setValue('test')
        expect(wrapper.vm.searchInput).toBe('test')
    })

    it('displays error message when errorMsg is not an empty string', () => {
        wrapper.setData({ errorMsg: 'Error' })
        const errorMsg = wrapper.find('.error-message')
        expect(errorMsg.exists()).toBe(true)
        expect(errorMsg.text()).toBe('Error')
    })

    it('displays result section when selectedCategoryURL is not an empty string', () => {
        wrapper.setData({ selectedCategoryURL: 'value' })
        const resultSection = wrapper.find('.result-section')
        expect(resultSection.exists()).toBe(true)
    })

    it('calls the search method when the search button is clicked', () => {
        const searchSpy = jest.spyOn(wrapper.vm, 'search')
        wrapper.vm.search()
        expect(searchSpy).toHaveBeenCalled()
    })


    //test async calls to api

describe('async call', () => {
    it('fetches data from an API', async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/berry/cheri');
        const data = response.data;
        expect(data).toBe(
            {
                "firmness": {
                "name": "soft",
                "url": "https://pokeapi.co/api/v2/berry-firmness/2/"
                },
                "flavors": [
                {
                    "flavor": {
                    "name": "spicy",
                    "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
                    },
                    "potency": 10
                },
                {
                    "flavor": {
                    "name": "dry",
                    "url": "https://pokeapi.co/api/v2/berry-flavor/2/"
                    },
                    "potency": 0
                },
                {
                    "flavor": {
                    "name": "sweet",
                    "url": "https://pokeapi.co/api/v2/berry-flavor/3/"
                    },
                    "potency": 0
                },
                {
                    "flavor": {
                    "name": "bitter",
                    "url": "https://pokeapi.co/api/v2/berry-flavor/4/"
                    },
                    "potency": 0
                },
                {
                    "flavor": {
                    "name": "sour",
                    "url": "https://pokeapi.co/api/v2/berry-flavor/5/"
                    },
                    "potency": 0
                }
                ],
                "growth_time": 3,
                "id": 1,
                "item": {
                "name": "cheri-berry",
                "url": "https://pokeapi.co/api/v2/item/126/"
                },
                "max_harvest": 5,
                "name": "cheri",
                "natural_gift_power": 60,
                "natural_gift_type": {
                "name": "fire",
                "url": "https://pokeapi.co/api/v2/type/10/"
                },
                "size": 20,
                "smoothness": 25,
                "soil_dryness": 15
            }
        );
    });
});
})
