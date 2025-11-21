import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (body.event === 'order.paid' || body.event === 'order.completed') {
      const orderId = body.order?.id;
      const customerEmail = body.order?.customer?.email;
      
      if (orderId) {
        return NextResponse.json({ 
          success: true, 
          redirect: `/checkout?order=${orderId}&email=${customerEmail || ''}` 
        });
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

