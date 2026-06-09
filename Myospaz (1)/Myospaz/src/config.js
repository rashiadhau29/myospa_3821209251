const DEFAULT_LOCAL_API = 'http://localhost:5000/';
const DEFAULT_PROD_API = 'https://myospaz.in/';

const isLocalHost =
	typeof window !== 'undefined' &&
	(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL;
const selectedBaseUrl = configuredBaseUrl || (isLocalHost ? DEFAULT_LOCAL_API : DEFAULT_PROD_API);

export const BASE_URL = selectedBaseUrl.endsWith('/') ? selectedBaseUrl : `${selectedBaseUrl}/`;