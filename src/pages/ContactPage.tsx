import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageSquare, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('activation');
  const [tagId, setTagId] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setTagId('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="content-page-wrapper">
      <div className="container">
        {/* Header */}
        <div className="content-page-header">
          <div className="section-pill purple" style={{ marginBottom: 12 }}>
            <MessageSquare size={14} />
            <span>24/7 DEDICATED CAREGIVER SUPPORT</span>
          </div>

          <h1 className="content-page-title">We're here for you & your child</h1>
          <p className="content-page-subtitle">
            Need help activating a tag, updating emergency phone numbers, or organizing safety wristbands for your school or summer camp? Reach out to our emergency support desk.
          </p>
        </div>

        {/* 2-Column Grid: Form (Left) | Contact Cards (Right) */}
        <div className="contact-grid">
          {/* Left Column: Form Card */}
          <div className="contact-form-card">
            <h3>Send our team a message</h3>
            <p className="contact-form-desc">
              Fill out the form below and an agent will reply within 15–30 minutes during daytime hours.
            </p>

            {submitted ? (
              <div className="contact-success-alert">
                <CheckCircle2 size={24} />
                <div>
                  <h4>Message Received!</h4>
                  <p>Our caregiver support desk has received your ticket. A specialist will reply to <strong>{email || 'your email'}</strong> promptly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Full Name</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      placeholder="Sarah Sinclair" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      placeholder="sarah@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-topic">Support Topic</label>
                    <select 
                      id="contact-topic"
                      value={category} 
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="activation">Tag Activation & Setup</option>
                      <option value="replacement">Lost Tag Replacement</option>
                      <option value="school">School / Camp Bulk Order</option>
                      <option value="billing">Billing & Membership</option>
                      <option value="other">General Question</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-tag-id">Physical Tag Code (Optional)</label>
                    <input 
                      id="contact-tag-id"
                      type="text" 
                      placeholder="e.g. KT-7842" 
                      value={tagId} 
                      onChange={(e) => setTagId(e.target.value.toUpperCase())} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-msg">How can we assist you?</label>
                  <textarea 
                    id="contact-msg"
                    rows={5} 
                    placeholder="Describe your inquiry, order question, or travel date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required 
                  />
                </div>

                <button type="submit" className="btn-primary contact-submit-btn">
                  <span>Send Message</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards */}
          <div className="contact-sidebar">
            {/* Urgent Hotline Card */}
            <div className="contact-hotline-card">
              <div className="hotline-badge">
                <span className="live-pulse-dot"></span>
                <span>24/7 PRIORITY HOTLINE</span>
              </div>
              <h3 className="hotline-number">1-800-KID-SAFE</h3>
              <p className="hotline-sub">
                Toll-free emergency helpdesk for lost tag verification, proxy assistance, and emergency re-routing.
              </p>
              <div className="hotline-hours">
                <Clock size={15} />
                <span>Available 24 hours a day, 365 days a year</span>
              </div>
            </div>

            {/* Email & Info Card */}
            <div className="contact-info-card">
              <div className="info-item">
                <div className="info-icon purple">
                  <Mail size={18} />
                </div>
                <div>
                  <h5>Direct Email Helpdesk</h5>
                  <p><strong>support@kidditag.com</strong></p>
                  <span>Replies within 15–30 mins</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon green">
                  <Phone size={18} />
                </div>
                <div>
                  <h5>School & Group Sales</h5>
                  <p><strong>schools@kidditag.com</strong></p>
                  <span>Volume discounts & PO ordering</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon violet">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5>Dispatch & Fulfillment Hub</h5>
                  <p>KiddieTag Technologies Inc.</p>
                  <span>Brooklyn, NY • Fast nationwide delivery</span>
                </div>
              </div>
            </div>

            {/* Safety Guarantee Snippet */}
            <div className="contact-trust-card">
              <ShieldCheck size={20} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
              <p>
                <strong>Family Privacy Guarantee:</strong> Inquiries are strictly confidential and handled by certified child safeguard personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
