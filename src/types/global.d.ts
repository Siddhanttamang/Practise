export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  address: string;
  contact: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  user?: User;
}

export interface WeatherRequest {
  city: string;
}

export interface WeatherResponse {
  city: string;
  temperature: number;
}

export interface ProductResponse {
  filter: any;
  id: number;
  isAddedToCart: boolean;
  name: string;
  quantity: number;
  price: number;
  image_url: string;
  created_at: string;
  user_name: string;
  user_address: string;
  user_contact: number;
}

export interface Vegetable {
  id: number;
  name: string;
  price: string;
  updated_at: string;
  created_at: string;
}

export interface VegetableResponse {
  data: Vegetable[];
  success: string;
}