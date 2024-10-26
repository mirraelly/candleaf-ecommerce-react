import * as yup from "yup";

export const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .trim()
    .transform((value) => value.replace(/\D/g, ""))
    .required("Card Number is required")
    .matches(/^\d{16}$/, "Card Number must be 16 digits"),
  holderName: yup.string().required("Holder Name is required"),
  expiration: yup
    .string()
    .required("Expiration date is required")
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiration date"),
  cvv: yup
    .string()
    .required("CVV is required")
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});
