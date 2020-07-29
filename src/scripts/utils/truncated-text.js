const truncateText = (string, maxLength = 130) => {
    if (string.length > maxLength) {
        string = `${string.substr(0, maxLength)}...`;
    }

    return string;
}

export default truncateText;