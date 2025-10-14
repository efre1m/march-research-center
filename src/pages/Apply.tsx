import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Apply: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);

    const vacancyId = searchParams.get("vacancyId");
    const positionTitle = searchParams.get("title");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        resume: null as File | null,
        coverLetter: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phoneNumber: false,
        resume: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        const ethioPattern = /^(?:\+2519\d{8}|09\d{8})$/;
        return ethioPattern.test(phone);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            const validTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];

            if (!validTypes.includes(file.type)) {
                setSubmitError("Only PDF or DOC/DOCX files are allowed.");
                return;
            }

            setFormData((prev) => ({ ...prev, resume: file }));
            if (errors.resume) {
                setErrors((prev) => ({ ...prev, resume: false }));
            }
            setSubmitError("");
        }
    };

    const validateForm = (): boolean => {
        const newErrors = {
            name: !formData.name.trim(),
            email: !validateEmail(formData.email),
            phoneNumber: !validatePhone(formData.phoneNumber),
            resume: !formData.resume,
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError("");

        if (!vacancyId) {
            setSubmitError("Vacancy ID is missing.");
            return;
        }

        if (!validateForm()) {
            setSubmitError("Please fill all required fields correctly.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Reset form on success
            setFormData({
                name: "",
                email: "",
                phoneNumber: "",
                resume: null,
                coverLetter: "",
            });

            alert("Application submitted successfully!");
            navigate('/careers');
        } catch (error) {
            console.error("Submission failed:", error);
            setSubmitError("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/careers')}
                    className="flex items-center gap-2 text-gold mb-6 hover:underline transition-all duration-300"
                >
                    <ArrowLeft size={20} />
                    Back to Careers
                </button>

                <SectionHeader
                    title={`Apply for ${positionTitle || "Position"}`}
                    subtitle="Submit your application to join our team"
                    variant="modern"
                />

                <Card className="p-8">
                    {submitError && (
                        <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6">
                            {submitError}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white font-medium mb-2">
                                    Full Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Write your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-dark-blue border rounded-lg text-white placeholder-white/60 focus:outline-none ${errors.name ? 'border-red-500' : 'border-gold/30 focus:border-gold'
                                        }`}
                                />
                                {errors.name && (
                                    <span className="text-red-400 text-sm mt-1">This field is required</span>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">
                                    Email Address <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@domain.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-dark-blue border rounded-lg text-white placeholder-white/60 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gold/30 focus:border-gold'
                                        }`}
                                />
                                {errors.email && (
                                    <span className="text-red-400 text-sm mt-1">
                                        {!formData.email.includes("@")
                                            ? "Email must contain @ symbol"
                                            : !formData.email.includes(".")
                                                ? "Email must contain a domain"
                                                : "Please enter a valid email address"}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">
                                Phone Number <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="+2519xxxxxxxx or 09xxxxxxxx"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-dark-blue border rounded-lg text-white placeholder-white/60 focus:outline-none ${errors.phoneNumber ? 'border-red-500' : 'border-gold/30 focus:border-gold'
                                    }`}
                            />
                            {errors.phoneNumber && (
                                <span className="text-red-400 text-sm mt-1">
                                    Must be +2519xxxxxxxx or 09xxxxxxxx
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">
                                Upload Resume (PDF or DOC/DOCX) <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className={`w-full px-4 py-3 bg-dark-blue border rounded-lg text-white focus:outline-none ${errors.resume ? 'border-red-500' : 'border-gold/30 focus:border-gold'
                                    }`}
                            />
                            {errors.resume && (
                                <span className="text-red-400 text-sm mt-1">Resume is required</span>
                            )}
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">
                                Cover Letter
                            </label>
                            <textarea
                                name="coverLetter"
                                rows={6}
                                placeholder="Explain why you're a good fit for this position..."
                                value={formData.coverLetter}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button
                                type="button"
                                variant="secondary"
                                className="flex-1 py-3"
                                onClick={() => navigate('/careers')}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                className="flex-1 py-3"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                        </div>

                        <p className="text-white/60 text-sm text-center">
                            <span className="text-red-400">*</span> indicates required fields
                        </p>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Apply;