const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.phuturesync.co.za'
  : 'http://localhost:3000'; // or whatever your local development port is

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  // Function to fetch data with authorization token
  private async fetchWithAuth(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add error handling and retry logic
    try {
      const response = await fetch(url, {
        ...options,
        headers,
        credentials: 'include', // Important for cookies
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Fetch financial data
  async fetchFinancialData(timeframe: string): Promise<{ financial: any[]; expenses: any[] }> {
    try {
      const response = await this.fetchWithAuth(`/financial?timeframe=${timeframe}`);
      const data = await response.json();
      return {
        financial: data.financial,
        expenses: data.expenses,
      };
    } catch (error) {
      console.error('Error fetching financial data:', error);
      throw new Error('Failed to fetch financial data');
    }
  }

  // Fetch analytics data
  async getAnalytics(): Promise<AnalyticsResponse> {
    try {
      const response = await this.fetchWithAuth('/analytics');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching analytics:', error);
      throw new Error('Failed to fetch analytics data');
    }
  }

  // Fetch marketing campaigns data
  async getCampaigns(): Promise<Campaign[]> {
    try {
      const response = await this.fetchWithAuth('/campaigns');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      throw new Error('Failed to fetch campaigns');
    }
  }

  // Fetch Instagram insights
  async getSocialInsights(): Promise<any> {
    try {
      const response = await this.fetchWithAuth(
        `/auth/instagram/insights?metric=impressions,reach,profile_views&period=day&metric_type=total_value`
      );
      const data = await response.json();
      return {
        impressions: data.data.find((metric: any) => metric.name === 'impressions')?.total_value?.value || 0,
        reach: data.data.find((metric: any) => metric.name === 'reach')?.total_value?.value || 0,
        profile_views: data.data.find((metric: any) => metric.name === 'profile_views')?.total_value?.value || 0,
      };
    } catch (error) {
      console.error('Error fetching social insights:', error);
      throw new Error('Failed to fetch social insights');
    }
  }

  // Add fetchMarketingData as a class method
  async fetchMarketingData(timeframe: string): Promise<any> {
    try {
      const response = await this.fetchWithAuth(`/marketing?timeframe=${timeframe}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching marketing data:', error);
      throw new Error('Failed to fetch marketing data');
    }
  }

  // Add fetchInsightsData as a class method
  async fetchInsightsData(): Promise<any> {
    try {
      const response = await this.fetchWithAuth('/insights');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching insights data:', error);
      throw new Error('Failed to fetch insights data');
    }
  }
}

// Export the ApiService instance
export const api = new ApiService();

export const fetchAnalyticsData = async () => {
  return await api.getAnalytics();
};

// Export the existing fetchFinancialData function
export const fetchFinancialData = async (timeframe: string) => {
  return await api.fetchFinancialData(timeframe);
};

// Export the fetchMarketingData function
export const fetchMarketingData = async (timeframe: string) => {
  return await api.fetchMarketingData(timeframe);
};

// Export the fetchInsightsData function
export const fetchInsightsData = async () => {
  return await api.fetchInsightsData();
};

// Interfaces for data structure
export interface AnalyticsResponse {
  metrics: {
    totalRevenue: number;
    activeCampaigns: number;
    newClients: number;
    engagementRate: number;
  };
  trends: {
    revenue: { value: number; isPositive: boolean };
    campaigns: { value: number; isPositive: boolean };
    clients: { value: number; isPositive: boolean };
    engagement: { value: number; isPositive: boolean };
  };
}

export interface Campaign {
  id: number;
  name: string;
  platform: string;
  status: string;
  reach: string;
  engagement: string;
  conversions: number;
  spend: string;
  roi: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export interface SocialInsights {
  followers: number;
  engagement: number;
  posts: number;
  demographics: {
    age: Array<{ range: string; percentage: number }>;
    gender: Array<{ type: string; percentage: number }>;
  };
}

console.log("API Base URL:", API_BASE_URL);
