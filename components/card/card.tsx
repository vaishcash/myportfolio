import Image from "next/image";

import "./index.css";

export const Card = () => {
  return (
    <div className="expcard animated-expcard">
      <div className="expcard-bg">
        <p>
          ॐ भूर्भुवः स्वः, तत्सवितुर्वरेण्यं, भर्गो देवस्य धीमहि, धियो यो नः
          प्रचोदयात् ॥ ॐ त्र्य॑म्बकं यजामहे सु॒गन्धिं॑ पुष्टि॒वर्ध॑नम् ।
          उ॒र्वा॒रु॒कमि॑व॒ बन्ध॑नान् मृ॒त्योर्मु॑क्षीय॒ माऽमृता॑॑त् ।। ॐ देवी
          शैल्पुत्र्यै स्वाहा ।। ॐ देवी ब्रह्म्चरिण्यै नमः ।। ॐ देवी
          चन्द्रघन्टायै नमः ।। ॐ देवी कूष्माण्डायै नमः ।। ॐ देवी कात्यायन्यै नमः
          ।। ॐ देवी कालरात्र्यै नमः ।। ॐ देवी महागौर्यै नमः ।। ॐ देवी
          सिद्धिदात्र्यै नमः ।। ॐ महादेव्यै च विद्महे विष्णु पत्न्यै च धीमहि,
          तन्नो लक्ष्मीः प्रचोदयात्।
        </p>
      </div>
      <div className="expcard-cta">
        <p>Tap to read</p>
      </div>
      <div className="expcard-fg">
        <p className="expcard-fg-title">Quantum Computing Intern</p>
        <div className="expcard-fg-desc">
          <ul>
            <li>
              ✨ Optimising Power Distribution Network at the TCS Quantum
              Challenge 2023
            </li>
            <li>✨ Quantum Blockchain</li>
          </ul>
        </div>
        <div className="expcard-logo">
          <Image
            src="/images/exp_logos/creedandbear.png"
            alt="Creed &amp; Bear"
            fill
          />
          <p>Creed &amp; Bear</p>
        </div>
      </div>
    </div>
  );
};

const DEFAULT_BG_TEXT = `ॐ भूर्भुवः स्वः, तत्सवितुर्वरेण्यं, भर्गो देवस्य धीमहि, धियो यो नः
          प्रचोदयात् ॥ ॐ त्र्य॑म्बकं यजामहे सु॒गन्धिं॑ पुष्टि॒वर्ध॑नम् ।
          उ॒र्वा॒रु॒कमि॑व॒ बन्ध॑नान् मृ॒त्योर्मु॑क्षीय॒ माऽमृता॑॑त् ।। ॐ देवी
          शैल्पुत्र्यै स्वाहा ।। ॐ देवी ब्रह्म्चरिण्यै नमः ।। ॐ देवी
          चन्द्रघन्टायै नमः ।। ॐ देवी कूष्माण्डायै नमः ।। ॐ देवी कात्यायन्यै नमः
          ।। ॐ देवी कालरात्र्यै नमः ।। ॐ देवी महागौर्यै नमः ।। ॐ देवी
          सिद्धिदात्र्यै नमः ।। ॐ महादेव्यै च विद्महे विष्णु पत्न्यै च धीमहि,
          तन्नो लक्ष्मीः प्रचोदयात्।`;

export const BookCard = ({
  backDescription = DEFAULT_BG_TEXT,
  title,
  techStack,
   imgSrc,
}: {
  backDescription?: string;
  title: string;
 techStack: string[];
  imgSrc: string;
}) => {
  return (
    <div className="expcard animated-expcard z-30">
      <div className="expcard-bg">
        <p>{backDescription}</p>
      </div>
      <div className="expcard-cta">
        <p>Tap to read</p>
      </div>
      <div className="expcard-fg">
        <p className="expcard-fg-title">{title}</p>
        <div className="expcard-fg-desc">
          <ul>
            {/* <li>
              ✨ Optimising Power Distribution Network at the TCS Quantum
              Challenge 2023
            </li>
            <li>✨ Quantum Blockchain</li> */}
            {techStack.map((didThisText, index) => (
              <li key={didThisText + index}>✨ {didThisText}</li>
            ))}
          </ul>
        </div>
        <div className="expcard-logo">
          <Image src={imgSrc} alt="Creed &amp; Bear" fill />
          <p>Creed &amp; Bear</p>
        </div>
      </div>
    </div>
  );
};
