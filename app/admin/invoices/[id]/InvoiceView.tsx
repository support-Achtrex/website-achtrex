'use client';

import React, { useRef, useState, useTransition } from 'react';
// Image import removed
import { Download, RefreshCcw, CheckCircle, Clock } from 'lucide-react';

import { updateInvoiceStatus, resendInvoiceEmail } from '@/app/actions/invoice-management';
import { InvoiceTemplate } from '@/components/invoice/InvoiceTemplate';

interface InvoiceViewProps {
  payment: any;
  client: any;
}

export default function InvoiceView({ payment, client }: InvoiceViewProps) {

  const [isPending, startTransition] = useTransition();
  const [emailStatus, setEmailStatus] = useState<string | null>(null);


  const handleStatusChange = async (newStatus: string) => {
    startTransition(async () => {
      await updateInvoiceStatus(payment.id, newStatus);
    });
  };

  const handleResendEmail = async () => {
    setEmailStatus('sending');
    const res = await resendInvoiceEmail(payment.id);
    if (res.success) {
      alert('Email sent successfully!');
      setTimeout(() => setEmailStatus(null), 3000);
    } else {
      setEmailStatus('error');
      console.error(res.error);
      alert(res.error || 'Failed to send email');
    }
  };



  // Date formatting logic moved to InvoiceTemplate component

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">

      {/* Top Controls */}
      <div className="w-full max-w-[800px] flex justify-between mb-6">
        <div className="flex gap-2">
          {/* Status Toggle */}
          <div className="flex items-center bg-white rounded shadow-sm p-1">
            <button
              onClick={() => handleStatusChange('pending')}
              disabled={isPending}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors flex items-center gap-1 ${payment.status === 'pending' ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Clock size={14} /> Pending
            </button>
            <button
              onClick={() => handleStatusChange('paid')}
              disabled={isPending}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors flex items-center gap-1 ${payment.status === 'paid' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <CheckCircle size={14} /> Paid
            </button>
          </div>

          {/* Resend Email */}
          <button
            onClick={handleResendEmail}
            disabled={emailStatus === 'sending'}
            className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded font-medium flex items-center gap-2 transition-colors shadow-sm text-sm border border-gray-200"
          >
            <RefreshCcw size={14} className={emailStatus === 'sending' ? 'animate-spin' : ''} />
            {emailStatus === 'sending' ? 'Sending...' : emailStatus === 'sent' ? 'Sent!' : 'Resend Email'}
          </button>
        </div>

        <a
          href={`/api/invoices/${payment.id}/pdf`}
          target="_blank"
          className="bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-2 rounded font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          <Download size={18} />
          Download PDF
        </a>
      </div>

      {/* Invoice Container */}
      <div className="w-full max-w-[800px] shadow-sm">
        <InvoiceTemplate
          payment={payment}
          client={client}
          logoSrc="/images/achtrex-logo.png"
        />
      </div>
    </div>
  );
}
