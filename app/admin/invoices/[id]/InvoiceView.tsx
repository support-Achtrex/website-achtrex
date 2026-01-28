'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { updateInvoiceStatus, resendInvoiceEmail } from '@/app/actions/invoice-management';
import { useState, useTransition } from 'react';
import { RefreshCcw, CheckCircle, Clock } from 'lucide-react';

interface InvoiceViewProps {
  payment: any;
  client: any;
}

export default function InvoiceView({ payment, client }: InvoiceViewProps) {
  const invoiceRef = useRef<HTMLDivElement>(null);

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
      setEmailStatus('sent');
      setTimeout(() => setEmailStatus(null), 3000);
    } else {
      setEmailStatus('error');
      console.error(res.error);
      alert(res.error); // Simple feedback
    }
  };

  const handleDownloadPdf = async () => {
    if (!invoiceRef.current) return;

    try {
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Handle external images if any
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
      pdf.save(`Invoice-${payment.invoice_number}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  // Format dates
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const issueDate = new Date(payment.created_at).toLocaleDateString('en-US', dateOptions);

  // Create a time string if available, else Mock
  const timeString = new Date(payment.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

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
          className="bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-2 rounded font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>

      {/* Invoice Container */}
      <div
        ref={invoiceRef}
        className="bg-white w-full max-w-[800px] p-12 shadow-sm text-[#111827]"
        style={{ minHeight: '1123px' }} // Approx A4 height pixel ratio
      >
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl font-extrabold text-[#111827] mb-8">Invoice</h1>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-bold text-[#111827]">Invoice number</span>
                <span className="font-bold text-[#111827]">{payment.invoice_number}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-semibold text-[#111827]">Date of issue</span>
                <span className="text-[#111827]">{issueDate}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-semibold text-[#111827]">Date paid</span>
                <span className="text-[#111827]">{issueDate}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-semibold text-[#111827]">Credit card</span>
                <span className="text-[#111827] uppercase">
                  {payment.card_brand || 'CARD'} - XXXX XXXX XXXX {payment.card_last4 || 'XXXX'}
                </span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center">
                <span className="font-semibold text-[#111827]">Time of transaction</span>
                <span className="text-[#111827]">{timeString}</span>
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
              />
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-[#111827] text-sm mb-1">Achtrex</h3>
            <p className="text-[#111827] text-sm">support@achtrex.com</p>
          </div>
          <div>
            <h3 className="font-bold text-[#111827] text-sm mb-1">Bill to</h3>
            <p className="text-[#111827] text-sm mb-1">{client?.name || 'Valued Client'}</p>
            {client?.company && <p className="text-[#111827] text-sm mb-1">{client.company}</p>}
            <p className="text-[#111827] text-sm">{client?.email}</p>
          </div>
        </div>

        {/* Description & Credits */}
        <div className="grid grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="font-bold text-[#111827] text-sm mb-1">Description</h3>
            <p className="text-[#111827] text-sm">{payment.description}</p>
          </div>
          <div>
            {/* 
                  Since we might not have credits in the payment object, 
                  we'll conditionally render or leave blank related to credits 
                  unless it's part of the description or extracted. 
                  For now, I'll assume we can display something if available, or just Price.
                */}
            {/* <h3 className="font-bold text-gray-900 text-sm mb-1">Credits</h3>
                 <p className="text-gray-900 text-sm">3,000</p> */}
            <h3 className="font-bold text-[#111827] text-sm mb-1">Amount</h3>
            <p className="text-[#111827] text-sm">${Number(payment.amount).toFixed(2)}</p>
          </div>
        </div>

        {/* Paid Stamp */}
        {payment.status === 'paid' && (
          <div className="absolute top-40 right-40 opacity-20 pointer-events-none rotate-[-15deg] border-4 border-green-600 text-green-600 font-black text-6xl px-4 py-2 rounded-lg uppercase tracking-widest z-0">
            PAID
          </div>
        )}

        {/* Extra Details / APIs (Mocked/Static relative to image if no data) 
            The image shows a list of APIs. If 'APIs' aren't in the data, 
            I shouldn't invent them, but I can layout the 'Description' area nicely.
        */}

        <div className="mb-20">
          {/* Placeholder for item details if expanded, otherwise the description above covers it.
                 The design has a specific list of features. 
                 If the payload doesn't support structured features, we skip.
             */}
        </div>


        {/* Total Paid Block */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold text-[#111827]">
            ${Number(payment.amount).toLocaleString()} USD paid {issueDate}
          </h2>
        </div>

        {/* Thank You Footer */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#111827] mb-16">Thank you for your payment!</h2>

          <div className="text-xs text-gray-500 font-medium">
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
