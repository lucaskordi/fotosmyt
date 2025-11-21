'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoCheckmarkCircle, IoTime, IoAlertCircle } from 'react-icons/io5';

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get('order');
  const [status, setStatus] = useState<'checking' | 'paid' | 'pending' | 'error'>('checking');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!orderId) {
      setStatus('error');
      return;
    }

    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(`/api/check-payment?order=${orderId}`);
        const data = await response.json();
        
        if (data.status === 'paid' || data.status === 'completed') {
          setStatus('paid');
          
          const timer = setInterval(() => {
            setCountdown((prev) => {
              if (prev <= 1) {
                clearInterval(timer);
                router.push('/checkout');
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
          
          return () => clearInterval(timer);
        } else {
          setStatus('pending');
        }
      } catch (error) {
        console.error('Error checking payment:', error);
        setStatus('error');
      }
    };

    checkPaymentStatus();
    
    const interval = setInterval(checkPaymentStatus, 10000);
    
    return () => clearInterval(interval);
  }, [orderId, router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        {status === 'checking' && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-[#0047c7] border-t-transparent rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Verificando pagamento...
            </h2>
            <p className="text-gray-600">
              Aguarde enquanto confirmamos seu pagamento
            </p>
          </>
        )}

        {status === 'paid' && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-4"
            >
              <IoCheckmarkCircle className="text-6xl text-green-500 mx-auto" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Pagamento Confirmado!
            </h2>
            <p className="text-gray-600 mb-4">
              Redirecionando para a página de confirmação...
            </p>
            <p className="text-sm text-gray-500">
              {countdown > 0 && `Redirecionando em ${countdown} segundos...`}
            </p>
          </>
        )}

        {status === 'pending' && (
          <>
            <IoTime className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Aguardando Pagamento
            </h2>
            <p className="text-gray-600 mb-4">
              Seu pagamento ainda está sendo processado. Esta página será atualizada automaticamente.
            </p>
            <p className="text-sm text-gray-500">
              Verificando novamente em alguns segundos...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <IoAlertCircle className="text-6xl text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Erro ao Verificar
            </h2>
            <p className="text-gray-600 mb-4">
              Não foi possível verificar o status do pagamento.
            </p>
            <a
              href="/"
              className="inline-block bg-[#0047c7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0035a0] transition-colors"
            >
              Voltar para o Início
            </a>
          </>
        )}
      </motion.div>
    </main>
  );
}

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0047c7] border-t-transparent rounded-full mx-auto mb-4 animate-spin"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </main>
    }>
      <PaymentStatusContent />
    </Suspense>
  );
}

