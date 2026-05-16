"use client";

import { MessageCircle, Camera, Globe, Music } from 'lucide-react';

export default function SocialButtons() {
  const phoneNumber = "51987654321"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const instagramUrl = "https://instagram.com/tutiancestral";
  const tiktokUrl = "https://tiktok.com/@tutiancestral";
  const facebookUrl = "https://facebook.com/tutiancestral";

  return (
    <div className="social-float-container">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-float whatsapp"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-float instagram"
        aria-label="Instagram"
      >
        <Camera size={24} />
      </a>
      <a 
        href={tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-float tiktok"
        aria-label="TikTok"
      >
        <Music size={24} />
      </a>
      <a 
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-float facebook"
        aria-label="Facebook"
      >
        <Globe size={24} />
      </a>
    </div>
  );
}
