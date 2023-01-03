// const withGameLogic = (WrappedComponent) => {
//   return () => <WrappedComponent/>

// const getRandomNumberTo = (to = 8) => Math.floor(Math.random() * to + 1) - 1;

// const matchDiagonalLeft = (arr, value = "X") => {
//   return arr[0] === value && arr[4] === value && arr[8] === value;
// };

// const matchDiagonalRight = (arr, value = "X") => {
//   return arr[2] === value && arr[4] === value && arr[6] === value;
// };

// const matchVertical = (arr, value = "X") => {
//   return (
//     (arr[0] === value && arr[3] === value && arr[6] === value) ||
//     (arr[1] === value && arr[4] === value && arr[7] === value) ||
//     (arr[2] === value && arr[5] === value && arr[8] === value)
//   );
// };

// const matchHorizontal = (arr, value = "X") => {
//   return (
//     (arr[0] === value && arr[1] === value && arr[2] === value) ||
//     (arr[3] === value && arr[4] === value && arr[5] === value) ||
//     (arr[6] === value && arr[7] === value && arr[8] === value)
//   );
// };

// const isWinner = (arr, value) =>
//   matchHorizontal(arr, value) ||
//   matchVertical(arr, value) ||
//   matchDiagonalLeft(arr, value) ||
//   matchDiagonalRight(arr, value);
// }

// export default withGameLogic;