/* Helpers functions */
// Checks that an element has a non-empty `name` and `value` property.
const isValidElement = element => {
  return element.name && element.value;
};
// Checks if an element’s value can be saved (e.g. not an unselected checkbox).
const isValidValue = element => {
  return !["checkbox", "radio"].includes(element.type) || element.checked;
};
// Checks if an input is a checkbox, because checkboxes allow multiple values.
const isCheckbox = element => element.type === "checkbox";
// Checks if an input is a `select` with the `multiple` attribute.
const isMultiSelect = element => element.options && element.multiple;
// Convert form elements to JSON data
const formToJSON = elements =>
  [].reduce.call(
    elements,
    (data, element) => {
      if (isValidElement(element) && isValidValue(element)) {
        if (isCheckbox(element)) {
          data[element.name] = (data[element.name] || []).concat(element.value);
        } else {
          data[element.name] = element.value;
        }
      }
      return data;
    },
    {}
  );

const submitForm = event => {
  event.preventDefault();
  const form = document.getElementById("creation-deloge");
  console.log(form);
  const data = formToJSON(form);
  console.log(data);
  fetch("/login", {
    method: "POST",
    body: form
  });
};
