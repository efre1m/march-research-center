import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/careers')}
                    className="flex items-center gap-2 text-blue-600 mb-6 hover:underline transition-all duration-300 hover:text-blue-700"
                >
                    <ArrowLeft size={20} />
                    Back to Careers
                </button>

                {/* Custom Header - Replacing SectionHeader */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                            Job Application
                        </span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Apply for <span className="text-blue-600">{positionTitle || "Position"}</span>
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Submit your application to join our team
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200">
                    {submitError && (
                        <div className="bg-red-500/20 border border-red-500/30 text-red-600 p-4 rounded-lg mb-6">
                            {submitError}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-900 font-medium mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Write your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none ${errors.name ? 'border-red-500' : 'border-blue-300 focus:border-blue-500'
                                        }`}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm mt-1">This field is required</span>
                                )}
                            </div>

                            <div>
                                <label className="block text-gray-900 font-medium mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@domain.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none ${errors.email ? 'border-red-500' : 'border-blue-300 focus:border-blue-500'
                                        }`}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-1">
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
                            <label className="block text-gray-900 font-medium mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="+2519xxxxxxxx or 09xxxxxxxx"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none ${errors.phoneNumber ? 'border-red-500' : 'border-blue-300 focus:border-blue-500'
                                    }`}
                            />
                            {errors.phoneNumber && (
                                <span className="text-red-500 text-sm mt-1">
                                    Must be +2519xxxxxxxx or 09xxxxxxxx
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-900 font-medium mb-2">
                                Upload Resume (PDF or DOC/DOCX) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${errors.resume ? 'border-red-500' : 'border-blue-300 focus:border-blue-500'
                                    }`}
                            />
                            {errors.resume && (
                                <span className="text-red-500 text-sm mt-1">Resume is required</span>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-900 font-medium mb-2">
                                Cover Letter
                            </label>
                            <textarea
                                name="coverLetter"
                                rows={6}
                                placeholder="Explain why you're a good fit for this position..."
                                value={formData.coverLetter}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button
                                type="button"
                                variant="secondary"
                                className="flex-1 py-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                                onClick={() => navigate('/careers')}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                        </div>

                        <p className="text-gray-600 text-sm text-center">
                            <span className="text-red-500">*</span> indicates required fields
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Apply;