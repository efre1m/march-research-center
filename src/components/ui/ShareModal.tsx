import React, { useState } from 'react';
import { X, MessageCircle, Twitter, Facebook, Linkedin, Mail, Link2 } from 'lucide-react';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    url: string;
    type?: 'news' | 'story' | 'event';
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title, url, type = 'news' }) => {
    const [copied, setCopied] = useState(false);

    const shareText = `Check out this ${type}: ${title}`;
    const displayType = type.charAt(0).toUpperCase() + type.slice(1);

    const shareOptions = [
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            color: 'bg-green-500 hover:bg-green-600',
            url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`
        },
        {
            name: 'Telegram',
            icon: MessageCircle,
            color: 'bg-blue-400 hover:bg-blue-500',
            url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`
        },
        {
            name: 'Twitter',
            icon: Twitter,
            color: 'bg-black hover:bg-gray-800',
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`
        },
        {
            name: 'Facebook',
            icon: Facebook,
            color: 'bg-blue-600 hover:bg-blue-700',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            color: 'bg-blue-700 hover:bg-blue-800',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        },
        {
            name: 'Email',
            icon: Mail,
            color: 'bg-gray-600 hover:bg-gray-700',
            url: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareText + ' ' + url)}`
        }
    ];

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full border border-blue-200 animate-slideUp">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Share This {displayType}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    {shareOptions.map((option) => {
                        const IconComponent = option.icon;
                        return (
                            <a
                                key={option.name}
                                href={option.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 group"
                                onClick={onClose}
                            >
                                <div className={`p-3 rounded-full ${option.color} transition-colors`}>
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                                    {option.name}
                                </span>
                            </a>
                        );
                    })}
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={url}
                        readOnly
                        className="flex-1 px-3 py-2 border border-blue-200 rounded-lg text-sm text-gray-700 bg-gray-50"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 min-w-20 justify-center"
                    >
                        {copied ? (
                            'Copied!'
                        ) : (
                            <>
                                <Link2 className="w-4 h-4" />
                                Copy
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;