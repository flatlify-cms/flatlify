const SUPPORTED_RULES = {
  required: 'required',
  maxLength: 'maxLength',
};

export const getValidation = config => {
  return value => {
    const allRules = Object.values(SUPPORTED_RULES).filter(rule => config[rule]);

    for (let i = 0; i < allRules.length; i++) {
      const rule = allRules[i];
      const ruleValue = config[rule];
      const error = validationRules[rule](value, ruleValue);

      if (error) {
        return error;
      }
    }
  };
};

export const validationRules = {
  [SUPPORTED_RULES.required]: value => {
    return !value ? 'Field is required' : undefined;
  },
  [SUPPORTED_RULES.maxLength]: (value, maxLengthValue) => {
    const maxLength = parseInt(maxLengthValue);
    return value && value.length > maxLength ? `Max length is ${maxLength}` : undefined;
  },
};
