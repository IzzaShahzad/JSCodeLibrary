function capitalizeFirstLetter(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeFirstLetter("izza shahzad"));
console.log(capitalizeFirstLetter("information technology")); 