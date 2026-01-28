'use client';

import React, { useRef, useState, useTransition } from 'react';
import Image from 'next/image';
import { Download, RefreshCcw, CheckCircle, Clock, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { updateInvoiceStatus, resendInvoiceEmail } from '@/app/actions/invoice-management';

interface InvoiceViewProps {
  payment: any;
  client: any;
}

export default function InvoiceView({ payment, client }: InvoiceViewProps) {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const [isPending, startTransition] = useTransition();
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

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

  const handleDownloadPdf = async () => {
    if (!invoiceRef.current) return;
    setIsDownloading(true);

    try {
      // Small delay to ensure rendering - extended to 500ms
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Handle external images if any
        logging: true,
        backgroundColor: '#ffffff',
        allowTaint: false, // Changed to false to avoid security errors with cross-origin
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      const safeInvoiceNumber = payment.invoice_number.replace(/[^a-z0-9-]/gi, '_');
      pdf.save(`Invoice-${safeInvoiceNumber}.pdf`);
    } catch (error: any) {
      console.error('Error generating PDF:', error);
      alert(`Failed to generate PDF: ${error.message || error}`);
    } finally {
      setIsDownloading(false);
    }
  };

  // Format dates
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  let issueDate = 'N/A';
  let timeString = 'N/A';

  try {
    if (payment.created_at) {
      issueDate = new Date(payment.created_at).toLocaleDateString('en-US', dateOptions);
      timeString = new Date(payment.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
  } catch (e) {
    console.error("Date parsing error", e);
  }

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

        <button
          onClick={handleDownloadPdf}
          disabled={isDownloading}
          className="bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-2 rounded font-medium flex items-center gap-2 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          {isDownloading ? 'Generating...' : 'Download PDF'}
        </button>
      </div>

      {/* Invoice Container */}
      <div
        ref={invoiceRef}
        className="w-full max-w-[800px] p-12 shadow-sm"
        style={{ minHeight: '1123px', backgroundColor: '#ffffff', color: '#111827' }} // Explicit inline styles for safety
      >
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl font-extrabold mb-8" style={{ color: '#111827' }}>Invoice</h1>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-bold" style={{ color: '#111827' }}>Invoice number</span>
                <span className="font-bold" style={{ color: '#111827' }}>{payment.invoice_number}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-semibold" style={{ color: '#111827' }}>Date of issue</span>
                <span style={{ color: '#111827' }}>{issueDate}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-semibold" style={{ color: '#111827' }}>Date paid</span>
                <span style={{ color: '#111827' }}>{issueDate}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-semibold" style={{ color: '#111827' }}>Credit card</span>
                <span className="uppercase" style={{ color: '#111827' }}>
                  {payment.card_brand || 'CARD'} - XXXX XXXX XXXX {payment.card_last4 || 'XXXX'}
                </span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-semibold" style={{ color: '#111827' }}>Time of transaction</span>
                <span style={{ color: '#111827' }}>{timeString}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            {/* Logo */}
            <div className="relative w-48 h-20 mb-2">
              <Image
                src="/images/achtrex-logo.png"
                alt="Achtrex Logo"
                fill
                className="object-contain object-right-top"
                priority
                unoptimized // Critical for html2canvas to capture it properly
              />
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#111827' }}>Achtrex</h3>
            <p className="text-sm" style={{ color: '#111827' }}>support@achtrex.com</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#111827' }}>Bill to</h3>
            <p className="text-sm mb-1" style={{ color: '#111827' }}>{client?.name || 'Valued Client'}</p>
            {client?.company && <p className="text-sm mb-1" style={{ color: '#111827' }}>{client.company}</p>}
            <p className="text-sm" style={{ color: '#111827' }}>{client?.email}</p>
          </div>
        </div>

        {/* Description & Credits */}
        <div className="grid grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#111827' }}>Description</h3>
            <p className="text-sm" style={{ color: '#111827' }}>{payment.description}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#111827' }}>Amount</h3>
            <p className="text-sm" style={{ color: '#111827' }}>${Number(payment.amount).toFixed(2)}</p>
          </div>
        </div>

        {/* Paid Stamp */}
        {payment.status === 'paid' && (
          <div
            className="absolute top-40 right-40 opacity-20 pointer-events-none rotate-[-15deg] border-4 font-black text-6xl px-4 py-2 rounded-lg uppercase tracking-widest z-0"
            style={{ color: '#16a34a', borderColor: '#16a34a' }}
          >
            PAID
          </div>
        )}

        <div className="mb-20"></div>

        {/* Total Paid Block */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold" style={{ color: '#111827' }}>
            ${Number(payment.amount).toLocaleString()} USD paid {issueDate}
          </h2>
        </div>

        {/* Thank You Footer */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-16" style={{ color: '#111827' }}>Thank you for your payment!</h2>

          <div className="text-xs font-medium" style={{ color: '#6b7280' }}>
            <p className="mb-1">© {new Date().getFullYear()} Copyright Achtrex. All rights reserved.</p>
            <div className="flex justify-center gap-4">
              <span>Contact Us</span>
              <span>|</span>
              <span>Privacy</span>
              <span>|</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
