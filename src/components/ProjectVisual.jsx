import { ArrowDown, Box, Check, Database, PackageOpen, Search, Server, ShoppingCart } from 'lucide-react'

function BusinessVisual() {
  return (
    <div className="mock-window business-window" aria-label="Stylized preview of the Msongori business website">
      <div className="window-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>msongori.co.tz</span>
        <span className="secure-dot" />
      </div>
      <div className="business-nav">
        <strong>Msongori<span>.</span></strong>
        <div><i /><i /><i /></div>
      </div>
      <div className="business-hero">
        <div>
          <span className="mock-label">BUILT FOR BUSINESS</span>
          <h3>Focused solutions.<br />Practical results.</h3>
          <p>A modern digital foundation for a growing company.</p>
          <button tabIndex="-1">Explore services <ArrowDown size={13} /></button>
        </div>
        <div className="business-shape">
          <div className="shape-grid" />
          <span>ML</span>
        </div>
      </div>
      <div className="business-stats">
        <span>Strategy</span><span>Technology</span><span>Support</span>
      </div>
    </div>
  )
}

function ApiVisual() {
  const endpoints = [
    { method: 'POST', path: '/auth/token', code: '200' },
    { method: 'GET', path: '/users/me', code: '200' },
    { method: 'POST', path: '/api/items', code: '201' },
  ]

  return (
    <div className="api-visual" aria-label="FastAPI endpoint and service architecture preview">
      <div className="api-topline">
        <span><Server size={14} /> API / v1</span>
        <span className="api-online"><i /> online</span>
      </div>
      <div className="endpoint-list">
        {endpoints.map((endpoint) => (
          <div className="endpoint" key={endpoint.path}>
            <strong>{endpoint.method}</strong>
            <code>{endpoint.path}</code>
            <span>{endpoint.code}</span>
          </div>
        ))}
      </div>
      <div className="architecture-flow">
        <div><span>CLIENT</span><Box size={20} /></div>
        <i />
        <div className="active"><span>FASTAPI</span><Server size={20} /></div>
        <i />
        <div><span>POSTGRES</span><Database size={20} /></div>
      </div>
      <div className="response-panel">
        <div><span>response.json</span><span>18 ms</span></div>
        <code><b>{'{'}</b> "authenticated": <em>true</em>, "scope": "user" <b>{'}'}</b></code>
      </div>
    </div>
  )
}

function StockVisual() {
  return (
    <div className="mock-window stock-window" aria-label="Concept preview of the stock management dashboard">
      <div className="stock-sidebar">
        <div className="stock-logo"><PackageOpen size={19} /></div>
        <i className="selected" /><i /><i /><i />
      </div>
      <div className="stock-main">
        <div className="stock-header">
          <div><span>INVENTORY</span><h3>Stock overview</h3></div>
          <div className="search-box"><Search size={14} /> Search</div>
        </div>
        <div className="stock-cards">
          <div><span>Items in stock</span><strong>—</strong><small>Data connection pending</small></div>
          <div><span>Low stock</span><strong>—</strong><small>Rule configuration pending</small></div>
        </div>
        <div className="stock-chart">
          <div><span>Inventory movement</span><small>Product direction</small></div>
          <svg viewBox="0 0 420 94" role="img" aria-label="Decorative inventory trend line">
            <path d="M3 82 C58 77, 74 58, 119 65 S192 31, 234 43 S302 62, 338 27 S384 12, 417 18" />
            <path className="area" d="M3 82 C58 77, 74 58, 119 65 S192 31, 234 43 S302 62, 338 27 S384 12, 417 18 L417 94 L3 94 Z" />
          </svg>
        </div>
        <div className="stock-table">
          <span><ShoppingCart size={13} /> Product</span><span>Status</span><span>Quantity</span>
          <strong>Sample inventory</strong><em><Check size={11} /> Planned</em><b>—</b>
        </div>
      </div>
    </div>
  )
}

export default function ProjectVisual({ type }) {
  if (type === 'api') return <ApiVisual />
  if (type === 'stock') return <StockVisual />
  return <BusinessVisual />
}
