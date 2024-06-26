import { useEffect } from 'react';

export default function InBadge() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="DARK"
      data-type="VERTICAL"
      data-vanity="chamarasanjeewa"
      data-version="v1"
    ></div>
  );
}
