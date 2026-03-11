import React, { useMemo, useState } from "react";
import "./seedbridge.css";
import Background from "./background";
import CenterSvg from "./center-graphic.svg";
import { useNavigate, useParams } from "react-router-dom";

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_2154_2114)">
      <path d="M8.36068 0.789433C5.9627 1.62131 3.89469 3.20024 2.46041 5.29431C1.02612 7.38838 0.30116 9.8872 0.392005 12.4237C0.482851 14.9603 1.38472 17.4008 2.96513 19.3869C4.54555 21.373 6.72121 22.8 9.17255 23.4582C11.1599 23.971 13.2421 23.9935 15.2401 23.5238C17.05 23.1173 18.7234 22.2476 20.0963 21.0001C21.5252 19.662 22.5624 17.9597 23.0963 16.0763C23.6765 14.0282 23.7797 11.8743 23.3982 9.78006H12.2382V14.4094H18.7013C18.5721 15.1478 18.2953 15.8525 17.8875 16.4814C17.4796 17.1102 16.949 17.6504 16.3276 18.0694C15.5384 18.5917 14.6487 18.943 13.7157 19.1007C12.7799 19.2747 11.8202 19.2747 10.8844 19.1007C9.93596 18.9048 9.03875 18.5134 8.25005 17.9513C6.98283 17.0543 6.03132 15.7799 5.5313 14.3101C5.02297 12.8126 5.02297 11.1893 5.5313 9.69193C5.88722 8.64234 6.47561 7.68669 7.25255 6.89631C8.14166 5.97521 9.2673 5.3168 10.506 4.99333C11.7446 4.66985 13.0485 4.6938 14.2744 5.06256C15.2322 5.35641 16.108 5.87008 16.8319 6.56256C17.5607 5.83756 18.2882 5.11068 19.0144 4.38193C19.3894 3.99006 19.7982 3.61693 20.1676 3.21568C19.0623 2.18728 17.765 1.387 16.35 0.860683C13.7732 -0.0749616 10.9538 -0.100106 8.36068 0.789433Z" fill="white"/>
      <path d="M8.36058 0.789367C10.9535 -0.100776 13.7729 -0.0762934 16.35 0.858742C17.7652 1.38864 19.0619 2.19277 20.1656 3.22499C19.7906 3.62624 19.395 4.00124 19.0125 4.39124C18.285 5.11749 17.5581 5.84124 16.8318 6.56249C16.1079 5.87001 15.2321 5.35635 14.2743 5.06249C13.0488 4.69244 11.745 4.66711 10.506 4.98926C9.26699 5.31141 8.14067 5.96861 7.25058 6.88874C6.47364 7.67912 5.88525 8.63477 5.52933 9.68437L1.64246 6.67499C3.03372 3.91604 5.44261 1.80566 8.36058 0.789367Z" fill="#E33629"/>
      <path d="M0.611279 9.6563C0.820041 8.62087 1.16689 7.61816 1.64253 6.67505L5.5294 9.69192C5.02107 11.1893 5.02107 12.8126 5.5294 14.31C4.2344 15.3101 2.93878 16.3151 1.64253 17.3251C0.452186 14.9556 0.0891526 12.256 0.611279 9.6563Z" fill="#F8BD00"/>
      <path d="M12.2381 9.77808H23.3981C23.7797 11.8723 23.6764 14.0262 23.0963 16.0743C22.5623 17.9577 21.5252 19.66 20.0963 20.9981C18.8419 20.0193 17.5819 19.0481 16.3275 18.0693C16.9494 17.6498 17.4802 17.1091 17.8881 16.4796C18.296 15.85 18.5726 15.1446 18.7013 14.4056H12.2381C12.2363 12.8643 12.2381 11.3212 12.2381 9.77808Z" fill="#587DBD"/>
      <path d="M1.64062 17.3251C2.93687 16.3251 4.2325 15.3201 5.5275 14.3101C6.02851 15.7804 6.98138 17.0549 8.25 17.9513C9.04116 18.5107 9.9403 18.899 10.89 19.0913C11.8257 19.2653 12.7855 19.2653 13.7213 19.0913C14.6543 18.9336 15.544 18.5823 16.3331 18.0601C17.5875 19.0388 18.8475 20.0101 20.1019 20.9888C18.7292 22.237 17.0558 23.1073 15.2456 23.5144C13.2476 23.9841 11.1655 23.9616 9.17813 23.4488C7.60632 23.0291 6.13814 22.2893 4.86563 21.2757C3.51886 20.2062 2.41882 18.8587 1.64062 17.3251Z" fill="#319F43"/>
    </g>
    <defs>
      <clipPath id="clip0_2154_2114">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_2154_2122)">
      <path d="M24 12C24 5.37262 18.6274 0 12 0C5.37262 0 0 5.37253 0 12C0 17.9895 4.38825 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6575 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3398 7.875 13.875 8.80003 13.875 9.74906V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6117 22.954 24 17.9896 24 12Z" fill="#1877F2"/>
      <path d="M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.79994 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6575 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6278 24.0002 13.2547 23.9514 13.875 23.8542V15.4688H16.6711Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_2154_2122">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
    <path d="M13.8537 3.98724C14.3262 3.44262 14.6865 2.81003 14.9139 2.12578C15.1413 1.44153 15.2312 0.719112 15.1786 0C13.7279 0.117101 12.3813 0.799392 11.4289 1.89987C10.9728 2.42731 10.6272 3.0409 10.4125 3.70431C10.1978 4.36772 10.1184 5.06747 10.179 5.76212C10.8866 5.76801 11.5861 5.611 12.2233 5.30322C12.8605 4.99544 13.4184 4.54517 13.8537 3.98724ZM17.0035 13.2866C17.0119 12.3289 17.2642 11.389 17.7365 10.5558C18.2089 9.72259 18.8858 9.02347 19.7033 8.52443C19.1874 7.78103 18.5053 7.16807 17.7113 6.73415C16.9172 6.30023 16.0329 6.05729 15.1286 6.0246C13.1788 5.82461 11.3789 7.16202 10.3415 7.16202C9.30402 7.16202 7.84162 6.0496 6.21672 6.0746C5.15446 6.10959 4.11939 6.4193 3.21248 6.97352C2.30558 7.52774 1.55779 8.30755 1.04207 9.23689C-1.15778 13.0616 0.479606 18.7488 2.67946 21.836C3.67939 23.3484 4.92931 25.0608 6.5792 24.9983C8.22909 24.9358 8.76655 23.9734 10.6789 23.9734C12.5913 23.9734 13.1788 24.9983 14.8037 24.9608C16.4285 24.9233 17.5785 23.4109 18.6284 21.8985C19.3722 20.8005 19.9531 19.6007 20.3533 18.3363C19.3627 17.9138 18.5176 17.2105 17.9222 16.3131C17.3269 15.4156 17.0075 14.3635 17.0035 13.2866Z" fill="white"/>
  </svg>
);

