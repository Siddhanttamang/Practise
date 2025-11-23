import React from "react";
import { useForm, type FieldError } from "react-hook-form";
import type { ProductResponse } from "../../services/api";
import { useToast } from "../../hooks/ToastContext";
interface CheckoutProps {
  totalPrice: number;
  quantity: number;
  products: { id: number; name: string; quantity: number }[];
  
}

interface CheckoutFormData {
  name: string;
  email: string;
  contact: string;
  address: string;
  products: { id: number; name: string; quantity: number }[];
}



const Checkout: React.FC<CheckoutProps> = ({ totalPrice, quantity,products}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormData>();
  const toast=useToast();

  const onSubmit = (data: CheckoutFormData) => {
  const formDataWithProducts = {
    ...data,
    totalPrice:totalPrice,
    totalQuantity:quantity,
    products: products
  };

  console.log("Checkout data:", formDataWithProducts);
  toast.success("Your Order was placed successfully!");
  reset();

};

  return (
    <div className="w-full p-6 border rounded shadow-md bg-white ">
      <h2 className="text-xl font-semibold mb-2">Checkout Summary</h2>

      <div className="flex justify-between">
        <span>Total Items:</span>
        <span>{quantity}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Total Price:</span>
        <span>Rs. {totalPrice.toFixed(2)}</span>
      </div>

      <form className="space-y-4"onSubmit={handleSubmit(onSubmit)}>
       
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          <p className="text-red-500 text-sm mt-1">{(errors.name as FieldError)?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <p className="text-red-500 text-sm mt-1">{(errors.email as FieldError)?.message}</p>
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
          <input
            type="tel"
            {...register("contact", { required: "Contact is required" })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your contact number"
          />
          <p className="text-red-500 text-sm mt-1">{(errors.contact as FieldError)?.message}</p>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
          <p className="text-red-500 text-sm mt-1">{(errors.address as FieldError)?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
