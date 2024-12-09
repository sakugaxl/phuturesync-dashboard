import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign, 
  // ChevronDown, 
  // ChevronUp 
} from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import CampaignList from '../components/marketing/CampaignList';
import MarketingFilters from '../components/marketing/MarketingFilters';
import PerformanceChart from '../components/marketing/PerformanceChart';
import TopPerformers from '../components/marketing/TopPerformers';
import { api } from '../services/api.ts';

export default function Marketing() {
  const [timeframe, setTimeframe] = useState('monthly');
  const [platform, setPlatform] = useState('all');
  const [status, setStatus] = useState('all');
  const [isPerformanceVisible, setIsPerformanceVisible] = useState(true);
  const [isTopPerformersVisible, setIsTopPerformersVisible] = useState(true);
  const [isActiveCampaignsVisible, setIsActiveCampaignsVisible] = useState(true);

  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await api.fetchMarketingData(timeframe);
        setDashboardData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching marketing data:', err);
        setError('Failed to load marketing data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeframe]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading marketing data...</p>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-0 z-10 bg-gray-50 pb-4">
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Marketing Campaigns</h1>
              <p className="mt-2 text-gray-600">
                Manage, track, and optimize your marketing campaigns across all platforms.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="btn btn-primary">Create Campaign</button>
            </div>
          </div>
        </header>

        <MarketingFilters
          timeframe={timeframe}
          setTimeframe={setTimeframe}
          platform={platform}
          setPlatform={setPlatform}
          status={status}
          setStatus={setStatus}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Active Campaigns"
          value={dashboardData?.activeCampaigns ?? 0}
          icon={<TrendingUp className="text-blue-500" />}
          trend={{ value: dashboardData?.trends?.campaigns?.value ?? 0, isPositive: dashboardData?.trends?.campaigns?.isPositive ?? true }}
        />
        <DashboardCard
          title="Total Reach"
          value={dashboardData?.totalReach ?? 0}
          icon={<Target className="text-purple-500" />}
          trend={{ value: dashboardData?.trends?.reach?.value ?? 0, isPositive: dashboardData?.trends?.reach?.isPositive ?? true }}
        />
        <DashboardCard
          title="Conversions"
          value={dashboardData?.conversions ?? 0}
          icon={<Users className="text-green-500" />}
          trend={{ value: dashboardData?.trends?.conversions?.value ?? 0, isPositive: dashboardData?.trends?.conversions?.isPositive ?? true }}
        />
        <DashboardCard
          title="Ad Spend"
          value={dashboardData?.adSpend ?? 0}
          icon={<DollarSign className="text-orange-500" />}
          trend={{ value: dashboardData?.trends?.adSpend?.value ?? 0, isPositive: dashboardData?.trends?.adSpend?.isPositive ?? true }}
        />
      </div>
    </>
  );
}
