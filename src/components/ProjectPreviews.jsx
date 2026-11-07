import React, { useState } from 'react';
import { 
  Activity, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Bell, 
  Thermometer, 
  Layers,
  BarChart3,
  TrendingUp,
  Cpu
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
  return (
    <div className="w-full bg-[#0A0E1A] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
      {/* Topbar Header */}
      <div className="bg-[#070A12] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-emerald-400 text-xs">AgriLogix Telemetry</span>
        </div>
        <span className="text-[11px] text-slate-400">Karnataka Hubs: Active</span>
      </div>

      {/* Spacious 2-Column KPI Cards */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-slate-900/30">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/90">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Spoilage Probability</span>
          </div>
          <div className="text-base font-bold text-emerald-400">12.4% (Low Risk)</div>
          <div className="text-[10px] text-slate-500 mt-0.5">XGBoost Regressor</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/90">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Remaining Shelf Life</span>
          </div>
          <div className="text-base font-bold text-amber-300">8.5 Days</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Ambient: 24°C • 82% RH</div>
        </div>
      </div>

      {/* Route & Cold Storage Strip */}
      <div className="px-4 pb-4 pt-1 space-y-2.5">
        <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-xs">
              🌱
            </div>
            <div>
              <div className="text-xs font-bold text-white">Belgaum Farm</div>
              <div className="text-[10px] text-slate-400">Origin Source</div>
            </div>
          </div>

          <div className="flex flex-col items-center px-2">
            <span className="text-[10px] text-cyan-400 font-semibold">142 km Transit</span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-1 rounded-full" />
          </div>

          <div className="flex items-center gap-2 text-right">
            <div>
              <div className="text-xs font-bold text-white">Hassan Central</div>
              <div className="text-[10px] text-emerald-400">78% Storage Free</div>
            </div>
            <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-xs">
              ❄️
            </div>
          </div>
        </div>

        {/* Quality Classifier Output */}
        <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-300 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>MobileNetV2 Vision:</span>
          </span>
          <span className="font-bold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 text-[11px]">
            Grade A Fresh (96.8%)
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
    <div className="w-full bg-[#0A0E1A] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
      {/* Topbar Header */}
      <div className="bg-[#070A12] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-semibold text-sky-400 text-xs">Clinical AI Diagnostic Engine</span>
        </div>
        <span className="text-[11px] text-slate-400">Inference: 1.2s</span>
      </div>

      {/* Dual Panel Layout with Proper Spacing */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Left: Radiograph & Grad-CAM Image */}
        <div className="sm:col-span-5 relative rounded-xl bg-black border border-slate-800 overflow-hidden flex flex-col items-center justify-center">
          {project?.image ? (
            <img 
              src={project.image} 
              alt="Grad-CAM Pathology Localization" 
              className={`w-full h-36 object-cover transition-all duration-300 ${viewHeatmap ? 'contrast-125' : 'grayscale'}`}
            />
          ) : (
            <div className="w-full h-36 bg-slate-950 flex flex-col items-center justify-center text-slate-500">
              <span>Chest Radiograph</span>
            </div>
          )}

          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-[#080B14]/90 px-2.5 py-1 rounded-md backdrop-blur-md text-[10px]">
            <span className="text-cyan-300 font-semibold">Grad-CAM Overlay</span>
            <button
              onClick={() => setViewHeatmap(!viewHeatmap)}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Toggle
            </button>
          </div>
        </div>

        {/* Right: Metrics & Diagnosis */}
        <div className="sm:col-span-7 space-y-3">
          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/90 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Diagnosis Verdict:</span>
              <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60">
                Pneumonia Positive
              </span>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-1">
                <span>Model Confidence:</span>
                <span className="text-cyan-400 font-mono">95.4%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-cyan-400 h-1.5 rounded-full" style={{ width: '95.4%' }} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800">
              <div className="text-slate-400 text-[10px]">F1-Score</div>
              <div className="font-bold text-emerald-400 mt-0.5">0.94 Validated</div>
            </div>
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800">
              <div className="text-slate-400 text-[10px]">Warm-Load Core</div>
              <div className="font-bold text-sky-400 mt-0.5">1.2s Latency</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-3 pt-0">
        <div className="p-2 rounded bg-amber-950/20 border border-amber-900/40 text-[10px] text-amber-300 text-center">
          Clinical decision support prototype • Not a replacement for MD diagnosis
        </div>
      </div>
    </div>
  );
}

// 3. SmartShelf AI Inventory Preview
function SmartShelfPreview() {
  const items = [
    { name: 'Organic Whole Milk', cat: 'Dairy', exp: 'Expires in 2 Days', urgent: true },
    { name: 'Amoxicillin 500mg', cat: 'Medicine', exp: '14 Days Safe', urgent: false },
    { name: 'Fresh Greek Yogurt', cat: 'Dairy', exp: 'Expires Tomorrow', urgent: true },
    { name: 'Whole Wheat Bread', cat: 'Bakery', exp: '4 Days Safe', urgent: false },
  ];

  return (
    <div className="w-full bg-[#0A0E1A] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
      {/* Topbar Header */}
      <div className="bg-[#070A12] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="font-semibold text-violet-400 text-xs">SmartShelf Automated Audit</span>
        </div>
        <span className="text-[11px] text-slate-400">Node-Cron: Running</span>
      </div>

      {/* Spacious 2-Column Product Grid */}
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {items.map((item) => (
            <div
              key={item.name}
              className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between"
            >
              <div>
                <div className="text-[10px] text-slate-400">{item.cat}</div>
                <div className="text-xs font-bold text-white mt-0.5">{item.name}</div>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ml-2 ${
                item.urgent 
                  ? 'bg-rose-950 text-rose-300 border border-rose-800/60' 
                  : 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
              }`}>
                {item.exp}
              </span>
            </div>
          ))}
        </div>

        {/* Alert Delivery Strip */}
        <div className="p-3 rounded-lg bg-violet-950/30 border border-violet-800/50 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-violet-300">
            <Bell className="w-4 h-4 text-violet-400 shrink-0" />
            <span>Nodemailer + Web-Push: 2 Alerts Dispatched</span>
          </div>
          <span className="text-emerald-400 font-bold text-[11px]">Synced</span>
        </div>
      </div>
    </div>
  );
}

// 4. Crypto BTC Analysis Preview
function CryptoPreview() {
  return (
    <div className="w-full bg-[#0A0E1A] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
      {/* Topbar Header */}
      <div className="bg-[#070A12] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-semibold text-amber-400 text-xs">Power BI Time-Series Intelligence</span>
        </div>
        <span className="text-[11px] text-slate-400">23 Cryptos Modeled</span>
      </div>

      {/* Spacious 2-Column KPI Cards */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-slate-900/30">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/90">
          <div className="text-[11px] text-slate-400 mb-1">Bitcoin Peak Target</div>
          <div className="text-base font-bold text-white">$68,789</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">+142.8% Annual Return</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/90">
          <div className="text-[11px] text-slate-400 mb-1">300-Day Moving Average</div>
          <div className="text-base font-bold text-cyan-400">Bullish Momentum</div>
          <div className="text-[10px] text-slate-500 mt-0.5">DAX Measure Validated</div>
        </div>
      </div>

      {/* Visual Chart Area */}
      <div className="px-4 pb-4 pt-1">
        <div className="relative h-20 bg-slate-950 rounded-lg border border-slate-800/80 p-3 flex items-end justify-between overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          
          {[35, 48, 42, 62, 55, 78, 70, 90, 84, 98, 92, 100].map((val, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 z-10 w-[6%]">
              <div 
                className="w-full bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-sm"
                style={{ height: `${val * 0.52}px` }}
              />
            </div>
          ))}

          {/* 300-Day Moving Average Line */}
          <div className="absolute top-6 inset-x-3 h-0.5 bg-cyan-400 shadow-[0_0_8px_#22D3EE] z-20 pointer-events-none" />
        </div>

        <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-cyan-400 inline-block rounded-full" /> 300-Day MA Benchmark
          </span>
          <span className="text-emerald-400 font-semibold">Live Power BI Service</span>
        </div>
      </div>
    </div>
  );
}

// 5. Supply Chain Dashboard Preview
function SupplyChainPreview() {
  return (
    <div className="w-full bg-[#0A0E1A] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
      {/* Topbar Header */}
      <div className="bg-[#070A12] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold text-cyan-400 text-xs">Supply Chain Executive BI</span>
        </div>
        <span className="text-[11px] text-slate-400">30K Product-Store Combos</span>
      </div>

      {/* Spacious 2-Column KPI Cards */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-slate-900/30">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/90">
          <div className="text-[11px] text-slate-400 mb-1">Stockout Risk</div>
          <div className="text-base font-bold text-emerald-400">1.4% (Minimal)</div>
          <div className="text-[10px] text-slate-500 mt-0.5">3+ Data Sources Ingested</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/90">
          <div className="text-[11px] text-slate-400 mb-1">Inventory Turnover</div>
          <div className="text-base font-bold text-cyan-400">4.2x / Quarter</div>
          <div className="text-[10px] text-slate-500 mt-0.5">SQL Cleansed Pipeline</div>
        </div>
      </div>

      {/* Progress Breakdown Bars */}
      <div className="px-4 pb-4 pt-1 space-y-2.5">
        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>Fast-Moving SKUs (Tier 1)</span>
            <span className="text-emerald-400 font-bold">54%</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-2">
            <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '54%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>Seasonal &amp; Steady Demand</span>
            <span className="text-sky-400 font-bold">31%</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-2">
            <div className="bg-sky-400 h-2 rounded-full" style={{ width: '31%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
