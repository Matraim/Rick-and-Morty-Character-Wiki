export const userStatusColor = (status) => {
  switch (status) {
    case 'Alive':
      return 'green';
    case 'Dead':
      return 'red';
    default:
      return '#6c757d';
  }
};
