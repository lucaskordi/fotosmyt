import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderId = searchParams.get('order');

  if (!orderId) {
    return NextResponse.json({ error: 'Order ID required' }, { status: 400 });
  }

  try {
    const yampiApiKey = process.env.YAMPI_API_KEY;
    const yampiStoreId = process.env.YAMPI_STORE_ID;

    if (!yampiApiKey || !yampiStoreId) {
      return NextResponse.json({ 
        error: 'Yampi API not configured',
        status: 'pending' 
      });
    }

    const response = await fetch(
      `https://api.yampi.com.br/v2/stores/${yampiStoreId}/orders/${orderId}`,
      {
        headers: {
          'Authorization': `Bearer ${yampiApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ status: 'pending' });
    }

    const order = await response.json();
    
    const status = order.status === 'paid' || order.status === 'completed' 
      ? 'paid' 
      : 'pending';

    return NextResponse.json({ status });
  } catch (error) {
    console.error('Error checking payment:', error);
    return NextResponse.json({ status: 'pending' });
  }
}

