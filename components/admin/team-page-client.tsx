'use client'

import React, { useState } from 'react';
import TeamMemberCard from '@/components/admin/team-member-card';
import TeamMemberForm, { TeamMemberFormData } from '@/components/admin/team-member-form';
import { createTeamMember, updateTeamMember, deleteTeamMember } from '@/app/admin/team/actions';
import { Plus } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: string;
    image: string | null;
}

interface TeamPageClientProps {
    initialMembers: TeamMember[];
}

const TeamPageClient = ({ initialMembers }: TeamPageClientProps) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
    const { addToast, removeToast, updateToast } = useToast();

    const handleAddClick = () => {
        setEditingMember(null);
        setIsFormOpen(true);
    };

    const handleEditClick = (member: any) => {
        setEditingMember(member);
        setIsFormOpen(true);
    };

    const handleDeleteClick = async (id: string) => {
        if (confirm('Are you sure you want to delete this team member?')) {
            const toastId = addToast('Deleting team member...', 'loading');
            
            try {
                const result = await deleteTeamMember(id);
                
                if (result.success) {
                    updateToast(toastId, 'Team member deleted successfully', 'success');
                } else {
                    updateToast(toastId, result.message || 'Failed to delete member', 'error');
                }
            } catch (error) {
                updateToast(toastId, 'An unexpected error occurred', 'error');
            }
        }
    };

    const handleFormSubmit = async (formData: FormData) => {
        const isEdit = !!editingMember;
        const toastId = addToast(isEdit ? 'Updating profile...' : 'Adding team member...', 'loading');
        
        try {
            let result;
            if (isEdit) {
                result = await updateTeamMember(formData);
            } else {
                result = await createTeamMember(formData);
            }
            
            if (result.success) {
                updateToast(toastId, isEdit ? 'Profile updated successfully' : 'Team member added successfully', 'success');
                return result;
            } else {
                updateToast(toastId, result.message || 'Operation failed', 'error');
                return result;
            }
        } catch (error) {
            updateToast(toastId, 'An unexpected error occurred', 'error');
            return { success: false, message: 'An unexpected error occurred' };
        }
    };

    const handleFormSuccess = () => {
        setIsFormOpen(false);
        setEditingMember(null);
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Header / Toolbar */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 font-display">Team Members</h1>
                    <p className="text-gray-500 text-sm">Manage your team and their roles.</p>
                </div>
                <button 
                    onClick={handleAddClick}
                    className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                    <Plus size={18} />
                    <span>Add Member</span>
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {initialMembers.map((member) => (
                    <TeamMemberCard 
                        key={member.id} 
                        member={member} 
                        onEdit={handleEditClick}
                        onDelete={handleDeleteClick}
                    />
                ))}
            </div>

            {/* Modal Form */}
            {isFormOpen && (
                <TeamMemberForm
                    title={editingMember ? 'Edit Team Member' : 'Add New Team Member'}
                    submitLabel={editingMember ? 'Save Changes' : 'Add Member'}
                    initialData={editingMember ? {
                        id: editingMember.id,
                        name: editingMember.name,
                        email: editingMember.email,
                        role: editingMember.role,
                        image: editingMember.image
                    } : undefined}
                    onSubmit={async (formData) => {
                        const result = await handleFormSubmit(formData);
                        if (result.success) {
                            handleFormSuccess();
                        }
                        return result;
                    }}
                    onCancel={() => setIsFormOpen(false)}
                />
            )}
        </div>
    );
};

export default TeamPageClient;
