import{j as e,L as f}from"./index-B40TBc09.js";import{r as o}from"./react-vendor-D6gW23l2.js";import{D as d}from"./DashboardCard-DPsvOhnI.js";import{R as b,A as v,C as y,X as N,Y as w,T as C,a as k}from"./chart-vendor-D8Iq3d2I.js";import{B as A,C as S,U as p,P as R,c as z,T as g,D as u,A as E,d as I,e as m,f as x}from"./icon-vendor-CjJADx1M.js";import{F as P}from"./index-DQcHhGuw.js";const T=[{date:"Mon",score:65},{date:"Tue",score:72},{date:"Wed",score:68},{date:"Thu",score:85},{date:"Fri",score:82},{date:"Sat",score:78},{date:"Sun",score:89}];function F(){return e.jsx("div",{className:"h-[300px]",children:e.jsx(b,{width:"100%",height:"100%",children:e.jsxs(v,{data:T,margin:{top:10,right:30,left:0,bottom:0},children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorScore",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#8B5CF6",stopOpacity:.1}),e.jsx("stop",{offset:"95%",stopColor:"#8B5CF6",stopOpacity:0})]})}),e.jsx(y,{strokeDasharray:"3 3",vertical:!1}),e.jsx(N,{dataKey:"date"}),e.jsx(w,{}),e.jsx(C,{contentStyle:{backgroundColor:"white",borderRadius:"8px",border:"1px solid #E5E7EB"}}),e.jsx(k,{type:"monotone",dataKey:"score",stroke:"#8B5CF6",fillOpacity:1,fill:"url(#colorScore)"})]})})})}const $=[{icon:A,title:"Optimize Ad Spend",description:"Increase Facebook ad budget by 20% for better reach",impact:"Potential 15% ROI increase",color:"purple"},{icon:S,title:"Best Posting Time",description:"Schedule posts between 10 AM - 2 PM SAST",impact:"25% higher engagement",color:"blue"},{icon:p,title:"Target Audience",description:"Focus on 25-34 age group in Gauteng",impact:"30% more conversions",color:"green"}],_={purple:"bg-purple-50 text-purple-600",blue:"bg-blue-50 text-blue-600",green:"bg-green-50 text-green-600"};function B(){return e.jsx("div",{className:"space-y-4",children:$.map((s,t)=>e.jsx("div",{className:"p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:`p-2 rounded-lg ${_[s.color]}`,children:e.jsx(s.icon,{size:20})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:s.title}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:s.description}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:s.impact}),e.jsx("button",{className:"mt-2 text-sm font-medium text-blue-600 hover:text-blue-700",children:"Apply Recommendation"})]})]})},t))})}const L="/api";class O{baseUrl=L;async fetchWithAuth(t,r={}){const a=localStorage.getItem("auth_token"),l={"Content-Type":"application/json",...a&&{Authorization:`Bearer ${a}`},...r.headers},n=await fetch(`${this.baseUrl}${t}`,{...r,headers:l});if(n.status===401)throw localStorage.removeItem("auth_token"),window.location.href="/login",new Error("Unauthorized");if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return n}async getAnalytics(){try{return await(await this.fetchWithAuth("/analytics")).json()}catch(t){throw console.error("Error fetching analytics:",t),new Error("Failed to fetch analytics data")}}async getCampaigns(){try{return await(await this.fetchWithAuth("/campaigns")).json()}catch(t){throw console.error("Error fetching campaigns:",t),new Error("Failed to fetch campaigns")}}async getSocialInsights(){try{const r=await(await this.fetchWithAuth("/auth/instagram/insights?metric=impressions,reach,profile_views&period=day&metric_type=total_value")).json();return{impressions:r.data.find(a=>a.name==="impressions")?.total_value?.value||0,reach:r.data.find(a=>a.name==="reach")?.total_value?.value||0,profile_views:r.data.find(a=>a.name==="profile_views")?.total_value?.value||0}}catch(t){throw console.error("Error fetching social insights:",t),new Error("Failed to fetch social insights")}}}const U=new O,V={facebook:()=>e.jsx("div",{className:"text-blue-500",children:"FB"}),instagram:()=>e.jsx("div",{className:"text-pink-500",children:"IG"}),linkedin:()=>e.jsx("div",{className:"text-blue-700",children:"LI"}),tiktok:P},D={facebook:"border-blue-500",instagram:"border-purple-500",linkedin:"border-blue-700",tiktok:"border-blue-700"};function K(){const[s,t]=o.useState([]),[r,a]=o.useState(!0),[l,n]=o.useState(null);return o.useEffect(()=>{(async()=>{try{a(!0);const c=await U.getCampaigns();t(c),n(null)}catch(c){console.error("Error fetching campaigns:",c),n("Unable to load campaigns. Please try again later.")}finally{a(!1)}})()},[]),r?e.jsx(f,{}):l?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("p",{className:"text-red-600 mb-4",children:l}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Retry"})]}):s.length?e.jsx("div",{className:"space-y-4",children:s.map(i=>{const c=V[i.platform];return e.jsx("div",{className:`bg-white rounded-lg border-l-4 ${D[i.platform]||"border-gray-300"} p-4`,children:e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{className:"flex items-center",children:[c&&e.jsx(c,{className:"h-5 w-5 text-gray-500 mr-2"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900",children:i.name}),e.jsx("p",{className:"text-sm text-gray-500 capitalize",children:i.platform})]})]}),e.jsx("button",{className:`p-2 rounded-full ${i.status==="active"?"bg-green-100 text-green-600":"bg-gray-100 text-gray-600"}`,children:i.status==="active"?e.jsx(R,{size:16}):e.jsx(z,{size:16})})]})},i.id)})}):e.jsx("div",{className:"text-center py-8",children:e.jsx("p",{className:"text-gray-600 mb-4",children:"No active campaigns found"})})}const W=[{id:1,title:"Summer Collection Launch",platform:"Instagram",reach:"15.2K",engagement:"2.8K",roi:"3.2x"},{id:2,title:"Flash Sale Announcement",platform:"Facebook",reach:"12.5K",engagement:"1.9K",roi:"2.8x"}];function G(){return e.jsx("div",{className:"space-y-4",children:W.map(s=>e.jsxs("div",{className:"p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900",children:s.title}),e.jsx("p",{className:"text-sm text-gray-500",children:s.platform})]}),e.jsxs("span",{className:"text-green-600 text-sm font-medium",children:[s.roi," ROI"]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(g,{size:16,className:"text-blue-500 mr-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Reach"}),e.jsx("p",{className:"font-medium",children:s.reach})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(p,{size:16,className:"text-purple-500 mr-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Engagement"}),e.jsx("p",{className:"font-medium",children:s.engagement})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(u,{size:16,className:"text-green-500 mr-2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"ROI"}),e.jsx("p",{className:"font-medium",children:s.roi})]})]})]})]},s.id))})}function Q(){const[s,t]=o.useState(null),[r,a]=o.useState(!0),[l,n]=o.useState(!0),[i,c]=o.useState(!0),[h,j]=o.useState(!0);return s?e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"mb-8",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Dashboard Overview"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Welcome back! Here's your business at a glance."})]}),e.jsxs("button",{className:"flex items-center text-blue-600 hover:text-blue-700",children:[e.jsx("span",{className:"text-sm mr-1",children:"View Reports"}),e.jsx(E,{size:16})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsx(d,{title:"Total Revenue",value:`R ${s.metrics.totalRevenue.toLocaleString()}`,icon:e.jsx(u,{className:"text-green-500"}),trend:s.trends.revenue}),e.jsx(d,{title:"Active Campaigns",value:s.metrics.activeCampaigns,icon:e.jsx(g,{className:"text-blue-500"}),trend:s.trends.campaigns}),e.jsx(d,{title:"New Clients",value:s.metrics.newClients,icon:e.jsx(p,{className:"text-purple-500"}),trend:s.trends.clients}),e.jsx(d,{title:"Engagement Rate",value:`${s.metrics.engagementRate}%`,icon:e.jsx(I,{className:"text-orange-500"}),trend:s.trends.engagement})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm mb-6",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer",onClick:()=>a(!r),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Performance Overview"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Track your campaign metrics and ROI"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("select",{className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{children:"Last 7 days"}),e.jsx("option",{children:"Last 30 days"}),e.jsx("option",{children:"Last 90 days"})]}),r?e.jsx(m,{size:20}):e.jsx(x,{size:20})]})]}),e.jsx("div",{className:`transition-all duration-300 ${r?"p-6":"h-0 overflow-hidden"}`,children:e.jsx(F,{})})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer",onClick:()=>c(!i),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Active Campaigns"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Monitor your running campaigns"})]}),i?e.jsx(m,{size:20}):e.jsx(x,{size:20})]}),e.jsx("div",{className:`transition-all duration-300 ${i?"p-6":"h-0 overflow-hidden"}`,children:e.jsx(K,{})})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-sm",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer",onClick:()=>n(!l),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"AI Recommendations"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Smart insights to improve performance"})]}),l?e.jsx(m,{size:20}):e.jsx(x,{size:20})]}),e.jsx("div",{className:`transition-all duration-300 ${l?"p-6":"h-0 overflow-hidden"}`,children:e.jsx(B,{})})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-sm",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer",onClick:()=>j(!h),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Top Performers"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Best performing content"})]}),h?e.jsx(m,{size:20}):e.jsx(x,{size:20})]}),e.jsx("div",{className:`transition-all duration-300 ${h?"p-6":"h-0 overflow-hidden"}`,children:e.jsx(G,{})})]})]})]})]}):e.jsx("p",{className:"text-center text-gray-500",children:"Loading analytics..."})}export{Q as default};