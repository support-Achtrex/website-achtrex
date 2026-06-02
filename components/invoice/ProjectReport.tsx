import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
    page: {
        padding: 50,
        fontSize: 10,
        lineHeight: 1.5,
        fontFamily: 'Helvetica',
        color: '#374151',
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
    reportTitle: {
        fontSize: 24,
        color: '#111827',
    },
    dateRange: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 5,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 14,
        color: '#111827',
        backgroundColor: '#F3F4F6',
        padding: 5,
        marginBottom: 10,
        borderRadius: 4,
    },
    infoGrid: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 20,
    },
    infoItem: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 8,
        color: '#6B7280',
        textTransform: 'uppercase',
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 11,
        color: '#111827',
    },
    noteItem: {
        marginBottom: 8,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: '#3B82F6',
        borderLeftStyle: 'solid',
    },
    noteContent: {
        fontSize: 10,
        color: '#4B5563',
    },
    noteDate: {
        fontSize: 8,
        color: '#9CA3AF',
        marginTop: 2,
    },
    milestoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#F3F4F6',
        borderBottomStyle: 'solid',
    },
    milestoneDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 10,
    },
    completedDot: {
        backgroundColor: '#10B981',
    },
    pendingDot: {
        backgroundColor: '#D1D5DB',
    },
    milestoneText: {
        fontSize: 10,
        flex: 1,
    },
    completedText: {
        color: '#9CA3AF',
        textDecoration: 'line-through',
    },
    statusBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    },
    progressTrack: {
        flex: 1,
        height: 8,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressValue: {
        height: '100%',
        backgroundColor: '#8B5CF6',
    },
    footer: {
        position: 'absolute',
        bottom: 50,
        left: 50,
        right: 50,
        textAlign: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        borderTopStyle: 'solid',
        paddingTop: 20,
        color: '#9CA3AF',
        fontSize: 8,
    }
});

interface ProjectReportProps {
    subscriber: any;
    notes: any[];
    milestones: any[];
    logoSrc?: string;
    reportType?: string;
}

const HtmlContent = ({ html }: { html: string }) => {
    if (!html) return null;
    
    // Basic parser to split text and images
    const parts = html.split(/(<img[^>]+src="([^">]+)"[^>]*>)/g);

    return (
        <View>
            {parts.map((part, index) => {
                if (!part) return null;
                
                // If it starts with <img, we ignore this as we use the captured src group
                if (part.startsWith('<img')) return null;

                // If it looks like a data URL or http url, it's the image source
                if (part.startsWith('data:image') || part.startsWith('http')) {
                    return (
                        <Image
                            key={index}
                            src={part}
                            style={{
                                marginVertical: 5,
                                borderRadius: 4,
                                maxHeight: 200,
                                
                            }}
                        />
                    );
                }

                // Otherwise it's text (html tags stripped)
                const text = part.replace(/<[^>]+>/g, '').trim();
                if (!text) return null;

                return (
                    <Text key={index} style={styles.noteContent}>
                        {text || ''}
                    </Text>
                );
            })}
        </View>
    );
};

export const ProjectReport: React.FC<ProjectReportProps> = ({ subscriber, notes, milestones, logoSrc, reportType = "Project Status Report" }) => {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Filter notes for the last 7 days for "weekly updates"
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const weeklyUpdates = notes.filter(n => n.created_at && new Date(n.created_at) >= oneWeekAgo);

    const completedCount = milestones.filter(m => m.status === 'completed').length;
    const progressPercent = milestones.length > 0 ? Math.round((completedCount / milestones.length) * 100) : 0;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.reportTitle}>{reportType || 'Report'}</Text>
                        <Text style={styles.dateRange}>{`Generated on ${today || ''}`}</Text>
                    </View>
                </View>

                {/* Client Info */}
                <View style={styles.infoGrid}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Client</Text>
                        <Text style={styles.infoValue}>{(subscriber && (subscriber.name || subscriber.email)) || 'N/A'}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Company</Text>
                        <Text style={styles.infoValue}>{(subscriber && subscriber.company) || 'N/A'}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Project Status</Text>
                        <Text style={styles.infoValue}>{`${progressPercent || 0}% Complete`}</Text>
                    </View>
                </View>

                {/* Summary / Progress Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Project Roadmap & Progress</Text>
                    <View style={styles.statusBar}>
                        <View style={styles.progressTrack}>
                            <View style={{ ...styles.progressValue, width: `${progressPercent || 0}%` }} />
                        </View>
                        <Text>{`${progressPercent || 0}%`}</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        {milestones.map((m, i) => (
                            <View key={i} style={styles.milestoneRow}>
                                <View style={m.status === 'completed' ? [styles.milestoneDot, styles.completedDot] : [styles.milestoneDot, styles.pendingDot]} />
                                <Text style={m.status === 'completed' ? [styles.milestoneText, styles.completedText] : styles.milestoneText}>
                                    {m.milestone || 'Untitled Milestone'}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Recent Updates Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Weekly Updates & Notes</Text>
                    {weeklyUpdates.length > 0 ? (
                        weeklyUpdates.map((note, i) => (
                            <View key={i} style={styles.noteItem}>
                                <HtmlContent html={note.content || ''} />
                                <Text style={styles.noteDate}>
                                    {note.created_at ? new Date(note.created_at).toLocaleDateString() : ''}
                                </Text>
                            </View>
                        ))
                    ) : (
                        <Text style={{ color: '#9CA3AF' }}>No updates recorded for this week.</Text>
                    )}
                </View>

                <View style={styles.footer}>
                    <Text>{`© ${new Date().getFullYear()} Achtrex. All rights reserved.`}</Text>
                    <Text>Transforming Ideas into Digital Reality</Text>
                </View>
            </Page>
        </Document>
    );
};
