export const filterDataByRole = (data) => {
  const userRole = localStorage.getItem('user_role');
  return data.filter(item => !item.allowedRoles || item.allowedRoles.includes(userRole));
};