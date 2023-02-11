import { shallowMount } from "@vue/test-utils";
import History from "../../src/views/History.vue";

describe('History', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallowMount(History);
  });

  it('renders the correct title', () => {
    const title = wrapper.find('h2');
    expect(title.text()).toBe('History of Pokémon');
  });

  it('renders the correct content for origin of Pokémon', () => {
    const origin = wrapper.findAll('div').at(5);
    expect(origin.text()).toContain('To answer the question of who invented Pokémon,');
  });

  it('renders the correct content for Pokémon Card Game', () => {
    const cardGame = wrapper.findAll('div').at(9);
    expect(cardGame.text()).toContain('Soon after the release of the first Pocket Monsters games in Japan,');
  });

  it('renders the correct content for Pokémon on Big and Small Screens', () => {
    const bigSmallScreens = wrapper.findAll('div').at(13);
    expect(bigSmallScreens.text()).toContain('TPokémon has undoubtedly had a huge impact on the popularity of anime around the planet.');
  });

  it('renders the correct content for Pokémon Go', () => {
    const pokemonGo = wrapper.findAll('div').at(17);
    expect(pokemonGo.text()).toContain('Released in 2016, Pokémon Go is yet another example of how the franchise has established cultural trends around the world.');
  });
});
