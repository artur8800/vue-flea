export default {
  bind(el, { value }) {
    M.Tooltip.init(el, { html: value });
  },
  unbind(el) {
    const tooltip = M.Tooltip.getInstance(el);

    if (tooltip && tooltip.destroy) {
      console.log("destroyed");
      tooltip.destroy();
    }
  }
};
