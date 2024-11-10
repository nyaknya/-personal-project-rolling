interface ApiRequestProps {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: Record<string, unknown>;
}

export default async function apiRequest({
  endpoint,
  method = 'GET',
  body,
}: ApiRequestProps) {
  try {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const url = `${baseUrl}${endpoint}`;

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (method !== 'GET' && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    throw error;
  }
}
