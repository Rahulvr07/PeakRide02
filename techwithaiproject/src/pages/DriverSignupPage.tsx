import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const DriverSignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    licenseNumber: '',
    vehicleNumber: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.licenseNumber.trim()) {
      newErrors.licenseNumber = 'License number is required';
    }

    if (!formData.vehicleNumber.trim()) {
      newErrors.vehicleNumber = 'Vehicle number is required';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/driver/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Join PeakRide as a Driver</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Start earning by providing safe transportation in hill stations
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="card p-4 text-center">
              <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm">Verified Platform</p>
            </div>
            <div className="card p-4 text-center">
              <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm">Flexible Hours</p>
            </div>
            <div className="card p-4 text-center">
              <AlertCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm">24/7 Support</p>
            </div>
          </div>

          {/* Signup Form */}
          <div className="card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input w-full ${errors.name ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input w-full ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`input w-full ${errors.mobile ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="Enter your 10-digit mobile number"
                  maxLength={10}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  License Number *
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  className={`input w-full ${errors.licenseNumber ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="Enter your driving license number"
                />
                {errors.licenseNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Vehicle Number *
                </label>
                <input
                  type="text"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleChange}
                  className={`input w-full ${errors.vehicleNumber ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="Enter your vehicle registration number"
                />
                {errors.vehicleNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.vehicleNumber}</p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Sign Up as Driver'}
                </button>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                By signing up, you agree to our{' '}
                <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSignupPage;