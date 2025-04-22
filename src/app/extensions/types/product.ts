export interface ProductSpecs {
  [key: string]: string | string[] | undefined;
}

export interface Product {
  name: string;
  model_type: string;
  images: string[];
  visual_specs: ProductSpecs;
  hardware_specs: ProductSpecs;
  software_specs: ProductSpecs;
  camera_specs: ProductSpecs;
}

export type ProductState = Product | null;
