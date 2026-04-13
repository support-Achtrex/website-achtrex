import React from 'react';

interface InvoiceTemplateProps {
    payment: any;
    client: any;
    logoSrc: string;
}

export const InvoiceTemplate: React.FC<InvoiceTemplateProps> = ({ payment, client, logoSrc }) => {
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

    // Determine status color and text for footer
    const isPaid = payment.status === 'paid';

    return (
        <div
            className="w-full max-w-[800px] p-12 shadow-sm mx-auto"
            style={{ minHeight: '1123px', backgroundColor: '#ffffff', color: '#111827', fontFamily: 'Inter, sans-serif' }}
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
                        {isPaid && (
                            <div className="grid grid-cols-[140px_1fr] items-center">
                                <span className="font-semibold" style={{ color: '#111827' }}>Credit card</span>
                                <span className="uppercase" style={{ color: '#111827' }}>
                                    {payment.card_brand || 'CARD'} - XXXX XXXX XXXX {payment.card_last4 || 'XXXX'}
                                </span>
                            </div>
                        )}
                        {isPaid && (
                            <div className="grid grid-cols-[140px_1fr] items-center">
                                <span className="font-semibold" style={{ color: '#111827' }}>Time of transaction</span>
                                <span style={{ color: '#111827' }}>{timeString}</span>
                            </div>
                        )}
                    </div>
                </div>


                <div className="flex flex-col items-end">
                    {/* Logo - using standard img for compatibility with Puppeteer */}
                    <div className="relative w-48 h-20 mb-2">
                        <img
                            src={logoSrc}
                            alt="Achtrex Logo"
                            style={{ objectFit: 'contain', objectPosition: 'right top', width: '100%', height: '100%' }}
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
                    <p className="text-sm" style={{ color: '#111827' }}>{Number(payment.amount).toLocaleString('en-US', { style: 'currency', currency: payment.currency || 'USD' })}</p>
                </div>
            </div>

            {/* Paid Stamp */}
            {isPaid && (
                <div
                    className="absolute top-40 right-40 opacity-20 pointer-events-none rotate-[-15deg] border-4 font-black text-6xl px-4 py-2 rounded-lg uppercase tracking-widest z-0"
                    style={{ color: '#16a34a', borderColor: '#16a34a' }}
                >
                    PAID
                </div>
            )}

            <div className="mb-20"></div>

            {/* Total Paid / Due Block */}
            <div className="mb-32">
                <h2 className="text-2xl font-bold" style={{ color: '#111827' }}>
                    {Number(payment.amount).toLocaleString('en-US', { style: 'currency', currency: payment.currency || 'USD' })} {isPaid ? `paid ${issueDate}` : 'due'}
                </h2>

                {!isPaid && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200" style={{ backgroundColor: '#F9FAFB', borderColor: '#E5E7EB' }}>
                        <h3 className="font-bold text-lg mb-4" style={{ color: '#111827' }}>Payment Details</h3>
                        <div className="space-y-2 text-sm" style={{ color: '#374151' }}>
                            <div className="grid grid-cols-[140px_1fr]">
                                <span className="font-semibold">Bank Name:</span>
                                <span>Fidelity Bank</span>
                            </div>
                            <div className="grid grid-cols-[140px_1fr]">
                                <span className="font-semibold">Account Name:</span>
                                <span>Achtrex Services</span>
                            </div>
                            <div className="grid grid-cols-[140px_1fr]">
                                <span className="font-semibold">Account Number:</span>
                                <span>2400931904813</span>
                            </div>
                            <div className="grid grid-cols-[140px_1fr]">
                                <span className="font-semibold">SWIFT/BIC:</span>
                                <span>FBLIGHAC</span>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-gray-500 italic">Please use Invoice #{payment.invoice_number} as payment reference.</p>
                    </div>
                )}
            </div>

            {/* Thank You Footer */}
            <div className="text-center">
                <h2 className="text-4xl font-extrabold mb-16" style={{ color: '#111827' }}>
                    {isPaid ? 'Thank you for your payment!' : 'Thank you for your business!'}
                </h2>

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
    );
};
