import { getPrueba } from "../services/api.methods"

export const serachProduct = async(valueInput) => {
  const response = await getPrueba();
  return response;
}