
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Register a nice font if possible, but standard ones are safer for starters
// Font.register({ family: 'Inter', src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2' });

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 10,
        color: '#111827',
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        width: 140,
        height: 60,
        objectFit: 'contain',
    },
    detailsRow: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    detailLabel: {
        width: 100,
        fontWeight: 'bold',
    },
    detailValue: {
        fontWeight: 'normal',
    },
    addressContainer: {
        flexDirection: 'row',
        gap: 40,
        marginBottom: 40,
    },
    addressBox: {
        flex: 1,
    },
    addressTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
        borderBottomStyle: 'solid',
        paddingBottom: 2,
    },
    table: {
        marginTop: 20,
        marginBottom: 40,
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#111827',
        borderBottomStyle: 'solid',
        paddingBottom: 5,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    tableRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    colDescription: {
        flex: 2,
    },
    colAmount: {
        flex: 1,
        textAlign: 'right',
    },
    totalSection: {
        marginTop: 20,
        alignItems: 'flex-start',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statusStamp: {
        position: 'absolute',
        top: 150,
        right: 40,
        fontSize: 60,
        color: 'rgba(22, 163, 74, 0.2)',
        transform: 'rotate(-15deg)',
        borderWidth: 4,
        borderColor: 'rgba(22, 163, 74, 0.2)',
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 8,
        fontWeight: 'black',
    },
    paymentDetails: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#F9FAFB',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderStyle: 'solid',
    },
    paymentTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 12,
    },
    footer: {
        marginTop: 'auto',
        textAlign: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        borderTopStyle: 'solid',
        paddingTop: 20,
        color: '#6B7280',
        fontSize: 8,
    },
    thankYou: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#111827',
    }
});

interface InvoicePDFProps {
    payment: any;
    client: any;
    logoSrc?: string;
    documentTitle?: string;
}

export const InvoicePDF: React.FC<InvoicePDFProps> = ({ payment, client, logoSrc, documentTitle = 'Invoice' }) => {
    const isPaid = payment.status === 'paid';
    const amountFormatted = Number(payment.amount).toLocaleString('en-US', {
        style: 'currency',
        currency: payment.currency || 'USD'
    });

    const dateOptions: any = { month: 'long', day: 'numeric', year: 'numeric' };
    const issueDate = payment.created_at ? new Date(payment.created_at).toLocaleDateString('en-US', dateOptions) : 'N/A';

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Status Stamp */}
                {isPaid && (
                    <Text style={styles.statusStamp}>PAID</Text>
                )}

                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>{documentTitle}</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailLabel}>Invoice number</Text>
                            <Text style={styles.detailValue}>{payment.invoice_number}</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailLabel}>Date of issue</Text>
                            <Text style={styles.detailValue}>{issueDate}</Text>
                        </View>
                    </View>
                    {logoSrc && (
                        <Image src={logoSrc} style={styles.logo} />
                    )}
                </View>

                {/* Addresses */}
                <View style={styles.addressContainer}>
                    <View style={styles.addressBox}>
                        <Text style={styles.addressTitle}>Achtrex</Text>
                        <Text>support@achtrex.com</Text>
                    </View>
                    <View style={styles.addressBox}>
                        <Text style={styles.addressTitle}>Bill to</Text>
                        <Text>{client?.name || 'Valued Client'}</Text>
                        {client?.company ? <Text>{client.company}</Text> : null}
                        <Text>{client?.email}</Text>
                    </View>
                </View>

                {/* Table */}
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.colDescription}>Description</Text>
                        <Text style={styles.colAmount}>Amount</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.colDescription}>{payment.description}</Text>
                        <Text style={styles.colAmount}>{amountFormatted}</Text>
                    </View>
                </View>

                {/* Total Section */}
                <View style={styles.totalSection}>
                    <Text style={styles.totalText}>
                        {amountFormatted} {isPaid ? `paid ${issueDate}` : 'due'}
                    </Text>
                </View>

                {/* Payment Details if Pending */}
                {!isPaid && (
                    <View style={styles.paymentDetails}>
                        <Text style={styles.paymentTitle}>Payment Details</Text>
                        <View style={styles.detailsRow}>
                            <Text style={{ width: 100, fontWeight: 'bold' }}>Bank Name:</Text>
                            <Text>Fidelity Bank</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={{ width: 100, fontWeight: 'bold' }}>Account Name:</Text>
                            <Text>Achtrex Services</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={{ width: 100, fontWeight: 'bold' }}>Account Number:</Text>
                            <Text>2400931904813</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={{ width: 100, fontWeight: 'bold' }}>SWIFT/BIC:</Text>
                            <Text>FBLIGHAC</Text>
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 8, fontStyle: 'italic', color: '#6B7280' }}>
                            Please use Invoice #{payment.invoice_number} as payment reference.
                        </Text>
                    </View>
                )}

                {/* Footer Section */}
                <View style={styles.footer}>
                    <Text style={styles.thankYou}>
                        {isPaid ? 'Thank you for your payment!' : 'Thank you for your business!'}
                    </Text>
                    <Text>© {new Date().getFullYear()} Copyright Achtrex. All rights reserved.</Text>
                    <Text>Contact Us | Privacy | Terms & Conditions</Text>
                </View>
            </Page>
        </Document>
    );
};
