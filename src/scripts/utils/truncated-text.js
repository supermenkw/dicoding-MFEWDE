const truncateText = (string, maxLength = 130) => {
    if (string.length > maxLength) {
        // eslint-disable-next-line no-param-reassign
        string = `${string.substr(0, maxLength)}...`;
    }

    return string;
};

export default truncateText;
