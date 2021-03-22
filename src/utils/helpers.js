export const renameCategory = (category) => {
    return `${category[0].toUpperCase()}${category.replace(/_/g, ' ').substr(1)}`;

};
