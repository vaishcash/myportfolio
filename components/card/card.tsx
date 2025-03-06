"use client";

import { useState } from "react";
import "./index.css";

const DEFAULT_BG_TEXT = `ॐ भूर्भुवः स्वः, तत्सवितुर्वरेण्यं, भर्गो देवस्य धीमहि, धियो यो नः
          प्रचोदयात् ॥ ॐ त्र्य॑म्बकं यजामहे सु॒गन्धिं॑ पुष्टि॒वर्ध॑नम् ।
          उ॒र्वा॒रु॒कमि॑व॒ बन्ध॑नान् मृ॒त्योर्मु॑क्षीय॒ माऽमृता॑॑त् ।। ॐ देवी
          शैल्पुत्र्यै स्वाहा ।। ॐ देवी ब्रह्म्चरिण्यै नमः ।। ॐ देवी
          चन्द्रघन्टायै नमः ।। ॐ देवी कूष्माण्डायै नमः ।। ॐ देवी कात्यायन्यै नमः
          ।। ॐ देवी कालरात्र्यै नमः ।। ॐ देवी महागौर्यै नमः ।। ॐ देवी
          सिद्धिदात्र्यै नमः ।। ॐ महादेव्यै च विद्महे विष्णु पत्न्यै च धीमहि,
          तन्नो लक्ष्मीः प्रचोदयात्।`;

interface BookCardProps {
  backDescription?: string;
  title: string;
  techStack: string[];
  description: string;
}

export const BookCard = ({
  backDescription = DEFAULT_BG_TEXT,
  title,
  techStack,
  description,
}: BookCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expcard animated-expcard z-30">
      {/* Background Text */}
      <div className="expcard-bg">
        <p>{backDescription}</p>
      </div>

      {/* Clickable CTA */}
      <div
        className="expcard-cta"
        onClick={() => setIsOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <p>Tap to read</p>
      </div>

      {/* Foreground Content */}
      <div className="expcard-fg">
        <p className="expcard-fg-title">{title}</p>
        <div className="expcard-fg-desc">
          <ul>
            {techStack.map((tech, index) => (
              <li key={tech + index}>✨ {tech}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-purple-400">Description</h2>
            <p>{description}</p>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
