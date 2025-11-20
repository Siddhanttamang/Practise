import React, { useContext } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../contexts/AuthContext";
import { useToast } from "../../hooks/ToastContext";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { ProductResponse } from "../../types/global";
interface SellVegetableProps{
    setProductData:React.Dispatch<React.SetStateAction<ProductResponse[] | null>>
}
const vegetableSchema = z.object({
  name: z.string().min(1, "Name is required"),
  quantity: z.number().positive("Quantity must be positive"),
  price: z.number().positive("Price must be positive"),
  image: z
    .any()
    .refine((file) => file?.length > 0, "Image is required"),
});

type VegetableFormData = z.infer<typeof vegetableSchema>;

const SellVegetable: React.FC = () => {
  const auth = useContext(AuthContext);
  const toast = useToast();
  const {setProductData}=useOutletContext<SellVegetableProps>();
  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VegetableFormData>({
    resolver: zodResolver(vegetableSchema),
  });

  const onSubmit = async (data: VegetableFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("quantity", data.quantity.toString());
    formData.append("price", data.price.toString());
    formData.append("image", (data.image as FileList)[0]);
    try {
      const token = auth?.token;
      const res = await fetch("http://localhost:5000/api/vegetables/", {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      });
      const responseData = await res.json();
      if (!res.ok) throw new Error(responseData.message || "Failed");
      toast.success(`Vegetable ${responseData.name} added successfully!`);
      reset();
      setProductData(prev => prev ? [responseData, ...prev] : [responseData]);
      navigate("/marketplace");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          {...register("name")}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <p className="text-red-500 text-sm mt-1">
          {(errors.name as FieldError)?.message}
        </p>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Quantity
        </label>
        <input
          type="number"
          {...register("quantity", { valueAsNumber: true })}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <p className="text-red-500 text-sm mt-1">
          {(errors.quantity as FieldError)?.message}
        </p>
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price
        </label>
        <input
          type="number"
          {...register("price", { valueAsNumber: true })}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <p className="text-red-500 text-sm mt-1">
          {(errors.price as FieldError)?.message}
        </p>
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image
        </label>
        <input
          type="file"
          {...register("image")}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <p className="text-red-500 text-sm mt-1">
          {(errors.image as FieldError)?.message}
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className=" bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Sell Vegetable
      </button>
    </form>
  );
};

export default SellVegetable;
