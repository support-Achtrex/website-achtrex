import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import React from 'react';

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 10,
        lineHeight: 1.5,
        fontFamily: 'Helvetica',
        color: '#374151',
    },
    statusStamp: {
        position: 'absolute',
        top: 40,
        right: 40,
        fontSize: 24,
        color: '#10B981',
        borderWidth: 2,
        borderColor: '#10B981',
        borderStyle: 'solid',
        padding: 5,
        borderRadius: 4,
        opacity: 0.8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
        borderBottomStyle: 'solid',
        paddingBottom: 20,
    },
    logo: {
        width: 120,
        height: 50,
    },
    title: {
        fontSize: 24,
        color: '#111827',
    },
    detailsRow: {
        flexDirection: 'row',
        marginTop: 4,
    },
    detailLabel: {
        width: 80,
        color: '#6B7280',
    },
    detailValue: {
        color: '#111827',
    },
    addressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    addressBox: {
        width: '45%',
    },
    addressTitle: {
        fontSize: 12,
        color: '#111827',
        marginBottom: 5,
    },
    table: {
        width: '100%',
        marginBottom: 30,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        padding: 8,
        color: '#111827',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#E5E7EB',
        borderBottomStyle: 'solid',
        padding: 8,
    },
    colDescription: {
        flex: 3,
    },
    colAmount: {
        flex: 1,
        textAlign: 'right',
    },
    totalSection: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 40,
    },
    totalText: {
        fontSize: 14,
        color: '#111827',
        backgroundColor: '#F9FAFB',
        padding: 10,
        borderRadius: 4,
    },
    paymentDetails: {
        backgroundColor: '#F9FAFB',
        padding: 15,
        borderRadius: 6,
        marginBottom: 30,
    },
    paymentTitle: {
        fontSize: 12,
        color: '#111827',
        marginBottom: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        right: 40,
        textAlign: 'center',
        color: '#9CA3AF',
        fontSize: 8,
        borderTopWidth: 0.5,
        borderTopColor: '#E5E7EB',
        borderTopStyle: 'solid',
        paddingTop: 15,
    },
    thankYou: {
        fontSize: 10,
        color: '#4B5563',
        marginBottom: 5,
    }
});

const htmlStyles = StyleSheet.create({
    body: {
        fontSize: 10,
        color: '#4B5563',
        lineHeight: 1.5,
    },
    table: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 10,
    },
    tr: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    th: {
        backgroundColor: '#F3F4F6',
        padding: 4,
        fontWeight: 'bold',
        borderRightWidth: 1,
        borderRightColor: '#E5E7EB',
    },
    td: {
        padding: 4,
        borderRightWidth: 1,
        borderRightColor: '#E5E7EB',
    },
    p: {
        margin: 0,
        padding: 0,
    }
});

interface InvoicePDFProps {
    payment: any;
    client: any;
    logoSrc?: string;
    documentTitle?: string;
}

export const InvoicePDF: React.FC<InvoicePDFProps> = ({ payment, client, logoSrc, documentTitle = 'Invoice' }) => {
    const isPaid = payment && payment.status === 'paid';
    const amountFormatted = payment ? Number(payment.amount).toLocaleString('en-US', {
        style: 'currency',
        currency: payment.currency || 'USD'
    }) : '$0.00';

    const dateOptions: any = { month: 'long', day: 'numeric', year: 'numeric' };
    const issueDate = payment && payment.created_at ? new Date(payment.created_at).toLocaleDateString('en-US', dateOptions) : 'N/A';

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
                        <Text style={styles.title}>{documentTitle || 'Invoice'}</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailLabel}>Invoice number</Text>
                            <Text style={styles.detailValue}>{(payment && payment.invoice_number) || 'N/A'}</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailLabel}>Date of issue</Text>
                            <Text style={styles.detailValue}>{issueDate || 'N/A'}</Text>
                        </View>
                    </View>

                </View>

                {/* Addresses */}
                <View style={styles.addressContainer}>
                    <View style={styles.addressBox}>
                        <Text style={styles.addressTitle}>Achtrex</Text>
                        <Text>support@achtrex.com</Text>
                    </View>
                    <View style={styles.addressBox}>
                        <Text style={styles.addressTitle}>Bill to</Text>
                        <Text>{(client && client.name) || 'Valued Client'}</Text>
                        {(client && client.company) ? <Text>{client.company}</Text> : null}
                        <Text>{(client && client.email) || ''}</Text>
                    </View>
                </View>

                {/* Table */}
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.colDescription}>Description</Text>
                        <Text style={styles.colAmount}>Amount</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.colDescription}>
                            <Html stylesheet={htmlStyles}>{(payment && payment.description) || 'No description'}</Html>
                        </View>
                        <Text style={styles.colAmount}>{amountFormatted || '$0.00'}</Text>
                    </View>
                </View>

                {/* Total Section */}
                <View style={styles.totalSection}>
                    <Text style={styles.totalText}>
                        {amountFormatted || '$0.00'} {isPaid ? `paid ${issueDate}` : 'due'}
                    </Text>
                </View>

                {/* Payment Details if Pending */}
                {!isPaid && (
                    <View style={styles.paymentDetails}>
                        <Text style={styles.paymentTitle}>Payment Details</Text>
                        <View style={styles.detailsRow}>
                            <Text style={{ width: 100 }}>Bank Name:</Text>
                            <Text>Fidelity Bank</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={{ width: 100 }}>Account Name:</Text>
                            <Text>Achtrex Services</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={{ width: 100 }}>Account Number:</Text>
                            <Text>2400931904813</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={{ width: 100 }}>SWIFT/BIC:</Text>
                            <Text>FBLIGHAC</Text>
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 8, fontStyle: 'italic', color: '#6B7280' }}>
                            Please use Invoice #{(payment && payment.invoice_number) || 'N/A'} as payment reference.
                        </Text>
                    </View>
                )}

                {/* Footer Section */}
                <View style={styles.footer}>
                    <Text style={styles.thankYou}>
                        {isPaid ? 'Thank you for your payment!' : 'Thank you for your business!'}
                    </Text>
                    <Text>{`© ${new Date().getFullYear()} Copyright Achtrex. All rights reserved.`}</Text>
                    <Text>Contact Us | Privacy | Terms & Conditions</Text>
                </View>
            </Page>
        </Document>
    );
};
