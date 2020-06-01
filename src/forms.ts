export const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input');
    let values: {[prop: string]: string} = {}; // the empty obj saves the key values
  
    inputs.forEach(input => {
      values[input.id] = input.value;
    });
    return values;
  };