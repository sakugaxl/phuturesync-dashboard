import { useState } from 'react';
import {
  Eye,
  Heart,
  Users,
  DollarSign,
  BarChart3,
  Settings,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface Campaign {
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

interface CampaignListProps {
  platform: string;
  status: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    name: 'Summer Sale 2024',
    platform: 'facebook',
    status: 'active',
    reach: '12.5K',
    engagement: '3.2K',
    conversions: 245,
    spend: 'R 2,500',
    roi: '2.4x',
    description: 'Seasonal promotion targeting summer fashion and accessories',
    startDate: '2024-03-01',
    endDate: '2024-03-31',
  },
  {
    id: 2,
    name: 'Product Launch',
    platform: 'instagram',
    status: 'active',
    reach: '8.7K',
    engagement: '1.8K',
    conversions: 156,
    spend: 'R 1,800',
    roi: '1.8x',
    description: 'New product line introduction campaign',
    startDate: '2024-03-10',
    endDate: '2024-04-10',
  },
  {
    id: 3,
    name: 'Brand Awareness',
    platform: 'linkedin',
    status: 'active',
    reach: '15.3K',
    engagement: '2.5K',
    conversions: 189,
    spend: 'R 3,200',
    roi: '2.1x',
    description: 'Corporate branding and thought leadership campaign',
    startDate: '2024-02-15',
    endDate: '2024-03-15',
  },
];

const platformColors: Record<string, string> = {
  facebook: 'border-blue-500',
  instagram: 'border-purple-500',
  linkedin: 'border-blue-700',
  tiktok: 'border-pink-500',
};

const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const getROIColor = (roi: string) => {
    const value = parseFloat(roi);
    return value >= 2 ? 'text-green-600' : value >= 1 ? 'text-yellow-600' : 'text-red-600';
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border-l-4 ${platformColors[campaign.platform]} mb-4 transition-all`}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{campaign.platform}</p>
          </div>
          <div>
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                campaign.status === 'active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {campaign.status === 'active' ? 'Active' : 'Paused'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Eye size={16} className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Reach</p>
              <p className="font-semibold">{campaign.reach}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Heart size={16} className="text-pink-500" />
            <div>
              <p className="text-sm text-gray-500">Engagement</p>
              <p className="font-semibold">{campaign.engagement}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={16} className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Conversions</p>
              <p className="font-semibold">{campaign.conversions}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign size={16} className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500">ROI</p>
              <p className={`font-semibold ${getROIColor(campaign.roi)}`}>{campaign.roi}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg" title="View Analytics">
              <BarChart3 size={18} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg" title="Settings">
              <Settings size={18} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg" title="View Campaign">
              <ExternalLink size={18} className="text-gray-500" />
            </button>
          </div>
          <button
            onClick={toggleExpand}
            className="flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={16} />
                <span className="ml-1">Collapse</span>
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                <span className="ml-1">Expand</span>
              </>
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4">
            <p className="text-gray-600 mb-2">{campaign.description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Start:</span> {campaign.startDate}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">End:</span> {campaign.endDate}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function CampaignList({ platform, status }: CampaignListProps) {
  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      (platform === 'all' || campaign.platform === platform) &&
      (status === 'all' || campaign.status === status)
  );

  return (
    <div className="space-y-4">
      {filteredCampaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
}
