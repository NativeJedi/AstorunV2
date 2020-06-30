export function RequiredRule(label = 'validation.required') {
  return (value) => {
    if (!value) {
      return this.$t(label);
    }

    return true;
  };
}
