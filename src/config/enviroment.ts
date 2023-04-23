const { VITE_API_BASE_URL } = import.meta.env;

export const enviroment = {
  API_BASE_URL: VITE_API_BASE_URL || 'https://dev.codeleap.co.uk/careers/',
}