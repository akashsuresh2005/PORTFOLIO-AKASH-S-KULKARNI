import React, { useState } from 'react';
import { 
  Activity, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Bell, 
  ShieldAlert, 
  Thermometer, 
  Droplets,
  Layers,
  ArrowUpRight,
  Eye,
  SlidersHorizontal,
  BarChart3
} from 'lucide-react';

export default function ProjectPreview({ type, project }) {
  if (type === 'agri-dashboard') {
    return <AgriPreview />;
  }
  if (type === 'pneuscan-medical') {
    return <PneuScanPreview project={project} />;
  }
  if (type === 'smartshelf-inventory') {
    return <SmartShelfPreview />;
  }
  if (type === 'crypto-charts') {
    return <CryptoPreview />;
  }
  if (type === 'supply-dashboard') {
    return <SupplyChainPreview />;
  }
  return null;
}

// 1. Agri Loss AI Dashboard Preview
function AgriPreview() {
  const [activeTab, setActiveTab] = useState('prediction');

  return (
    <div className="w-full bg-[#090D18] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Dashboard Topbar */}
      <div className="bg-[#060810] px-3.5 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-emerald-400">AgriLogix Telemetry v2.4</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60">
            Karnataka Hubs: Active
          </span>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/40 border-b border-slate-800">
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 flex items-center gap-1">
            <Thermometer className="w-3 h-3 text-sky-400" /> Temp &amp; RH
          </div>
          <div className="text-sm font-bold text-white mt-1">24.2°C | 82%</div>
        </div>
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 flex items-center gap-1">
            <Activity className="w-3 h-3 text-emerald-400" /> Spoilage Risk
          </div>
          <div className="text-sm font-bold text-emerald-400 mt-1">12.4% (Low)</div>
        </div>
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" /> Est. Shelf Life
          </div>
          <div className="text-sm font-bold text-amber-300 mt-1">8.5 Days</div>
        </div>
      </div>

      {/* Visual Simulation Area: Leaflet Map Nodes & Inspection */}
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-400">Route &amp; Cold Storage Allocation:</span>
          <span className="text-cyan-400">Hub: Hassan Central #04</span>
        </div>

        {/* Simulated Route Strip */}
        <div className="relative h-14 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent" />
          <div className="relative flex items-center gap-2 z-10">
            <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-[10px] text-emerald-300">
              🌱
            </div>
            <div>
              <div className="text-[10px] font-bold text-white">Origin Farm</div>
              <div className="text-[9px] text-slate-400">Belgaum North</div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[9px] text-cyan-400">Transit: 142 km</span>
            <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse mt-0.5" />
          </div>

          <div className="relative flex items-center gap-2 z-10">
            <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-[10px] text-cyan-300">
              ❄️
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-white">Cold Storage</div>
              <div className="text-[9px] text-emerald-400">Capacity: 78% Avail</div>
            </div>
          </div>
        </div>

        {/* MobileNetV2 Quality Inspection Badge */}
        <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800 text-[11px]">
          <span className="text-slate-300 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>MobileNetV2 Visual Classifier:</span>
          </span>
          <span className="font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/60">
            Grade A (Fresh - 96.8%)
          </span>
        </div>
      </div>
    </div>
  );
}

