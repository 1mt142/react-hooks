const bdCustomer = () => {
  let data = [];
  // let amount = Math.floor(Math.random() * 9);

  for (let i = 0; i <= 100; i++) {
    data.push({
      first_name: `First Name${i}`,
      last_name: `Last Name${i}`,
      email: `abc${i}@gmail.com`,
      address: `Road${i},Street${i},Dhaka,Bangladesh`,
      zipCode: `00${i}-${i}-${i}`,
      amount: `0${i}`,
      total_amount: `${i}00`,
    });
  }
  return data;
};
export default bdCustomer;
