"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Link, FacebookIcon, DockIcon, File, Share } from "lucide-react";

export default function ShareButtons({
  title,slug
}: {
  title: string, slug: string;
}) {
  const [copied, setCopied] = useState(false);

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        url,
      });
    }
  };

  return (
    <div className="flex gap-3 items-center mt-6 flex-wrap">
      <button onClick={copyLink} className="bg-gray-100 flex gap-1 items-center text-gray-500 py-2 px-3 rounded-full">
        <File size={18} />
        {copied ? "Copied!" : "Copy Link"}
      </button>

      <a href={shareLinks.facebook} target="_blank" className="bg-[#1877F2]  items-center hover:bg-[#005fdb] text-white py-2 px-3 rounded-full flex gap-1">
        <FacebookIcon size={18} />
        <span>Facebook</span>
      </a>

      <a href={shareLinks.twitter} target="_blank" className="bg-black items-center hover:bg-[#424242] text-white py-2 px-3 rounded-full flex gap-1">
        <Twitter size={18} /> Twitter
      </a>

      <a href={shareLinks.linkedin} target="_blank" className="bg-[#0A66C2] items-center hover:bg-[#00509f] text-white py-2 px-3 rounded-full flex gap-1">
       <Linkedin size={18} /> LinkedIn
      </a>

      <button onClick={nativeShare} className="bg-gray-400 hover:bg-gray-600 items-center text-white py-2 px-3 rounded-full flex gap-1">
        <Share size={16}/> Share
      </button>
    </div>
  );
}