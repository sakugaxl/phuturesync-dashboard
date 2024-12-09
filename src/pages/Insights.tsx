import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  DollarSign, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import InsightCard from '../components/insights/InsightCard';
import PerformanceChart from '../components/insights/PerformanceChart';
import { api } from '../services/api';

export default function Insights() {
  const [insights, setInsights] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [isMarketingVisible, setIsMarketingVisible] = useState(true);
  const [isGrowthVisible, setIsGrowthVisible] = useState(true);
  const [isCustomerVisible, setIsCustomerVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await api.fetchInsightsData();
        setInsights(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching insights:', err);
        setError('Unable to load insights data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading insights...</p>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  const marketingInsights = insights.filter(insight => insight?.category === 'Marketing');
  const growthInsights = insights.filter(insight => insight?.category === 'Growth');
  const customerInsights = insights.filter(insight => insight?.category === 'Customer Behavior');

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">AI Insights</h1>
        <p className="mt-2 text-gray-600">AI-powered recommendations to optimize your business</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {marketingInsights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {growthInsights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {customerInsights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <PerformanceChart />
      </div>
    </>
  );
}