// 2. PneuScan AI Medical Workstation Preview
function PneuScanPreview({ project }) {
  const [viewHeatmap, setViewHeatmap] = useState(true);

  return (
    <div className="w-full bg-[#090D18] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Topbar */}
      <div className="bg-[#060810] px-3.5 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-semibold text-sky-400">PneuScan Clinical Workstation</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/60">
            Warm-Load: 1.18s
          </span>
        </div>
      </div>

      {/* Dual Panel Simulation */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3">
        {/* Left: Radiograph & Grad-CAM Image */}
        <div className="sm:col-span-5 relative rounded-lg bg-black border border-slate-800 overflow-hidden flex flex-col items-center justify-center min-h-[140px]">
          {project?.image ? (
            <img 
              src={project.image} 
              alt="Grad-CAM Pathology Localization" 
              className={`w-full h-36 object-cover transition-all duration-300 ${viewHeatmap ? 'contrast-125' : 'grayscale'}`}
            />
          ) : (
            <div className="w-full h-36 bg-slate-950 flex flex-col items-center justify-center text-slate-500">
              <span>Chest X-Ray Matrix</span>
            </div>
          )}

          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-[#080B14]/85 px-2 py-1 rounded backdrop-blur-sm text-[10px]">
            <span className="text-cyan-300">Grad-CAM Overlay</span>
            <button
              onClick={() => setViewHeatmap(!viewHeatmap)}
              className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white"
            >
              Toggle Heatmap
            </button>
          </div>
        </div>

        {/* Right: Clinical Indicators & Diagnostic Confidence */}
        <div className="sm:col-span-7 flex flex-col justify-between space-y-2">
          <div className="p-2 rounded bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400">Diagnostic Verdict:</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.2 rounded border border-emerald-800/50">
                Pneumonia Detected
              </span>
            </div>
            <div className="text-sm font-bold text-white flex items-center justify-between">
              <span>Confidence Score:</span>
              <span className="text-cyan-400 font-mono">95.4%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-sky-400 to-cyan-400 h-1.5 rounded-full" style={{ width: '95.4%' }} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400">SpO2 Oxygen:</span>
              <div className="font-bold text-white mt-0.5">94% (Borderline)</div>
            </div>
            <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400">F1-Score:</span>
              <div className="font-bold text-emerald-400 mt-0.5">0.94 Validated</div>
            </div>
          </div>

          <div className="p-1.5 rounded bg-amber-950/30 border border-amber-900/40 text-[9px] text-amber-300/90 leading-tight">
            ⚠️ Clinical AI Support Only • Not a substitute for MD diagnosis
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. SmartShelf AI Inventory Preview
function SmartShelfPreview() {
  const items = [
    { name: 'Organic Whole Milk', cat: 'Dairy', exp: '2 Days', urgent: true },
    { name: 'Amoxicillin 500mg', cat: 'Medicine', exp: '14 Days', urgent: false },
    { name: 'Greek Yogurt 400g', cat: 'Dairy', exp: '1 Day', urgent: true },
    { name: 'Whole Wheat Bread', cat: 'Bakery', exp: '4 Days', urgent: false },
  ];

  return (
    <div className="w-full bg-[#090D18] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Topbar */}
      <div className="bg-[#060810] px-3.5 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="font-semibold text-violet-400">SmartShelf Automated Audits</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <Clock className="w-3 h-3 text-cyan-400" />
          <span>Node-Cron: Running</span>
        </div>
      </div>

      {/* Inventory Mini List */}
      <div className="p-3 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <div
              key={item.name}
              className="p-2 rounded bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-400 truncate max-w-[90px]">{item.cat}</span>
                <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                  item.urgent 
                    ? 'bg-rose-950 text-rose-300 border border-rose-800/60' 
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                }`}>
                  {item.exp}
                </span>
              </div>
              <div className="font-bold text-white text-[11px] truncate mt-1">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Automated Alert Pipeline Banner */}
        <div className="p-2 rounded bg-violet-950/30 border border-violet-800/50 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5 text-violet-300">
            <Bell className="w-3.5 h-3.5 text-violet-400" />
            <span>Nodemailer + Web-Push: 2 Alerts Dispatched</span>
          </div>
          <span className="text-emerald-400 font-bold">Synced</span>
        </div>
      </div>
    </div>
  );
}

// 4. Crypto BTC Analysis Preview
function CryptoPreview() {
  return (
    <div className="w-full bg-[#090D18] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Topbar */}
      <div className="bg-[#060810] px-3.5 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-semibold text-amber-400">Power BI Crypto Time-Series</span>
        </div>
        <span className="text-[10px] text-slate-400">23 Cryptos Tracked</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/40 border-b border-slate-800">
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[9px] text-slate-400">BTC Peak KPI</div>
          <div className="text-xs sm:text-sm font-bold text-white mt-0.5">$68,789</div>
        </div>
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[9px] text-slate-400">300-Day MA</div>
          <div className="text-xs sm:text-sm font-bold text-cyan-400 mt-0.5">Bullish Signal</div>
        </div>
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[9px] text-slate-400">365-Day Return</div>
          <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">+142.8%</div>
        </div>
      </div>

      {/* Visual Chart Simulation */}
      <div className="p-3">
        <div className="relative h-20 bg-slate-950 rounded-lg border border-slate-800/80 p-2 flex items-end justify-between overflow-hidden">
          {/* Simulated Bars & Trendline */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          
          {[32, 45, 40, 60, 52, 75, 68, 88, 82, 95, 91, 100].map((val, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 z-10 w-[6%]">
              <div 
                className="w-full bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-sm transition-all"
                style={{ height: `${val * 0.55}px` }}
              />
            </div>
          ))}

          {/* 300-Day MA Overlay line */}
          <div className="absolute top-6 inset-x-2 h-0.5 bg-cyan-400/80 shadow-[0_0_8px_#22D3EE] z-20 pointer-events-none" />
        </div>

        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-0.5 bg-cyan-400 inline-block" /> 300-Day Moving Average
          </span>
          <span className="text-emerald-400">DAX Model Active</span>
        </div>
      </div>
    </div>
  );
}

// 5. Supply Chain Dashboard Preview
function SupplyChainPreview() {
  return (
    <div className="w-full bg-[#090D18] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Topbar */}
      <div className="bg-[#060810] px-3.5 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold text-cyan-400">Supply Chain Executive BI</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
          30K SKU Combos
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/40 border-b border-slate-800">
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[9px] text-slate-400">Stockout Risk</div>
          <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">1.4% (Low)</div>
        </div>
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[9px] text-slate-400">Turnover Velocity</div>
          <div className="text-xs sm:text-sm font-bold text-cyan-400 mt-0.5">4.2x / Quarter</div>
        </div>
        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-[9px] text-slate-400">Data Sources</div>
          <div className="text-xs sm:text-sm font-bold text-white mt-0.5">3+ Integrated</div>
        </div>
      </div>

      {/* Product Segmentation Visual */}
      <div className="p-3 space-y-2">
        <div className="text-[10px] text-slate-400 flex items-center justify-between">
          <span>Velocity Categorization:</span>
          <span className="text-cyan-400">SQL Pipeline Cleansed</span>
        </div>

        <div className="space-y-1.5">
          <div>
            <div className="flex justify-between text-[10px] mb-0.5 text-slate-300">
              <span>Fast-Moving Inventory (Tier 1)</span>
              <span className="text-emerald-400 font-bold">54%</span>
            </div>
            <div className="w-full bg-slate-950 rounded-full h-1.5">
              <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '54%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-0.5 text-slate-300">
              <span>Seasonal / Cyclical SKUs</span>
              <span className="text-sky-400 font-bold">31%</span>
            </div>
            <div className="w-full bg-slate-950 rounded-full h-1.5">
              <div className="bg-sky-400 h-1.5 rounded-full" style={{ width: '31%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-0.5 text-slate-300">
              <span>Slow-Moving Deadstock Risk</span>
              <span className="text-amber-400 font-bold">15%</span>
            </div>
            <div className="w-full bg-slate-950 rounded-full h-1.5">
              <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '15%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
