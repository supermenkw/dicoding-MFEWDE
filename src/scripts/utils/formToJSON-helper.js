
const isValidElement = element => {
    return element.name && element.value;
};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

    // Make sure the element has the required properties and should be added.
    if (isValidElement(element)) {
        data[element.name] = element.value;
    }

    return data;
}, {});

export default formToJSON;