import { shallowMount } from "@vue/test-utils";
import LandingPage from "../../src/views/LandingPage.vue";

describe("LandingPage", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(LandingPage);
    expect(wrapper.element).toMatchSnapshot();
  });
});
