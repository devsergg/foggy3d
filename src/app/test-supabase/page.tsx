'use client';

import { useEffect, useState } from 'react';
import { getAllProducts } from '../../../lib/products';
import { Product } from '../../types';

export default function TestSupabase() {
  const [status, setStatus] = useState('Loading...');
  const [products, setProducts] = useState<Product[]>([]);
  const [envVars, setEnvVars] = useState<any>({});

  useEffect(() => {
    // Check environment variables
    setEnvVars({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'MISSING',
      key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'MISSING',
      urlValue: process.env.NEXT_PUBLIC_SUPABASE_URL,
      keyValue: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20) + '...'
    });

    // Test database connection
    getAllProducts()
      .then(data => {
        setProducts(data);
        setStatus(`✅ SUCCESS: Loaded ${data.length} products from Supabase`);
      })
      .catch(error => {
        setStatus(`❌ ERROR: ${error.message}`);
        console.error('Supabase error:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>🔧 Supabase Connection Test</h1>
      
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <h2>Environment Variables:</h2>
        <p>NEXT_PUBLIC_SUPABASE_URL: <strong>{envVars.url}</strong></p>
        <p>NEXT_PUBLIC_SUPABASE_ANON_KEY: <strong>{envVars.key}</strong></p>
        {envVars.urlValue && <p>URL Value: {envVars.urlValue}</p>}
        {envVars.keyValue && <p>Key Value: {envVars.keyValue}</p>}
      </div>

      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: status.includes('SUCCESS') ? '#d4edda' : '#f8d7da' }}>
        <h2>Database Connection:</h2>
        <p>{status}</p>
      </div>

      {products.length > 0 && (
        <div>
          <h2>Products from Database:</h2>
          {products.map(product => (
            <div key={product.id} style={{ marginBottom: '10px', padding: '5px', border: '1px solid #ccc' }}>
              <strong>{product.name}</strong> - ${product.price}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 