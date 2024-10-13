//Function for format currency
export const formatPrice = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};


//Function for automatically format date as "MM/YY"
export const formatDate = (date) => {
    const cleanDate = date.replace(/\D/g, ''); 
    const month = cleanDate.substring(0, 2);   
    const year = cleanDate.substring(2, 4);   

    return `${month}/${year}`;  
  };