function Modal({ title, onClose, children }) {
  return (
    <div className="sma-modal__backdrop" role="dialog" aria-modal="true">
      <div className="sma-modal">
        <div className="sma-modal__head">
          <h3 className="sma-modal__title">{title}</h3>
          <button className="sma-modal__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="sma-modal__body">{children}</div>
        <div className="sma-modal__foot">
          <button className="hero-btn hero-btn--ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export const CreateAccount = () => {
  const navigate = useNavigate();
  const { role } = useParams();

  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const emailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email]
  );

  const passValid = pass.length >= 8;
  const confirmValid = confirm.length > 0 && confirm === pass;

  const canSubmit =
    businessName.trim().length > 0 &&
    emailValid &&
    passValid &&
    confirmValid &&
    agree;

  const pageContent = {
    sma: {
      title: "Create your SMA account",
      submitText: "Create SMA Account",
    },
    investor: {
      title: "Create your Investor account",
      submitText: "Create Investor Account",
    },
  };

  const currentPage = pageContent[role] || pageContent.sma;

  const onSocial = (provider) => {
    alert(`${provider} sign up clicked (demo)`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    navigate(`/verify-email/${role}`);
  };

  return (
    <>
      <Background />

      <main className="hero">
        <div className="hero-wrap">
          <section className="hero-card">
            <div className="hero-card__svg" aria-hidden="true">
              <img src={CenterSvg} alt="Graphic" />
            </div>

            <h1 className="sma-h1">{currentPage.title}</h1>

            <div className="sma-hrTitle">
              <span>Create Your Account With</span>
            </div>

            <div className="sma-social">
              <button
                type="button"
                className="sma-social__btn"
                onClick={() => onSocial("Google")}
              >
                <GoogleIcon />
                <span>Google</span>
              </button>

              <button
                type="button"
                className="sma-social__btn"
                onClick={() => onSocial("Facebook")}
              >
                <FacebookIcon />
                <span>Facebook</span>
              </button>

              <button
                type="button"
                className="sma-social__btn"
                onClick={() => onSocial("Apple")}
              >
                <AppleIcon />
                <span>Apple</span>
              </button>
            </div>

            <div className="sma-hrTitle sma-hrTitle--or">
              <span>OR sign up with email</span>
            </div>

            <form className="sma-form" onSubmit={onSubmit} noValidate>
              <label className="sma-label">
                <span className="sma-label-text">
                  Business / Founder Name <span className="sma-star">*</span>
                </span>

                <input
                  className="sma-input"
                  type="text"
                  placeholder="Acme Corp or Jane Doe"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </label>

              <label className="sma-label">
                <span className="sma-label-text">
                  Email Address <span className="sma-star">*</span>
                </span>
                <input
                  className={`sma-input ${email.length > 0 && !emailValid ? "is-error" : ""}`}
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="sma-label">
                <span className="sma-label-text">
                  Password <span className="sma-star">*</span>
                </span>
                <input
                  className={`sma-input ${pass.length > 0 && !passValid ? "is-error" : ""}`}
                  type="password"
                  placeholder="**********"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <div className="sma-hint">Minimum 8 characters</div>
              </label>

              <label className="sma-label">
                <span className="sma-label-text">
                  Confirm Password <span className="sma-star">*</span>
                </span>
                <input
                  className={`sma-input ${confirm.length > 0 && !confirmValid ? "is-error" : ""}`}
                  type="password"
                  placeholder="**********"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </label>

              <label className={`sma-agree ${agree ? "is-checked" : ""}`}>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />

                <span className="sma-check">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M8.615 1.495L3.865 6.245C3.695 6.415 3.475 6.495 3.245 6.495C3.025 6.495 2.805 6.415 2.635 6.245L0.255 3.875C-0.085 3.525 -0.085 2.975 0.255 2.635C0.595 2.295 1.155 2.295 1.495 2.635L3.245 4.385L7.375 0.255C7.715 -0.085 8.275 -0.085 8.615 0.255C8.955 0.605 8.955 1.155 8.615 1.495" fill="white"/>
                  </svg>
                </span>

                <span>
                  I agree to the
                  <button
                    type="button"
                    className="sma-link"
                    onClick={() => setShowTerms(true)}
                  >
                    Terms of Service
                  </button>
                  and
                  <button
                    type="button"
                    className="sma-link"
                    onClick={() => setShowPrivacy(true)}
                  >
                    Privacy Policy
                  </button>
                </span>
              </label>

              <button className="sma-submit" type="submit" disabled={!canSubmit}>
                {currentPage.submitText}
              </button>

              <div className="sma-login">
                Already have an account?{" "}
                <button
                  type="button"
                  className="sma-login__link"
                  onClick={() => navigate(`/login/${role}`)}
                >
                  Log in
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      {showTerms && (
        <Modal title="Terms of Service" onClose={() => setShowTerms(false)}>
          <p>Demo content. Put your real Terms of Service here.</p>
        </Modal>
      )}

      {showPrivacy && (
        <Modal title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
          <p>Demo content. Put your real Privacy Policy here.</p>
        </Modal>
      )}
    </>
  );
};

export default CreateAccount;