import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: 'Mon', reach: 2400, engagement: 1200, conversions: 400 },
  { date: 'Tue', reach: 1398, engagement: 800, conversions: 300 },
  { date: 'Wed', reach: 9800, engagement: 2800, conversions: 900 },
  { date: 'Thu', reach: 3908, engagement: 1800, conversions: 600 },
  { date: 'Fri', reach: 4800, engagement: 2200, conversions: 700 },
  { date: 'Sat', reach: 3800, engagement: 1800, conversions: 500 },
  { date: 'Sun', reach: 4300, engagement: 2100, conversions: 600 },
];

export default function PerformanceChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
            }}
          />
          <Area
            type="monotone"
            dataKey="reach"
            name="Reach"
            stroke="#3B82F6"
            fillOpacity={1}
            fill="url(#colorReach)"
          />
          <Area
            type="monotone"
            dataKey="engagement"
            name="Engagement"
            stroke="#8B5CF6"
            fillOpacity={1}
            fill="url(#colorEngagement)"
          />
          <Area
            type="monotone"
            dataKey="conversions"
            name="Conversions"
            stroke="#10B981"
            fillOpacity={1}
            fill="url(#colorConversions)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
