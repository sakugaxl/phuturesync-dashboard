import{j as e}from"./index-B40TBc09.js";import{r as n}from"./react-vendor-D6gW23l2.js";import{D as d}from"./DashboardCard-DPsvOhnI.js";import{E as S,H as z,U as j,D as u,h as f,a as P,i as E,e as x,f as m,j as F,F as b,T as N,k as R}from"./icon-vendor-CjJADx1M.js";import{R as D,A,C as T,X as O,Y as B,T as I,a as p}from"./chart-vendor-D8Iq3d2I.js";const K=[{id:1,name:"Summer Sale 2024",platform:"facebook",status:"active",reach:"12.5K",engagement:"3.2K",conversions:245,spend:"R 2,500",roi:"2.4x",description:"Seasonal promotion targeting summer fashion and accessories",startDate:"2024-03-01",endDate:"2024-03-31"},{id:2,name:"Product Launch",platform:"instagram",status:"active",reach:"8.7K",engagement:"1.8K",conversions:156,spend:"R 1,800",roi:"1.8x",description:"New product line introduction campaign",startDate:"2024-03-10",endDate:"2024-04-10"},{id:3,name:"Brand Awareness",platform:"linkedin",status:"active",reach:"15.3K",engagement:"2.5K",conversions:189,spend:"R 3,200",roi:"2.1x",description:"Corporate branding and thought leadership campaign",startDate:"2024-02-15",endDate:"2024-03-15"}],V={facebook:"border-blue-500",instagram:"border-purple-500",linkedin:"border-blue-700",tiktok:"border-pink-500"},$=({campaign:t})=>{const[r,s]=n.useState(!1),i=()=>s(!r),c=o=>{const a=parseFloat(o);return a>=2?"text-green-600":a>=1?"text-yellow-600":"text-red-600"};return e.jsx("div",{className:`bg-white rounded-lg shadow-sm border-l-4 ${V[t.platform]} mb-4 transition-all`,children:e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:t.name}),e.jsx("p",{className:"text-sm text-gray-500 capitalize",children:t.platform})]}),e.jsx("div",{children:e.jsx("button",{className:`px-3 py-1 rounded-full text-sm font-medium ${t.status==="active"?"bg-green-100 text-green-700":"bg-gray-100 text-gray-700"}`,children:t.status==="active"?"Active":"Paused"})})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(S,{size:16,className:"text-blue-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Reach"}),e.jsx("p",{className:"font-semibold",children:t.reach})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(z,{size:16,className:"text-pink-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Engagement"}),e.jsx("p",{className:"font-semibold",children:t.engagement})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(j,{size:16,className:"text-purple-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Conversions"}),e.jsx("p",{className:"font-semibold",children:t.conversions})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(u,{size:16,className:"text-green-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"ROI"}),e.jsx("p",{className:`font-semibold ${c(t.roi)}`,children:t.roi})]})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{className:"p-2 hover:bg-gray-100 rounded-lg",title:"View Analytics",children:e.jsx(f,{size:18,className:"text-gray-500"})}),e.jsx("button",{className:"p-2 hover:bg-gray-100 rounded-lg",title:"Settings",children:e.jsx(P,{size:18,className:"text-gray-500"})}),e.jsx("button",{className:"p-2 hover:bg-gray-100 rounded-lg",title:"View Campaign",children:e.jsx(E,{size:18,className:"text-gray-500"})})]}),e.jsx("button",{onClick:i,className:"flex items-center text-sm text-gray-500 hover:text-gray-700",children:r?e.jsxs(e.Fragment,{children:[e.jsx(x,{size:16}),e.jsx("span",{className:"ml-1",children:"Collapse"})]}):e.jsxs(e.Fragment,{children:[e.jsx(m,{size:16}),e.jsx("span",{className:"ml-1",children:"Expand"})]})})]}),r&&e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-gray-600 mb-2",children:t.description}),e.jsxs("p",{className:"text-sm text-gray-500",children:[e.jsx("span",{className:"font-medium",children:"Start:"})," ",t.startDate]}),e.jsxs("p",{className:"text-sm text-gray-500",children:[e.jsx("span",{className:"font-medium",children:"End:"})," ",t.endDate]})]})]})})};function L({platform:t,status:r}){const s=K.filter(i=>(t==="all"||i.platform===t)&&(r==="all"||i.status===r));return e.jsx("div",{className:"space-y-4",children:s.map(i=>e.jsx($,{campaign:i},i.id))})}const M=[{value:"all",label:"All Platforms"},{value:"facebook",label:"Facebook"},{value:"instagram",label:"Instagram"},{value:"linkedin",label:"LinkedIn"},{value:"tiktok",label:"TikTok"},{value:"google",label:"Google Ads"}],G=[{value:"all",label:"All Statuses"},{value:"active",label:"Active"},{value:"paused",label:"Paused"},{value:"completed",label:"Completed"}],U=[{value:"daily",label:"24 Hours"},{value:"weekly",label:"7 Days"},{value:"monthly",label:"30 Days"},{value:"yearly",label:"12 Months"}];function H({timeframe:t,setTimeframe:r,platform:s,setPlatform:i,status:c,setStatus:o}){return e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(F,{size:20,className:"text-gray-500"}),e.jsx("select",{value:t,onChange:a=>r(a.target.value),className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",children:U.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(b,{size:20,className:"text-gray-500"}),e.jsx("select",{value:s,onChange:a=>i(a.target.value),className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",children:M.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx("select",{value:c,onChange:a=>o(a.target.value),className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",children:G.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})})]})}const X=[{date:"Mon",reach:2400,engagement:1200,conversions:400},{date:"Tue",reach:1398,engagement:800,conversions:300},{date:"Wed",reach:9800,engagement:2800,conversions:900},{date:"Thu",reach:3908,engagement:1800,conversions:600},{date:"Fri",reach:4800,engagement:2200,conversions:700},{date:"Sat",reach:3800,engagement:1800,conversions:500},{date:"Sun",reach:4300,engagement:2100,conversions:600}];function Y(){return e.jsx("div",{className:"h-[300px]",children:e.jsx(D,{width:"100%",height:"100%",children:e.jsxs(A,{data:X,margin:{top:10,right:30,left:0,bottom:0},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"colorReach",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#3B82F6",stopOpacity:.1}),e.jsx("stop",{offset:"95%",stopColor:"#3B82F6",stopOpacity:0})]}),e.jsxs("linearGradient",{id:"colorEngagement",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#8B5CF6",stopOpacity:.1}),e.jsx("stop",{offset:"95%",stopColor:"#8B5CF6",stopOpacity:0})]}),e.jsxs("linearGradient",{id:"colorConversions",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#10B981",stopOpacity:.1}),e.jsx("stop",{offset:"95%",stopColor:"#10B981",stopOpacity:0})]})]}),e.jsx(T,{strokeDasharray:"3 3",vertical:!1}),e.jsx(O,{dataKey:"date"}),e.jsx(B,{}),e.jsx(I,{contentStyle:{backgroundColor:"white",borderRadius:"8px",border:"1px solid #E5E7EB"}}),e.jsx(p,{type:"monotone",dataKey:"reach",name:"Reach",stroke:"#3B82F6",fillOpacity:1,fill:"url(#colorReach)"}),e.jsx(p,{type:"monotone",dataKey:"engagement",name:"Engagement",stroke:"#8B5CF6",fillOpacity:1,fill:"url(#colorEngagement)"}),e.jsx(p,{type:"monotone",dataKey:"conversions",name:"Conversions",stroke:"#10B981",fillOpacity:1,fill:"url(#colorConversions)"})]})})})}const W=[{id:1,title:"Summer Collection Launch",platform:"Instagram",reach:15200,engagement:2800,roi:3.2},{id:2,title:"Flash Sale Announcement",platform:"Facebook",reach:12500,engagement:1900,roi:2.8}];function q(){const t=s=>s>=1e3?`${(s/1e3).toFixed(1)}K`:s.toString(),r=s=>s>=2?"text-green-600":s>=1?"text-yellow-600":"text-red-600";return e.jsx("div",{className:"space-y-4",children:W.map(s=>e.jsxs("div",{className:"p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900",children:s.title}),e.jsx("p",{className:"text-sm text-gray-500",children:s.platform})]}),e.jsxs("span",{className:`text-sm font-medium ${r(s.roi)}`,children:[s.roi.toFixed(1),"x ROI"]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(N,{size:16,className:"text-blue-500 mr-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Reach"}),e.jsx("p",{className:"font-medium",children:t(s.reach)})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(j,{size:16,className:"text-purple-500 mr-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Engagement"}),e.jsx("p",{className:"font-medium",children:t(s.engagement)})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(u,{size:16,className:"text-green-500 mr-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"ROI"}),e.jsxs("p",{className:"font-medium",children:[s.roi.toFixed(1),"x"]})]})]})]})]},s.id))})}function re(){const[t,r]=n.useState("monthly"),[s,i]=n.useState("all"),[c,o]=n.useState("all"),[a,y]=n.useState(!0),[g,C]=n.useState(!0),[h,k]=n.useState(!0),[l,J]=n.useState(null),[w,Q]=n.useState(!0),[v,Z]=n.useState(null);return w?e.jsx("p",{className:"text-center text-gray-500",children:"Loading marketing data..."}):v?e.jsx("div",{className:"text-center text-red-600",children:e.jsx("p",{children:v})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sticky top-0 z-10 bg-gray-50 pb-4",children:[e.jsx("header",{className:"mb-6",children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Marketing Campaigns"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Manage, track, and optimize your marketing campaigns across all platforms."})]}),e.jsx("div",{className:"mt-4 sm:mt-0",children:e.jsx("button",{className:"btn btn-primary",children:"Create Campaign"})})]})}),e.jsx(H,{timeframe:t,setTimeframe:r,platform:s,setPlatform:i,status:c,setStatus:o})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsx(d,{title:"Active Campaigns",value:l.activeCampaigns,icon:e.jsx(N,{className:"text-blue-500"}),trend:{value:l.trends.campaigns.value,isPositive:l.trends.campaigns.isPositive}}),e.jsx(d,{title:"Total Reach",value:l.totalReach,icon:e.jsx(R,{className:"text-purple-500"}),trend:{value:l.trends.reach.value,isPositive:l.trends.reach.isPositive}}),e.jsx(d,{title:"Conversions",value:l.conversions,icon:e.jsx(j,{className:"text-green-500"}),trend:{value:l.trends.conversions.value,isPositive:l.trends.conversions.isPositive}}),e.jsx(d,{title:"Ad Spend",value:l.adSpend,icon:e.jsx(u,{className:"text-orange-500"}),trend:{value:l.trends.adSpend.value,isPositive:l.trends.adSpend.isPositive}})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsxs("div",{className:"bg-white rounded-xl shadow-sm",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer",onClick:()=>y(!a),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Performance Overview"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Track your campaign metrics over time"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("select",{className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mr-4",children:[e.jsx("option",{children:"Reach"}),e.jsx("option",{children:"Engagement"}),e.jsx("option",{children:"Conversions"})]}),a?e.jsx(x,{size:20}):e.jsx(m,{size:20})]})]}),e.jsx("div",{className:`transition-all duration-300 ${a?"p-6":"h-0 overflow-hidden"}`,children:e.jsx(Y,{})})]})}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer",onClick:()=>C(!g),children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Top Performers"}),g?e.jsx(x,{size:20}):e.jsx(m,{size:20})]}),e.jsx("div",{className:`transition-all duration-300 ${g?"p-6":"h-0 overflow-hidden"}`,children:e.jsx(q,{})})]})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer",onClick:()=>k(!h),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Active Campaigns"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Manage and monitor your running campaigns"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{className:"p-2 hover:bg-gray-100 rounded-lg",children:e.jsx(b,{size:20,className:"text-gray-500"})}),e.jsx("button",{className:"p-2 hover:bg-gray-100 rounded-lg",children:e.jsx(f,{size:20,className:"text-gray-500"})}),h?e.jsx(x,{size:20}):e.jsx(m,{size:20})]})]}),e.jsx("div",{className:`transition-all duration-300 ${h?"p-6":"h-0 overflow-hidden"}`,children:e.jsx(L,{platform:s,status:c})})]})]})}export{re as default};