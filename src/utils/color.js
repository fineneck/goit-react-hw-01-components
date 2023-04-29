export const getRandomColor = () => {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  const itemColor = {
    backgroundColor: randomColor,
  };

  return itemColor;
};
